import React from 'react'

const Korak4 = ({ visibility }) => {

    /* function loadInfo() {
        let selectedCar = document.getElementById('Peugeot');
        document.getElementById('carModel').innerText = selectedCar;
    } */

    /* loadInfo(); */

    return (
        <div style={{ display: visibility }}>

            <div>
                Korak 4. Pregled i potvrda vašeg odabira
            </div>
            <p>Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje
                pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita na servis.
            </p>

            <div style={{ display: 'flex' }}>
                <div>
                    <h2>Model vozila</h2>
                    <span id='carModel'></span>
                    <button>Uredi</button>
                </div>

                <div>
                    <h2>Odabrane usluge</h2>
                    <span id='finalServicesChoice'></span>
                    <button>Uredi</button>

                </div>
            </div>

            <div style={{ display: 'flex' }}>
                <div>
                    <h2>Kontakt podaci</h2>
                    <span id='finalPersonalInfo'></span>
                    <button>Uredi</button>
                </div>


            </div>


        </div>
    )
}

export default Korak4
