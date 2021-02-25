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
                                                Este foarte sumplu. Un sistem de gestiune a situatiei scolare realizat foarte bine o sa va scuteasca timp si o sa va usureze considerabil munca. Pe langa asta, le ofera parintilor posibilitatea de a fi informati constant in legatura cu situatia elevilor. Iar cel mai important lucru este cresterea rezultatealor elevilor si scaderea ratei absentelor.
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
                                                NoteScolare.ro se adreseaza tuturor tipurilor de invatamant. Invatamant primar, gimnazial, profesional, liceal si universitar.
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
                                                NoteScolare.ro a fost creat pentru a oferi cele mai bune servicii, folosind cele mai eficiente tehnologii, avand o echipa formata din oameni seriosi si muncitor, care isi fac treaba cu placere.
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
                                                Implementarea platformei NoteScolare.ro se face in maxim 2 saptamani de la semnarea contractului, in functie de capacitatea unitatii de invatamant.
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
                                                 Buna intrebare! Ne puteti contacta la numerele de telefon 0767631786, la adresa de mail contact@notescolare.ro sau accesand sectiunea Contact. Noi o sa va contactam inapoi si o ssa va oferim toate informatiile necesare in cel mai scurt timp.
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