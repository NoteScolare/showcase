import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/about-img-three.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Despre Noi</span>
                                <h2>Am creat NoteScolare.ro cu ideea de a oferi servicii de cea mai buna calitate Elevilor, Parntilor, Profesorilor si Conducerii Scolii</h2>
                                <p>Cateva dintre motivele aparitiei aceste platforme sunt:</p>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Sa scuteasca timp
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Sa pastreze datele salvate
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Sa reduca munca secretariatului
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Sa imbunatateasca relatiile
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Sa fie usor de utilizat
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Sa informeze parintii
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Link href="/about-1">
                                    <a className="default-btn">
                                        Afla mai multe
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
