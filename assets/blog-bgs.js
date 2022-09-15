
import {render, unmountComponentAtNode} from "react-dom";
import React from "react";
import {Comments} from "./js/blog/blog";

class BlogElement extends HTMLElement{

    constructor() {
        super();
        this.observer=null
    }

    connectedCallback(){
        const post = parseInt(this.dataset.post)
        const user = parseInt(this.dataset.user)
        if (this.observer===null){
            this.observer= new IntersectionObserver((entries,observer) => {
                entries.forEach(entry=>{
                    if(entry.isIntersecting && entry.target === this){
                        observer.disconnect()
                        render(<Comments post={post} user={user}/>, this)
                    }
                })
            })
        }
        this.observer.observe(this)
    }

    disconnectedCallback(){
        if (this.observer){
            this.observer.disconnect()
        }
        unmountComponentAtNode(this)
    }

}

customElements.define('blog-block',BlogElement)