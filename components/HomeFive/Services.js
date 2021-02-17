import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="offer-area pt-100 pb-70" id="serv">
			    <div className="container">
                    <div className="section-title">
                        <span>Servicii</span>
                        <h2>Serviciile Noastre Profesionale Pentru Dumneavoastra</h2>
                        <p>Dorim sa va oferim o platforma cu cele mai utile facilitati</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-blockchain"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Mesagerie Online</a>
                                    </Link>
                                </h3>
                                <p>Comunicarea dintre elevi, parinti, diriginti, profesori si conducerea unitatii nu a fost niciodata mai usoara.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-choice"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Rapoarte scolare</a>
                                    </Link>
                                </h3>
                                <p>Aveti posibilitatea de a transmite si de a printa rapoartele necesare foarte rapid si eficient.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-chip"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Imbunatatire constanta</a>
                                    </Link>
                                </h3>
                                <p>Dorim sa aducem platforma la asteptarile dumneavostra, asa ca o putem imbunatati impreuna.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-target"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Notificari prin SMS si Email</a>
                                    </Link>
                                </h3>
                                <p>Parintii si elevi pot primi informatii despre situatia scolara sau sedinte de la diriginti si conducerea institutii.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-choice"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Interfata usor de utilizat</a>
                                    </Link>
                                </h3>
                                <p>Platforma este construita in asa fel incat sa poata fi folosita de catre oricine, fara probleme.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-deep-learning"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Transparenta</a>
                                    </Link>
                                </h3>
                                <p>Toate modificarile si adaugarile raman inregistrate, lucru care ne permite sa vedem cine a facut operatiunea.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="offer-shape">
                    <img src="/images/shape/services-shape/1.png" alt="Image" />
                    <img src="/images/shape/services-shape/2.png" alt="Image" />
                    <img src="/images/shape/services-shape/3.png" alt="Image" />
                    <img src="/images/shape/services-shape/4.png" alt="Image" />
                    <img src="/images/shape/services-shape/5.png" alt="Image" />
                    <img src="/images/shape/services-shape/6.png" alt="Image" />
                </div>
            </section>
        );
    }
}

export default Services;