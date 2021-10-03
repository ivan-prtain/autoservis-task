import React from 'react'
import ServiceDetail from './ServiceDetail'
import './Steps.css'

const Step4 = ({ carInfo, price, services, personalInfo, edit, nextStep, previousStep }) => {


    return (
        <div>

            <div>
                Korak 4. Pregled i potvrda vašeg odabira
            </div>
            <p className='review-message'>Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje
                pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita na servis.
            </p>

            <div className='sumup-section'>
                <div className='sumup-container'>
                    <div className='sumup-title'>MODEL VOZILA
                        <button className='sumup-button btn' onClick={() => edit(1)}>Uredi</button>
                    </div>
                    <span id='carModel'>{carInfo}</span>

                </div>

                <div className='sumup-container'>
                    <div className='sumup-title'>ODABRANE USLUGE
                        <button className='sumup-button btn' onClick={() => edit(2)}>Uredi</button>
                    </div>
                    <div id='services-container'>
                        {services.map((service) => (
                            <ServiceDetail key={service[0]} service={service} />
                        ))}
                    </div>
                    {price.discountedTotal &&
                        <div>
                            <span>Popust 30%:</span> <span className='service-price'>-{price.discount} Kn</span>
                        </div>}
                    <div>
                        <span>Ukupno:</span> <span id='sumup-total' className='service-price'>{price.discountedTotal ? price.discountedTotal : price.total} Kn</span>
                    </div>
                </div>
            </div>
            <hr />

            <div className='sumup-section'>

                <div className='sumup-container'>
                    <div id='sumup3' className='sumup-title'>KONTAKT PODACI
                        <button className='sumup-button btn' onClick={() => edit(3)}>Uredi</button>
                    </div>
                    <div className='sumup-data'>
                        <span>Ime i prezime:</span> <span>{personalInfo.imeiprezime}</span>
                    </div>
                    <div className='sumup-data'>
                        <span>Broj Telefona:</span> <span>{personalInfo.telbroj}</span>

                    </div>
                </div>

                <div id='sumup4' className='sumup-container'>
                    <div className='sumup-data'>
                        <span>Email:</span> <span>{personalInfo.email}</span>
                    </div>
                    <div className='sumup-data'>
                        <span>Napomena:</span> <span>{personalInfo.napomena}</span>
                    </div>
                </div>
            </div>
            <hr />
            <button className='btn' onClick={previousStep}>Nazad</button>
            <button className='btn' onClick={nextStep}>Pošalji</button>

        </div>
    )
}

export default Step4
