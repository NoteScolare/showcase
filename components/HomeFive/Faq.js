import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class Faq extends Component {
    render() {
        return (
            <section className="faq-area pt-100">
                <div className="container">
                    <div className="section-title">
                        <span>FAQ,s</span>
                        <h2>Cele mai frecvente intrebari</h2>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="faq-accordion">
                                <Accordion allowZeroExpanded preExpanded={['a']}>
                                    <AccordionItem uuid="a">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                De ce este necesar un sistem de gestiune a situatiei scolare ?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="b">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Caror tipuri de institutii se adreseaza NoteScolare.ro ?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="c">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                De ce sa alegem NoteScolare.ro ?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="d">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                In cat timp se face implementarea platformei intr-o institutie ?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="e">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Cum incepem colaborarea ?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="faq-img">
                                <img src="/images/faq-img.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faq;