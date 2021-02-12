import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>De ce sa ne alegeti</span>
                        <h2>Utilizant Platforma NoteScolare.ro veti avea parte de servicii inovative si perfect functionale</h2>
                        <p>Cateva dintre lucrurile punctele FORTE ale Platformei sunt:</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>01 <i className="flaticon-technical-support"></i></span>
                                        <h3>Securitate Avansata</h3>
                                        <p>Datele dumneavostra sunt in siguranta, investim in continuu in securitatea platformei</p>
                                    </li>
                                    <li className="ml">
                                        <span>02 <i className="flaticon-shield"></i></span>
                                        <h3>Suport Tehnic</h3>
                                        <p>Suport Tehnic 24/7, suntem deschisi la propunerile pentru a adauga noi functii platformei</p>
                                    </li>
                                    <li className="ml-25">
                                        <span>03 <i className="flaticon-support"></i></span>
                                        <h3>Suport instant</h3>
                                        <p>Suport instant referitor la modul de utilizare al platformei si oferirea de solutii</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>04 <i className="flaticon-technical-support"></i></span>
                                        <h3>Free Try </h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>

                                    <li className="ml">
                                        <span>05 <i className="flaticon-shield"></i></span>
                                        <h3>Tehnologie Avansata</h3>
                                        <p>Platforma construita folosind cele mai avansate tehnologii de Web Development</p>
                                    </li>

                                    <li className="ml-25">
                                        <span>06 <i className="flaticon-support"></i></span>
                                        <h3>Pret Competitiv</h3>
                                        <p>Cel mai bun pret avand in vedere eficienta Platformei si modul in care aceasta lucreaza</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyChooseUs;
