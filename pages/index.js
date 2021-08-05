import React, {useState, useRef} from 'react';
import Head from 'next/head'
import ReactPlayer from 'react-player'
import {Formik} from 'formik';
import Footer from "../components/Footer";
import {Link} from 'react-scroll';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import * as Yup from 'yup';
import FooterMobile from "../components/FooterMobile";

export default function Home() {

  const initialValues = {
    nom: '',
    prenom: '',
    email: '',
    phone: ''
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Veuillez rentrer une adresse mail valide').required('Veuillez rentrer une adresse mail'),
    phone: Yup.string().matches(/^0[1-7]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$/, "Entrez un numéro valide")
  });

  const [envoyer, setEnvoyer] = useState(false);

  const reRef = useRef();

  const [videoReady, setVideoReady] = useState(false)
  console.log(videoReady)
  return (
    <div>
      <Head>
        <title>Vogz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="../html5-device-mockups/dist/device-mockups.min.css"/>
        <link rel="stylesheet" href="../dist/devices.css"/>
      </Head>

      <div className="firstPart part">

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

        <img src={'/firstColumn.png'} alt="" className='firstImage'/>
        <img src={'/secondColumn.png'} alt="" className='secondImage'/>
        <img src={'/thirdColumn.png'} alt="" className='firstImage'/>
        <img src={'/fourColumn.png'} alt="" className='firstImage'/>


        <div className="iphone-container video-container-1">
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


        <Link activeClass="active" to="secondPart" spy={true} smooth={true}><img src={'/arrowBottom.png'} alt="" className='arrowBottomImage'/></Link>
      </div>

      <div className="secondPart part" id="secondPart">
        <div className="text">
          <h3>Tu es créateur de contenu et tu sais le rendre <span>captivant</span> et <span>original ?</span></h3>
          <h5>Devient <span className="grasBlue">Vogzter</span> et fais partie de nos <span className="grasBlue">30 BETA TESTEUR, </span><span className="highlight">l'objectif :</span> créer les <span className="grasBlue vogz">VOGZ<span style={{color: '#76DEFE'}}>*</span></span> les plus <span className='highlight'>engageantes</span> pour toutes les marques de notre <span className='highlight'>communauté !</span></h5>
        </div>

        <img src={'/filConducteur.png'} alt="" className='filConducteur none nonePhoto'/>

        <div className="imgSelfie">
          <img src={'/manSelfie.png'} alt=""/>
        </div>
        <img src={'/fuseeRouge.png'} alt="" className="fuseeRouge"/>
      </div>

      <div className="thirdPart part flex-around">
          <img src={'/selfieMom.png'} alt="" className="selfieMom"/>
        <div className="text">
          <h3>*Une <span>VOGZ</span> ?</h3>
          <h5>Une <span className="grasBlue vogz">VOGZ</span> est <span className="highlight">une vidéo</span> réalisée par un <span className="grasBlue vogz">Vogzter</span>. Elle répond au <span className="highlight">brief d'un client</span>, et se veut créative, authentique, mais surtout, elle doit être à <span className="highlight">l'image de son créateur :</span> <br/><span className="bigText grasBlue">GRANDIOSE</span></h5>
          <div className="buttonContainer sinscrire">

           <Link activeClass="active" to="inscription" spy={true} smooth={true}> <img src={'/inscription3.png'} alt="" className="imgInscription"/></Link>
            {/* <div className="inscriptionButton">
              <h5 className='inscriptionText'>S'INSCRIRE</h5>
            </div>

            <div className="arrowRed">
              <img src={'/redArrow.png'} alt=""/>
              <p>Original</p>
            </div>
            */}
          </div>
        </div>
      </div>
      <div className="fourPart">
        <div className="crown">
          <img src={'/crown.png'} alt="" className='crownImg'/>
        </div>
        <img src={'/yellowFusee.png'} alt="" className="yellowFusee"/>
        <h3>AU ROYAUME DU <br/>CONTENU, LES VOGZTERS <br/>SONT <span className="rois">ROIS</span> !</h3>

        <div className="descriptionContainer">
          <h5><span className="fatText">VOGZ</span> est une nouvelle plateforme innovante pensée pour les <span className='pinkHighlight'>créateurs de contenus</span> et à destination des <span className='pinkHighlight'>marques</span> voulant communiquer de la façon la plus authentique possible auprès de leur <span className='pinkHighlight'>communauté</span> </h5>
        </div>

        <h2>R<span>épondez à vos premiers briefs...</span></h2>

        <img src={'/photoMontage.png'} alt="" className='none nonePhoto'/>
        <div className="premiers">
          <img src={'/fusion.png'} alt="" className="premiersImg"/>
        </div>

        <h2 className='revenuesText'>E<span>t générez vos premiers revenus
          grâce à vos productions ! </span></h2>



          <div className="inscriptionButton">
              <Link activeClass="active" to="inscription" spy={true} smooth={true}>
            <h5 className='inscriptionText'>S'INSCRIRE</h5>
              </Link>
          </div>



      </div>

      <div className="fivePart">
        {/*
        <div className="photoMontage">
          <img src={'/photoMontage.png'} alt="" className='photoMontageImg'/>
        </div>
        <img src={'/arrowYellow.png'} alt="" className='firstArrow'/>
        <img src={'/VerteFusee.png'} alt="" className='secondArrow'/>
        */}
        <img src={'/photomontage2.png'} alt="" className="photomontage2"/>

        <img src={'/filConducteur2.png'} alt="" className="filConducteur2 none nonePhoto" />
        <img src={'/filConducteur2.png'} alt="" className="filConducteur3 none nonePhoto" />

        <img src={'/photoMontageMobile.png'} alt="" className='noneImg'/>
        <div className="textPhotoMontage">
          <h3>Devenir <span>VOGZTER</span>...</h3>
          <h5>C’est entrer dans une <span>communauté créative</span> aux contenus <span>rigoureux</span> et <span>efficaces.</span></h5>
        </div>
        </div>


      <div className='flex-between footer' id='inscription'>
            <div className="bientot">
              <img src={'/play.png'} alt="" className="play"/>
              <h2>Disponible sur</h2>
              <div className="flex googleContainer">
                <img src={'/googlePlay.png'} alt="" className="googlePlay"/>
                <h5 className="esper">&</h5>
                <img src={'/appStore.png'} alt="" className="applePay"/>
              </div>
            </div>
            <div className="avis">
              <img src={'/hat.png'} alt="" className='hat'/>
              <h3>Avis aux <span>pionniers</span> !</h3>
                <div className="h5-container">
                        <h5 className="h5-text">Nous sommes à la recherche de nos <span className='highlight-light-blue'>30 premiers vogzters.</span> C'est le moment pour toi de te lancer, rejoins dès <span className='highlight-light-blue'>maintenant</span> l'aventure <span className="fatText vogz">VOGZ</span> !</h5>
                </div>
              <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                  const token = await reRef.current.executeAsync();
                  reRef.current.reset();
                  setEnvoyer(true)
                  try {
                    await axios.post('/api/send-email', {
                      values,
                      token
                    })
                  } catch(err) {
                    console.log(err)
                  }
                  console.log(values)
                }}
              >
                {props => (
                   <div className="form-container">


                  <form action="">
                    <div className="inputContainer">
                      <input
                        type="text"
                        placeholder='Prénom'
                        value={props.values.prenom}
                        onChange={props.handleChange('prenom')}
                      />
                      <input
                        type="text"
                        placeholder="Nom"
                        value={props.values.nom}
                        onChange={props.handleChange('nom')}
                      />
                      <input
                        type="email"
                        placeholder="Adresse Mail"
                        value={props.values.email}
                        onChange={props.handleChange('email')}
                      />
                      {props.errors.email && props.touched.email ? <div className="errors">{props.errors.email}</div> : null}
                      <input
                        type="text"
                        placeholder="Téléphone"
                        value={props.values.phone}
                        onChange={props.handleChange('phone')}
                      />
                      {props.errors.phone && props.touched.phone ? <div className="errors">{props.errors.phone}</div> : null}

                    </div>
                    <ReCAPTCHA
                      sitekey={'6Lc2crUbAAAAAFdX2G8zDe_U3x7oOPUDH6l1-hP8'}
                      size="invisible"
                      ref={reRef}
                    />
                    <div className="inscriptionButton" onClick={props.handleSubmit}>
                      <h5 className='inscriptionText'>ENVOYER</h5>
                    </div>
                    <p className={envoyer ? 'textEnvoye' : 'nonEnvoye'}>Merci pour votre participation, un membre de l'équipe vous contacte dès que possible</p>
                  </form>
                   </div>
                )}

              </Formik>
            </div>
      </div>

    <Footer />
    <FooterMobile />
    </div>
  )
}
