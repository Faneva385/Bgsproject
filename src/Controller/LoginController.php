<?php

namespace App\Controller;

use App\MyServices\ClientGoogle;
use App\Repository\UserRepository;
use Google_Client;
use GuzzleHttp\Exception\GuzzleException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;


class LoginController extends AbstractController
{
    private $client;
    private $userRepository;

    public function __construct(ClientGoogle $client, UserRepository $userRepository)
    {
        $this->client=$client;
        $this->userRepository=$userRepository;
    }

    /**
     * @Route("/login", name="app_login")
     * @param Request $request
     * @return Response
     */
    public function login(Request $request, UserRepository $repository): Response
    {
        $userId=$this->client->getUserIdentification();

        $user=$this->getUser();
        if(!isset($user)&&!isset($userId)){ //if there is no user connected and no redirection from google
            $this->client->setPrompt('select_account');
            $auth_url = $this->client->createAuthUrl();
            return $this->render('login/index.html.twig', [
                'redirect_link' => $auth_url
            ]);
        }else{
            if (isset($userId)) //sign up with google account
            {
                $this->client->saveUser();
                $this->addFlash('success', 'Welcome in Bgsmart !! ');
                $this->client->unsetSession();
                return $this->redirectToRoute('app_home');
            }
            return $this->redirectToRoute('app_home');
        }
    }

    /**
     * @Route("/login/errcredentials", name="login_failed")
     */
    public function errorCredentials()
    {
        $this->client->unsetSession();
        $this->addFlash('warning', 'You haven\'t account here!! Create one!!');
        return $this->redirectToRoute('app_sign_up');
    }

    /**
     * @Route("/logout", name="app_logout_g")
     */
    public function logout():Response
    {
        $this->client->unsetSession();
        return $this->redirectToRoute('app_home');
    }
}
