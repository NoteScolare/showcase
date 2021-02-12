import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-envelope"></i>
                                <h3>Email</h3>
                                <p>contact@notescolare.ro</p>
                                <p>suport@notescolare.ro</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-phone-call"></i>
                                <h3>Telefon</h3>
                                <p>+40 767 631 786</p>
                                <p>+40 762 619 350</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-location-plus"></i>
                                <h3>Adresa</h3>
                                <p>123, Western Road, Melbourne Australia</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-support"></i>
                                <h3>Live Chat</h3>
                                <p>live chat all the time with our company 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;