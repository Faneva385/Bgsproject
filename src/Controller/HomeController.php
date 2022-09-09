<?php

namespace App\Controller;

use App\Repository\CarouselRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    private $carourelRepo;
    public function __construct(CarouselRepository $carouselRepository)
    {
        $this->carourelRepo=$carouselRepository;
    }

    /**
     * @Route("/", name="app_home")
     */
    public function index(): Response
    {
        $carousel=$this->carourelRepo->findOneBy(['name'=>'home']);
        $imgCar=$carousel->getImageurl();
        $imgDesc=$carousel->getDescription();
        return $this->render('home/index.html.twig',compact('imgCar','imgDesc'));
    }

    /**
     * @Route("/services", name="app_service")
     */
    public function services(): Response
    {
        $carousel=$this->carourelRepo->findOneBy(['name'=>'services']);
        $imgCar=$carousel->getImageurl();
        $imgDesc=$carousel->getDescription();
        return $this->render('home/services.html.twig',compact('imgCar','imgDesc'));
    }

    /**
     * @Route("/contact", name="app_contact")
     */
    public function contact(): Response
    {
        $carousel=$this->carourelRepo->findOneBy(['name'=>'contact']);
        $imgCar=$carousel->getImageurl();
        $imgDesc=$carousel->getDescription();
        return $this->render('home/contact.html.twig',compact('imgCar','imgDesc'));
    }

}
