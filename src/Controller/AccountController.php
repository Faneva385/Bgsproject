<?php

namespace App\Controller;

use App\Entity\User;
use App\MyServices\ClientGoogle;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AccountController
 * @package App\Controller
 * @Route("/account")
 */
class AccountController extends AbstractController
{


    /**
     * @Route("/create", name="app_create_account")
     * @param UserRepository $userRepository
     * @param ClientGoogle $clientGoogle
     * @param User $user
     * @param Request $request
     * @return Response
     */
    public function index(UserRepository $userRepository,ClientGoogle $clientGoogle,User $user,Request $request): Response
    {
        $user=new User();
        $user->setEmail($clientGoogle->getUserEmail($request));
        $user->setPassword("0000");
        $userRepository->add($user,true);
        return $this->render('account/index.html.twig', [
            'controller_name' => 'AccountController',
        ]);
    }
}
