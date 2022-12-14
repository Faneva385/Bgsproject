
import {render, unmountComponentAtNode} from 'react-dom'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useFetch, usePaginatedFetch} from "./hook";
import {Icon} from "../utils/Icon";
import {Field} from "../utils/Form";


const dateFormat = {
    dateStyle: "medium",
    timeStyle: 'short'
}

const VIEW= 'VIEW'
const EDIT= 'EDIT'

function CommentForm({post=null, onComment, comment=null, onCancel=null}) {
    // Variables
    const ref = useRef(null)

    //Methods
    const onSuccess=useCallback(comment=> {
        onComment(comment)
        ref.current.value=''
    }, [ref, onComment])
    const onSubmit= useCallback(e=>{
        e.preventDefault()
        load({
            content: ref.current.value,
            post: '/api/posts/' + post
        })
    },[ref, load, post])

    //Hooks
    const method = comment ? 'PUT': 'POST'
    const url= comment ? comment['@id'] : '/api/comments'
    const {load, loading, errors, clearErrors} = useFetch(url, method, onSuccess)

    //Effects
    useEffect(()=>{
        if(comment && comment.content && ref.current){
            ref.current.value=comment.content
        }

    }, [comment, ref])


    // console.log(ref.current.value)
    return <div className="well">
     <form onSubmit={onSubmit}>
         {comment === null &&<fieldset>
             <legend><Icon icon="comment"/> Laisser un commentaire</legend>
         </fieldset>}
        <Field
            name="content"
            help="Les commentaires non conformes à notre code de conduites seront modérés"
            ref={ref}
            required
            minLength={5}
            onChange={clearErrors.bind(this,'content')}
            error={errors['content']}
        >Votre commentaire</Field>
        <div className="form-group">
            <button className="btn btn-primary" disabled={loading}><Icon icon="paper-plane"/> {comment === null ? "Envoyer": "Editer"}</button>
            {onCancel && <button className="btn btn-secondary" onClick={onCancel}>
            Annuler
                </button>
            }
        </div>
    </form>
</div>

}

export function Comments({post, user})  {
    const {items:comments,setItems: setComments,load,loading,count, hasMore}=usePaginatedFetch('/api/comments?post='+post)

    const addComment=useCallback(comment =>{
        setComments(comments=> [comment,...comments])
    }, [])

    const deleteComment=useCallback(comment =>{
        setComments(comments=> comments.filter(c=>c!==comment))
    }, [])

    const updateComment=useCallback((newComment, oldComment) =>{
        setComments(comments=> comments.map(c=>c===oldComment?newComment:c))
    }, [])

    useEffect(()=>{
        load()
    },[])

    return <div>
        <TitleComment count={count}/>
        {comments.map(c =>
            <Comment
                key={c.id}
                comment={c}
                canEdit={c.author.id===user}
                onDelete={deleteComment}
                onUpdate={updateComment}
            />
            )}

        {hasMore && <button disabled={loading} className="btn btn-primary" onClick={load}>Charger plus de commentaire</button>}
        <br/> { user !== 0 && <CommentForm post={post} onComment={addComment}/> }
    </div>
}

const Comment= React.memo(({comment, onDelete, canEdit, onUpdate})=> {
    const date= new Date(comment.createdAt)

    //Events
    const toggleEdit= useCallback(()=> {
        setState(state=>state===VIEW?EDIT:VIEW)
    }, [])
    const onDeleteCallback=useCallback(()=>{
        onDelete(comment)
    },[comment])
    const onComment= useCallback((newComment)=>{
        onUpdate(newComment, comment )
        toggleEdit()
    },[comment])

    //Hook
    const [state, setState]=useState(VIEW)
    const {loading:loadingDelete, load:callDelete}=useFetch(comment['@id'],'DELETE', onDeleteCallback)

    //render
    return <div  className="row post-comment">
        <h5 className="col-sm-3">
            <strong>{comment.author.username} </strong> <br/>
             commenté le <br/>
            <strong> {date.toLocaleString(undefined, dateFormat)}</strong> <br/> <br/>
        </h5>
        <div className="col-sm-9">
            { state===VIEW ?
                <p>{comment.content}</p>:
                <CommentForm comment={comment} onComment={onComment} onCancel={toggleEdit}/>
            }

            {(canEdit && state!==EDIT) && <p>
                <button className="btn btn-danger" disabled={loadingDelete} onClick={callDelete.bind(this,null)}>
                    <Icon icon="trash"/> Supprimer
                </button>
                <button className="btn btn-secondary" onClick={toggleEdit}>
                    <Icon icon="pen"/> Editer
                </button>
            </p>}
        </div>
    </div>
})

function TitleComment({count}) {
    return <h3>
        <Icon icon='comments' /> { count } commentaire{count>1?'s':''}
    </h3>
}

