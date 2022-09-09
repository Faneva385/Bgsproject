<?php

namespace App\Controller;

use App\MyServices\ClientGoogle;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;


/**
 * Class SignUpController
 * @package App\Controller
 *  @Route("/users")
 */
class SignUpController extends AbstractController
{
    private $client;
    private $userRepository;

    public function __construct(ClientGoogle $client, UserRepository $userRepository)
    {
        $this->client=$client;
        $this->userRepository=$userRepository;
    }


    /**
     * @Route("/", name="app_sign_up")
     * @param Security $security
     * @return Response
     */
    public function signUp(Security $security)
    {
        $user=$security->getUser();
        $newUser=$this->client->getUserIdentification();
        if(!isset($user))
        {
            if (isset($newUser)){ //User failed their sign in
                $this->addFlash('warning','You have no account in Bgsmart, please create new account!!');
            }
            return $this->render('sign-up/index.html.twig');
        }else{
            return $this->redirectToRoute('app_home'); //To avoid an user to create an instance of 2 accounts
        }
    }

    /**
     * @Route("/with-google", name="sign_up_with_google")
     * @param Security $security
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function signUpGoogle( Security $security){
        $user=$security->getUser();
        if (!isset($user))
        {
            $this->client->setPrompt('select_account');
            return $this->redirect($this->client->createAuthUrl());
        }else{
            return $this->redirectToRoute('app_home');
        }

    }

    /**
     * @Route("/account-exist", name="account_exist")
     */
    public function accExist()
    {
        $this->addFlash("success", "You have an account with Bgsmart!!");
        return $this->redirectToRoute('app_home');
    }
}
