<?php

namespace App\Controller\Api;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class UserAddController extends AbstractController
{
    public function __invoke(User $data)
    {
        $data->setRoles(['ROLE_USER']);
        return $data;
    }
}