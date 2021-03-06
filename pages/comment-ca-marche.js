import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import HeaderMarque from "../components/HeaderMarque";
import Footer from "../components/Footer";
import HeaderCommentCaMarche from "../components/HeaderCommentCaMarche";
import HeaderCommentCaMarcheMobile from "../components/HeaderCommentCaMarcheMobile";
import FooterMobile from "../components/FooterMobile";

const CommentCaMarche = () => {



    const [backgroundColor, setBackgroundColor] = useState('#51D3F4')
    const TypeWriter = function (txtElement, words, wait = 4000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10)
        this.type();
        this.isDeleting = false;
    }

    // Type Method
    TypeWriter.prototype.type = function () {
        // Current index of word
        const current = this.wordIndex % this.words.length
        // Get full text of current word
        const fullTxt = this.words[current]
        console.log('full', fullTxt)
       /* if (fullTxt === 'Eveniet, facilis Eveniet, facilis Eveniet, facilis') {
            setBackgroundColor('#FB87FB')
        }
        if (fullTxt === 'Atque consequatur dolores eligendi explicabo libero magnam nostrum placeat quaerat quo sequi') {
            setBackgroundColor('#FCD81A')
        }

        */
        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

        //Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2
        }

        // If word is complete

        if (!this.isDeleting && this.txt === fullTxt) {
            //Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to the next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 300
        }

        setTimeout(() => this.type(), typeSpeed)
    }

    //Init on DOM Load
    useEffect(() => {
        init()
    })

    function init() {
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');

        new TypeWriter(txtElement, words, wait)
    }

    return (
        <div>
        <div className="computer-view">
            <HeaderCommentCaMarche />
            <section className='flex comment-1'>
                <div className="no-pub">
                    <div className="text-comment">
                        <h2 className="pub-title">
                            Ne faites pas une pub : <br/>
                            <span className="vogz-light-blue">Faites une VOGZ</span>
                        </h2>
                        <p className="grey text-comment-para">Avec <span className="vogz grasBlue">VOGZ</span> toutes vos demandes de contenus sont <span className="highlight">cadr??es, centralis??es, n??goci??es</span> et disponibles sur <span className="highlight">une seule plateforme</span> en ligne.
                        </p>
                        <button className="brief-button-container gros-brief">
                            <p>D??poser un brief</p>
                        </button>
                    </div>
                </div>

                <div className="light-blue-container" style={{backgroundColor: backgroundColor}}>
                    <div className="lorem-container">
                        <h2
                            className="txt-type"
                            data-wait="5000"
                            data-words='["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Eveniet, facilis Eveniet, facilis Eveniet, facilis", "Atque consequatur dolores eligendi explicabo libero magnam nostrum placeat quaerat quo sequi"]'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h2>
                    </div>
                    <div className="logo-marche-container">
                        <img src={'/logo-marche.png'} alt=""/>
                    </div>
                </div>
            </section>

            <section className="comment-2">
                <div className="inner-title-comment-container">
                    <h2 className="inner-title title-comment">
                        VOGZ c???est la garantie d???obtenir du <span className="highlight-light-blue">contenu cl??s en main,</span> de mani??re <span className="highlight-light-blue">simple et rapide.</span> Comment ??a marche ? D??couvrez notre process en <span className="highlight-light-blue">4 ??tapes !</span>
                    </h2>
                </div>

                <div className="process-container">
                    <div className="flex-between process-inner-container">
                        <div className="inner-process flex-column">
                            <img src={'/Un.png'} alt="" className="number-img"/>
                            <div className="brief-text-container">
                                <h2 className="brief-text">Faites votre brief, </h2>
                                <p className="grey">en r??pondant ?? un <span className="highlight">formulaire</span></p>
                            </div>
                        </div>
                        <div className="img-process-container">
                            <img src={'/mockup_1.png'} alt="" className='mockup_1'/>
                        </div>
                    </div>

                    <div className="flex-row-reverse flex-between process-inner-container">
                        <div className="inner-process-right flex-column brief2">
                            <img src={'/Deux.png'} alt="" className="number-img-right"/>
                            <div className="brief-text-container-right">
                                <h2 className="brief-text">Vous recevez des propositions de contenu</h2>
                                <p className="grey">dans votre interface pendant <span className="highlight">10 jours</span></p>
                            </div>
                        </div>
                        <div className="img-process-container-right">
                            <img src={'/mockup_2.png'} alt="" className='mockup_2'/>
                        </div>
                    </div>

                    <div className="flex-between process-inner-container">
                        <div className="inner-process flex-column inner3">
                            <img src={'/Trois.png'} alt="" className="number-img"/>
                            <div className="brief-text-container">
                                <h2 className="brief-text">Vous avez 3 jours pour faire votre choix</h2>
                                <p className="grey">une fois ces 10 jours pass??s</p>
                            </div>
                        </div>
                        <div className="img-process-container3">
                            <img src={'/mockup_3.png'} alt="" className='mockup_3'/>
                        </div>
                    </div>

                    <div className="flex-row-reverse flex-between process-inner-container">
                        <div className="inner-process-right flex-column brief4">
                            <img src={'/Quatre.png'} alt="" className="number-img-right"/>
                            <div className="brief-text-container-right">
                                <h2 className="brief-text">Vous recevrez les contenus</h2>
                                <p className="grey">avec les <span className="highlight">droits d'auteur</span></p>
                            </div>
                        </div>
                        <div className="img-process-container-left">
                            <img src={'/fusion_iphone2.png'} alt="" className='fusionIphone'/>
                        </div>
                    </div>

                </div>
            </section>

            <section className="comment3">
                <div className="flex-between">
                    <div className="satisfait-rembourse">
                        <img src={'/cross.png'} alt="" className="cross-img"/>
                        <div className="satisfait-img-container">
                            <img src={'/vogzLogo.png'} alt=""/>
                        </div>
                            <h5 className="satisfait-text">Satisfait ou rembours??</h5>
                        <div className="garantie-text-container">
                            <p className="garantie-text">Le client a activ?? sa garantie ???satisfait ou rembours?????, ce qui lui offre le droit de se r??tracter s???il n???est pas satisfait.</p>
                        </div>
                    </div>

                    <div className="satisfait-rembourse-text-container">
                            <h2 className="apartir">Votre VOGZ, <br/> ?? partir de <span>390???</span></h2>
                            <p>?? l???inverse des soci??t??s sp??cialis??es dans la production de vid??o, <span className="vogz fatText">VOGZ</span> offre une solution <span className="pinkHighlight">?? prix abordable.</span></p>
                            <p>B??n??ficiez de contenu cr??atif et impactant pour votre marque d??s <span className="pinkHighlight">390???,</span> en ??tant totalement <span className="pinkHighlight">propri??taire des droits d???auteur !</span></p>
                            <h5 className="yellowTitle">Satisfait ou rembours??</h5>
                            <p><span className="vogz fatText">VOGZ</span> propose ??galement une option <span className="pinkHighlight">???garanti satisfait ou rembours?????.</span> L???activ?? vous permet d?????tre int??gralement rembours?? si aucune proposition ne vous convient.</p>
                            <button className="brief-button-satisfait">
                                D??poser un brief
                            </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>

            <div className="phone-view">
                <HeaderCommentCaMarcheMobile />
                <section className="comment-ca-marche-mobile-container1">
                    <div className="vogzLogo3-container">
                        <img src={'/vogzLogo3.png'} alt=""/>
                    </div>

                    <div className="lorem-phone-container">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h5>
                    </div>

                </section>

                <section className="comment-phone-container2">
                    <div className="phone-card">
                        <div className="phone-card-text-container">
                            <h3>Ne faites pas une pub : <span className="vogz-light-blue">faites une VOGZ</span></h3>
                        </div>
                        <div className="phone-card-para-container">
                            <p>Avec VOGZ toutes vos demandes de contenus sont <span className="highlight">cadr??es, centralis??es, n??goci??es</span> et disponibles sur <span className="highlight">une seule plateforme</span> en ligne.</p>
                        </div>
                        <div className="brief-button-phone-container mt-5">
                            <button className="brief-phone-button">
                                D??poser un brief
                            </button>
                        </div>

                    </div>

                    <div className="comment-ca-marche-phone-title-container">
                        <h5 className="comment-ca-marche-phone-title">Comment ??a marche ? D??couvrez notre process <span className="highlight-light-blue">en 4 ??tapes !</span></h5>
                    </div>

                    <div className="inner-process1 flex-column">
                        <div className="img-number-container">
                            <img src={'/Un.png'} alt="" />
                        </div>
                        <div className="brief-text-container">
                            <h2 className="brief-text">Faites votre brief, </h2>
                            <p className="grey">en r??pondant ?? un <span className="highlight">formulaire</span></p>
                        </div>
                    </div>

                    <div className="img-phone-container">
                        <img src={'/ordiPhone1.png'} alt=""/>
                    </div>

                    <div className="arrowButtonPhone">
                        <img src={'/arroowPhoneBottom.png'} alt=""/>
                    </div>


                    <div className="inner-process flex-column brief2">
                        <div className="img-number-container">
                            <img src={'/Deux.png'} alt=""/>
                        </div>
                        <div className="brief-text-container-big">
                            <h2 className="brief-text">Vous recevez des propositions de contenu</h2>
                            <p className="grey">dans votre interface pendant <span className="highlight">10 jours</span></p>
                        </div>
                    </div>


                    <div className="img-phone-container">
                        <img src={'/ordiPhone2.png'} alt=""/>
                    </div>

                    <div className="arrowButtonPhone">
                        <img src={'/arroowPhoneBottom.png'} alt=""/>
                    </div>

                    <div className="inner-process flex-column">
                        <div className="img-number-container">
                            <img src={'/Trois.png'} alt="" />
                        </div>
                        <div className="brief-text-container-big">
                            <h2 className="brief-text">Vous avez 3 jours pour faire votre choix</h2>
                            <p className="grey">une fois ces 10 jours pass??s</p>
                        </div>
                    </div>

                    <div className="img-3-container">
                        <img src={'/photoMontagePhone.png'} alt=""/>
                    </div>

                    <div className="arrowButtonPhone">
                        <img src={'/arroowPhoneBottom.png'} alt=""/>
                    </div>

                    <div className="inner-process flex-column brief2">
                        <div className="img-number-container">
                            <img src={'/Quatre.png'} alt=""/>
                        </div>
                        <div className="">
                            <h2 className="brief-text">Vous recevrez les contenus</h2>
                            <p className="grey">avec les <span className="highlight">droits d'auteur</span></p>
                        </div>
                    </div>


                    <div className="img-phone-container">
                        <img src={'/phoneMobile3.png'} alt=""/>
                    </div>


                </section>

                <section className="comment-ca-marche-phone4">
                        <div className="satisfait-rembourse-text-container">
                            <h2 className="apartir">Votre VOGZ, <br/> ?? partir de <span>390???</span></h2>
                            <p>B??n??ficiez de contenu cr??atif et impactant pour votre marque d??s <span className="pinkHighlight">390???,</span> en ??tant totalement <span className="pinkHighlight">propri??taire des droits d???auteur !</span></p>
                            <h5 className="yellowTitle">Satisfait ou rembours??</h5>
                            <p><span className="vogz fatText">VOGZ</span> propose ??galement une option <span className="pinkHighlight">???garanti satisfait ou rembours?????.</span> L???activ?? vous permet d?????tre int??gralement rembours?? si aucune proposition ne vous convient.</p>
                        </div>

                        <div className="satisfait-rembourse">
                            <img src={'/cross.png'} alt="" className="cross-img"/>
                            <div className="satisfait-img-container">
                                <img src={'/vogzLogo.png'} alt=""/>
                            </div>
                            <h5 className="satisfait-text">Satisfait ou rembours??</h5>
                            <div className="garantie-text-container">
                                <p className="garantie-text">Le client a activ?? sa garantie ???satisfait ou rembours?????, ce qui lui offre le droit de se r??tracter s???il n???est pas satisfait.</p>
                            </div>
                        </div>
                </section>
                <FooterMobile />
            </div>
        </div>
    );
};

export default CommentCaMarche;