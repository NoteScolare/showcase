import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <React.Fragment>
                <footer className="footer-top-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <a href="/" className="logo">
                                        <img src="/images/white-logo.png" alt="Image" />
                                    </a>

                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat molestiae corporis, magni maxime perferendis ducimus totam officiis sit exercitationem sed odio debitis minus cumque dolores dicta.</p>*/}

                                    <ul className="social-icon">
                                        <li>
                                            <Link href="/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-youtube"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/*<div className="col-lg-3 col-md-6">*/}
                            {/*    <div className="single-widget">*/}
                            {/*        <h3>Services</h3>*/}
                            {/*        <ul>*/}
                            {/*            <li>*/}
                            {/*                <Link href="/service-details">*/}
                            {/*                    <a>*/}
                            {/*                        <i className="right-icon bx bx-chevrons-right"></i>*/}
                            {/*                        Big Data*/}
                            {/*                    </a>*/}
                            {/*                </Link>*/}
                            {/*            </li>*/}
                            {/*            <li>*/}
                            {/*                <Link href="/service-details">*/}
                            {/*                    <a>*/}
                            {/*                        <i className="right-icon bx bx-chevrons-right"></i>*/}
                            {/*                        UI/UX Design*/}
                            {/*                    </a>*/}
                            {/*                </Link>*/}
                            {/*            </li>*/}
                            {/*            <li>*/}
                            {/*                <Link href="/service-details">*/}
                            {/*                    <a>*/}
                            {/*                        <i className="right-icon bx bx-chevrons-right"></i>*/}
                            {/*                        Desktop Application*/}
                            {/*                    </a>*/}
                            {/*                </Link>*/}
                            {/*            </li>*/}
                            {/*            <li>*/}
                            {/*                <Link href="/service-details">*/}
                            {/*                    <a>*/}
                            {/*                        <i className="right-icon bx bx-chevrons-right"></i>*/}
                            {/*                        Mobile Application*/}
                            {/*                    </a>*/}
                            {/*                </Link>*/}
                            {/*            </li>*/}
                            {/*            <li>*/}
                            {/*                <Link href="/service-details#">*/}
                            {/*                    <a>*/}
                            {/*                        <i className="right-icon bx bx-chevrons-right"></i>*/}
                            {/*                        Product Engineering*/}
                            {/*                    </a>*/}
                            {/*                </Link>*/}
                            {/*            </li>*/}
                            {/*            <li>*/}
                            {/*                <Link href="/service-details">*/}
                            {/*                    <a>*/}
                            {/*                        <i className="right-icon bx bx-chevrons-right"></i>*/}
                            {/*                        Machine Learning*/}
                            {/*                    </a>*/}
                            {/*                </Link>*/}
                            {/*            </li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Telefon</h3>
                                    <ul className="information">
                                        <li className="address">
                                            <i className="flaticon-call"></i>
                                            <span>0767631786</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>E-mail</h3>
                                    <ul className="information">
                                        <li className="address">
                                            <i className="flaticon-envelope"></i>
                                            <span>contact@notescolare.ro</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Trimite-ne un mesaj</h3>
                                    <ul className="information">
                                            <div className="text-center">
                                                <Link href="/contact">
                                                    <a className="default-btn">contact</a>
                                                </Link>
                                            </div>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="footer-shape">
                        <img src="/images/shape/footer-shape-one.png" alt="Image" />
                        <img src="/images/shape/footer-shape-two.png" alt="Image" />
                    </div>
                </footer>
    
                {/* Footer Bottom Area   */}
                <footer className="footer-bottom-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="copy-right">
                                    <p>Copyright &copy; {currentYear} WAYMAKER VID. All Rights Reserved</p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="privacy">
                                    <ul>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Termeni & Conditii</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Politica de Confidentialitate</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="designed">
                                    <p>
                                        Designed By <i className='bx bx-heart'></i> <a href="https://envytheme.com/" target="_blank">WAYMAKER VID SRL</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;