import React from 'react';
import HeaderMarque from "../components/HeaderMarque";
import ReactPlayer from "react-player";
import PurpleButton from "../components/PurpleButton";
import Footer from "../components/Footer";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Head from "next/head";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Marques = () => {
    return (
        <div className="marque-container">
            <Head>
                <title>Vogz - Marques</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="../dist/devices.css"/>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>
            <HeaderMarque />
            <div className="part1-marque">
                <img src={'/listePortrait.png'} alt=""/>
                <div className="block-1">
                    <h1>Authenticité, <br/> Créativité, <br/>Efficacité.</h1>
                    <p className="auth-text">Avec <span className="vogz grasBlue">VOGZ</span> profitez d'une sélection de <span className="vogz grasBlue">Vogzter</span> capable de réaliser pour vous, <span className="highlight">une vidéo UGC sur mesure</span> d'après un <span className="highlight">brief</span> de votre choix</p>
                    <button className="brief-button-container gros-brief">
                        <p>Déposer un brief</p>
                    </button>
                </div>

                <div className="none nonePhoto imgVideo">
                    <ReactPlayer
                        url={'/video.mp4'}
                        className="video-presentation-inner"
                        playing={false}
                        height="100%"
                        width="100%"
                        muted
                        playIcon={<img src={'/playIcon.png'} alt=""/>}
                        light={<div style={{height: '100%', width: '100%'}}>
                            <img src={'/photoVideo.jpg'} alt="" style={{height: '100%', width: '100%'}}/>
                        </div>}
                        controls={true}
                        loop
                    />
                </div>


                <div className="iphone-container video-container-2">
                    <div className="device device-iphone-x ">
                        <div className="device-wrapper">
                            <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                <div className="screen">
                                    <video src={'/video.mp4'} autoPlay muted loop controls />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="part2-marque">
                <h2 className="inner-title">Vous avez <span className="highlight-light-blue">rapidemment</span> besoin de <span className="highlight-light-blue">contenu vidéo unique</span> pour votre marque ? <br/>
                Vous aimeriez <span className="highlight-light-blue">promouvoir</span> vos produits et services par une <span className="highlight-light-blue">communauté d'utilisateurs</span> ?
                    Les sociétés de production vidéo sont <span className="highlight-light-blue">trop chères</span> ?
                </h2>

                <div className="flex-between combinaison-container">
                    <img src={'/combinaison3.png'} alt="" className='combinaison-img'/>
                    <div className="text-vogz">
                        <h2 className="marque-title">VOGZ</h2>
                        <p className="grey">Une solution innovante qui vous permet de développer des contenus sur <span className="highlight">mesure, authentiques, efficaces</span> et <span className="highlight">créatifs,</span> à moindre coûts.</p>
                        <p className="grey">A travers une application mobile, le <span className="vogz grasBlue">Vogzter</span> peut être <span className="highlight">cadré,</span> orienté ou totalement <span className="highlight">libre</span> de vous proposer un contenu qui <span className="highlight">lui ressemble</span> parmis nos <span className="highlight">5 types de</span> <span className="vogz grasBlue">VOGZ</span>. </p>
                        <p className="grey">La marque à quant à elle, accès à <span className="highlight">sa propre plateforme web</span> pour faire son choix et échanger avec les <span className="vogz grasBlue">Vogzters</span> si besoin.</p>
                        <PurpleButton id="combinaison-button"/>
                    </div>
                </div>
            </section>

            <section className="part3-marque">
                <div className="flex-between createur-supercontainer combinaison-container">
                    <div className="createur-container">
                        <h2 className="marque-title">Créateur, <br/> mais surtout <span className="vogz-light-blue">Vogzter</span></h2>
                        <div className="createur-text">
                            <p className="grey"><span className="vogz grasBlue">VOGZ</span> c’est avant tout une <span className="highlight">communauté :</span> celle des <span className="vogz grasBlue">Vogzters</span>. Des profils de tout horizons, au talent variés qui sauront parfaitement <span className="highlight">répondre à vos attentes.</span></p>
                            <p className="grey">Dès que vous <span className="highlight">poster un brief </span>sur l’app, les <span className="vogz grasBlue">Vogzters</span> reçoivent une <span className="highlight">notification</span> et le concours est lancé. Vous recevez autant <span className="highlight">de propositions que de participation</span> et vous n’avez qu’à choisir les <span className="vogz grasBlue">VOGZ</span> qui vous intéressent !</p>
                            <p className="grey">Ils sont libres de postuler aux briefs qu’ils souhaitent et s’engagent à <span className="highlight">envoyer au moins une</span> <span className="vogz grasBlue">VOGZ</span> sur chaque brief auquel ils participent. </p>
                        </div>
                    </div>

                    <div className="img-rond-container">
                        <img src={'/rondPhotoMontage.png'} alt=""/>
                    </div>
                </div>
            </section>

            <section className="part4-marque">
                <h2 className='vogz-type'>5 types de VOGZ</h2>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="flex-around slider-inner">
                             <div className="slider-text">
                                 <h2 className="slider-inner-title">Test Produit</h2>
                                 <p className="slider-inner-text">Plus la peine d’envoyer des dizaines de produit pour trouver LA bonne personne, lancez un casting et <span className="pinkHighlight">envoyez uniquement le produit</span> au <span className="fatText">Vogzter</span> de votre choix !</p>
                             </div>
                            <div className="slider-img-container">
                                <div className="device device-iphone-x ">
                                    <div className="device-wrapper">
                                        <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                            <div className="screen">
                                                <video src={'/video.mp4'} autoPlay muted loop controls />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-inner flex-around">
                            <div className="slider-text">
                                <h2 className="slider-inner-title">Témoignage</h2>
                                <p className="slider-inner-text">Laissez les <span className="fatText">Vogzters</span> <span className="pinkHighlight">partager leur expérience</span> avec votre <span className="pinkHighlight">produit ou votre service !</span></p>
                                <p className="slider-inner-text">Un moyen efficace pour améliorer <span className="pinkHighlight">votre crédibilité !</span></p>
                            </div>

                            <div className="slider-img-container">
                                <div className="device device-iphone-x ">
                                    <div className="device-wrapper">
                                        <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                            <div className="screen">
                                                <video src={'/video.mp4'} autoPlay muted loop controls />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-inner flex-around">
                            <div className="slider-text">
                                <h2 className="slider-inner-title">Acting</h2>
                                <p className="slider-inner-text">Laissez parler les talents d’acteurs des <span className="fatText">Vogzters</span> : <span className="pinkHighlight">proposez leur un script</span> qu’il réciteront en jouant la comédie ! </p>
                                <p className="slider-inner-text">Un moyen très efficace pour gérer au mieux <span className="pinkHighlight">votre communication !</span></p>
                            </div>
                            <div className="slider-img-container">
                                <div className="device device-iphone-x ">
                                    <div className="device-wrapper">
                                        <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                            <div className="screen">
                                                <video src={'/video.mp4'} autoPlay muted loop controls />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-inner flex-around">
                            <div className="slider-text">
                                <h2 className="slider-inner-title">Créativité</h2>
                                <p className="slider-inner-text">Place à l’imagination ! Les <span className="fatText">Vogzters</span> <span className="pinkHighlight">les plus créatifs</span> se chargerons de vous proposer les <span className="fatText">VOGZ</span> <span className="pinkHighlight">les plus originales.</span></p>
                                <p className="slider-inner-text">Vous serez surpris par leur créativité ! </p>
                            </div>
                            <div className="slider-img-container">
                                <div className="device device-iphone-x ">
                                    <div className="device-wrapper">
                                        <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                            <div className="screen">
                                                <video src={'/video.mp4'} autoPlay muted loop controls />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-inner flex-around">
                            <div className="slider-text">
                                <h2 className="slider-inner-title">Chorégraphie/ <br/> Chant</h2>
                                <p className="slider-inner-text">Faites <span className="pinkHighlight">vivre votre marque</span> à travers une <span className="pinkHighlight">chorégraphie</span> ou <span className="pinkHighlight">une chanson</span></p>
                            </div>
                            <div className="slider-img-container">
                                <div className="device device-iphone-x ">
                                    <div className="device-wrapper">
                                        <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                            <div className="screen">
                                                <video src={'/video.mp4'} autoPlay muted loop controls />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </section>

            <section className="part5-marque">
                <div className="flex-around row-card">
                    <div className="card-container">
                        <div className="card-img-container">
                            <img src={'/time.png'} alt="" className="card-img"/>
                        </div>
                        <h5>Gagner du temps</h5>
                        <p className="grey"><span className="highlight">8 jours</span> 8 jours c’est le temps moyen pour obtenir vos <span className="vogz grasBlue">VOGZ</span> prêtes à être partagées ! </p>
                    </div>

                    <div className="card-container">
                        <div className="card-img-container">
                            <img src={'/group.png'} alt="" className="card-img"/>
                        </div>
                        <h5>Un contenu de qualité</h5>
                        <p className="grey">Tous nos <span className="vogz grasBlue">Vogzters</span> sont <span className="highlight">sélectionnés</span> et respectent notre <span className="highlight">charte qualité</span></p>
                    </div>

                    <div className="card-container">
                        <div className="card-img-container">
                            <img src={'/author.png'} alt="" className="card-img"/>
                        </div>
                        <h5>Les droits d'auteurs</h5>
                        <p className="grey">Vous êtes totalement <span className="highlight">propriétaire</span> du contenu </p>
                    </div>
                </div>

                <div className="flex-around row-card">
                    <div className="card-container">
                        <div className="card-img-container">
                            <img src={'/light.png'} alt="" className="card-img"/>
                        </div>
                        <h5>Des propositions riches</h5>
                        <p className="grey">Obtenez un <span className="highlight">grand nombre de propositions</span> pour faire votre choix</p>
                    </div>

                    <div className="card-container">
                        <div className="card-img-container">
                            <img src={'/handshake.png'} alt="" className="card-img"/>
                        </div>
                        <h5>Un encadrement</h5>
                        <p className="grey">Un process <span className="highlight">cadré</span> et centralisé sur <span className="highlight">une plateforme</span> en ligne</p>
                    </div>

                    <div className="card-container">
                        <div className="card-img-container">
                            <img src={'/euro.png'} alt="" className="card-img"/>
                        </div>
                        <h5>Des économies</h5>
                        <p className="grey"><span className="highlight">10x moins chère</span> qu’un studio créa</p>
                    </div>
                </div>
            </section>

            <section className="part6-marque">
                <h2 className="marque-title"><span className="vogz-light-blue">Un process : </span><br/> simple, rapide et efficace</h2>
                <p className="grey">Si vous êtes encore là, <span className="highlight">découvrez...</span></p>
                <div className="button-marque-container">
                    <PurpleButton id="part6-button"/>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Marques;