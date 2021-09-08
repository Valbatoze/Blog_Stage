<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\ArticleRepository;
use App\Form\ArticleForm;
use App\Entity\Article;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home()
    {
        $number = random_int(0, 100);

        return $this->render('home/index.html.twig', [
            'number' => $number,
        ]);
    }

    /**
     * @Route("/arrivé", name="article_arrivé")
     */
    public function admin()
    {
        return $this->render('articles/article1.html.twig');
    }

    /**
     * @Route("/reunion", name="article_reunion")
     */
    public function reunion()
    {
        return $this->render('articles/article2.html.twig');
    }

    /**
     * @Route("/equipe", name="article_equipe")
     */
    public function equipe()
    {
        return $this->render('articles/article3.html.twig');
    }

    /**
     * @Route("/team_building", name="article_team_building")
     */
    public function team_building()
    {
        return $this->render('articles/article4.html.twig');
    }

    /**
     * @Route("/mise_en_place", name="article_mise_en_place")
     */
    public function mise_en_place()
    {
        return $this->render('articles/article5.html.twig');
    }
}