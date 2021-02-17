import React, { Component } from 'react';
import Link from 'next/link';

class WhatWeOffer extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="industries-area pb-100">
			    <div className="container">
                    <div className="section-title">
                        <br/>
                        <span>Ce va putem oferii</span>
                        <h2>Avantajele NoteScolare.ro</h2>
                        <p>Dorim sa oferim servicii de cea mai buna calitate, astfel incat sa multumim fiecare client</p>
                    </div>

                    <div className="tab industries-list-tab">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                {/* Tabs navs */}
                                <ul className="tabs">
                                    <li
                                        className="current"
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                    >
                                        <span>
                                            <i className="flaticon-machine-learning"></i>
                                            <h3>Avantaje Elevi</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab2')}
                                    >
                                        <span>
                                            <i className="flaticon-artificial-intelligence"></i>
                                            <h3>Avantaje Parinti</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab3')}
                                    >
                                        <span>
                                            <i className="flaticon-health"></i>
                                            <h3>Avantaje Profesori, Invatatori si Diriginti</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab4')}
                                    >
                                        <span>
                                            <i className="flaticon-machine-learning"></i>
                                            <h3>Avantaje Secretariat si Conducere</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="col-lg-9">
                                <div className="tab_content">
                                    {/* Tab item #1 */}
                                    <div id="tab1" className="tabs_item">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="industries-img left-img">
                                                    <img src="/images/offer1.png" alt="Image" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="industries-content">
                                                    <h3>Avantaje Elevi</h3>
                                                    <p>Ne dorim sa crestem performantele elevilor si sa imbunatatim comunicarea lor cu profesorii.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt?</p>
                                                    
                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Vizualizare Note si Absente
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Calcul medii automat
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Chat elevi-profesori
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Avertizare prin SMS
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Absente motivate ramase
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Orarul clasei
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Tab item #2 */}
                                    <div id="tab2" className="tabs_item">
                                        <div className="row  align-items-center">
                                            <div className="col-lg-6">
                                                <div className="industries-content">
                                                    <h3>Avantaje Parinti</h3>
                                                    <p>Ne dorim ca parintii sa fie mult mai informati in legatura cu situatia scolara a elevilor.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>

                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Vizualizare Note si Absente
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Situatia scolara transmisa saptamanal (SMS si Email)
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Mesagerie diriginte si conducerea scolii
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Orarul clasei
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Progresul scolar al propriilor copii
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Anunturi de la diriginte si conducerea scolii
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="industries-img right-img">
                                                    <img src="/images/offer2.png" alt="Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab item #3 */}
                                    <div id="tab3" className="tabs_item">
                                        <div className="row  align-items-center">
                                            <div className="col-lg-6">
                                                <div className="industries-img left-img">
                                                    <img src="/images/offer3.png" alt="Image" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="industries-content">
                                                    <h3>Avantaje Profesori, Invatatori si Diriginti</h3>
                                                    <p>Ne dorim sa simplificam munca cadrelor didactice si sa le imbunatatim relatiile cu elevii si familiile lor</p>

                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Generarea si transmiterea rapoartelor catre conducere unitatii, Inspectorat si Minister
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Comunicarea prin SMS sau online cu parintii elevilor
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Calcul automat al mediilor
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Transmiterea de advertismente prin SMS sau online catre parinti
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Generarea de statistici legate de numarul de absente pentru un elev sau o clasa
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Clasamentul clasei
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab item #4 */}
                                    <div id="tab4" className="tabs_item">
                                        <div className="row  align-items-center">
                                            <div className="col-lg-6">
                                                <div className="industries-content">
                                                    <h3>Avantaje Secretariat si Conducere</h3>
                                                    <p>Ne dorim sa simplificam munca secretariatului si sa oferim Conducerii Scolii posibilitatea de a gestiona situaliile scolare eficient.</p>

                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Vizualizarea tuturor cataloagelor unitatii scolare in format electronic
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Rapoarte statistice cu privirea la note si absente
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Clasamentul general al elevilor
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Posibilitatea de a realiza situatiile scolare mult mai eficient
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Comparatii intre clase
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Mesagerie prin SMS sau online catre toti parintii si profesorii unitatii
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="industries-img right-img">
                                                    <img src="/images/offer4.png" alt="Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhatWeOffer;