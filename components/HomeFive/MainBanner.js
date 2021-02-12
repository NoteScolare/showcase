import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:0,
    nav:true,
    mouseDrag: false,
    items:1,
    dots: false,
    // autoHeight: true,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
}

class MainBanner extends Component {

    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="slider-area">
                {this.state.display ? <OwlCarousel 
                    className="arduix-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="arduix-slider-item item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="arduix-slider-text overflow-hidden one">
                                        <span>Servicii digitale pentru invatamant</span>
                                        <h1>Servicii securizate, solutia perfecta pentru scolile Moderne</h1>
                                        <p>Securitatea datelor dumneavostra este unul dintre cele mai importante lucruri pentru echipa noastra</p>
                                        
                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Serviciile Noastre
                                                </a>
                                            </Link>

                                            <Link href="/contact-2">
                                                <a className="default-btn white">
                                                    Contactati-ne
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="arduix-slider-item item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="arduix-slider-text overflow-hidden two">
                                        <span>Servicii digitale pentru invatamant</span>
                                        <h1>Servicii premium pentru Gestiune si Management Scolar</h1>
                                        <p>Ne consideram cei mai buni in domeniul in care activam, lucru care ne obliga sa va oferim cele mai bune servicii.</p>

                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Serviciile Noastre
                                                </a>
                                            </Link>

                                            <Link href="/contact-2">
                                                <a className="default-btn white">
                                                    Contactati-ne
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="arduix-slider-item item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="arduix-slider-text overflow-hidden three">
                                        <span>Servicii digitale pentru invatamant</span>
                                        <h1>Accelerati lucrurile !</h1>
                                        <p>Automatizati-va institutia scolara pentru a scuti mult timp pretios!</p>

                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Serviciile Noastre
                                                </a>
                                            </Link>

                                            <Link href="/contact-2">
                                                <a className="default-btn white">
                                                    Contactati-ne
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </section>
        );
    }
}

export default MainBanner;