<?php

namespace App\Controller;

use Google_Client;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{

    private $client;

    public function __construct(Google_Client $client) {
        $this->client= $client;
        $this->client->addScope('email');
        $this->client->setRedirectUri('https://127.0.0.1:8000/login');
        $this->client->setAccessType('offline');
    }
    
    /**
     * @Route("/login", name="app_login")
     */
    public function login(Request $request): Response
    {
        $code = $request->query->get('code');
        if(isset($code)){
            $this->client->fetchAccessTokenWithAuthCode($code);
            $access_token=$this->client->getAccessToken();
            dd($access_token);
            return $this->render('login/connect.html.twig',['code'=>$access_token]);
        }
        $auth_url=$this->client->createAuthUrl();
        return $this->render('login/index.html.twig', [
            'redirect_link' => $auth_url,
        ]);
    }
}
