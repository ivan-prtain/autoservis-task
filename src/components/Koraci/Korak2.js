import React from 'react'
import Kupon from './Kupon';

const Korak2 = ({ nextStep, previousStep }) => {

    let total = 0
    let couponActivated = false
    let CouponCode = 'Tokić123'

    function calculate(e) {
        if (couponActivated) {
            let itemValue = Number(e.target.value);
            itemValue -= itemValue / 3;
            if (e.target.checked === true) {
                total += itemValue;
                document.getElementById('servicePrice').innerText = parseInt(total);
            }
            else {
                total -= itemValue;
                document.getElementById('servicePrice').innerText = parseInt(total);
            }


        }
        else {
            if (e.target.checked === true) {
                total += Number(e.target.value);
                document.getElementById('servicePrice').innerText = parseInt(total);
            }
            else {
                total -= Number(e.target.value);
                document.getElementById('servicePrice').innerText = parseInt(total);
            }

        }
    }

    const applyCoupon = (e) => {
        e.preventDefault()
        let couponNumber = document.getElementById('couponNumber').value;
        if (couponNumber == CouponCode) {
            total -= total / 3;
            couponActivated = true;
            document.getElementById('servicePrice').innerText = parseInt(total);
        }
        else {
            alert('Nepostojeći kupon!')
        }
    }


    return (
        <div>
            <div>
                Korak 2. Odaberite jednu ili više usluga za koje ste
            </div>

            <form style={{ height: '10rem' }} id='servicesForm' name='Zamjena ulja i filtera'>
                <input type="checkbox" id="uljeifilter" name="uljeifilter" value="500" onChange={calculate} />
                <label htmlFor="uljeifilter">Zamjena ulja i filtera (500kn)</label>

                <input type="checkbox" id="promjenaPakni" name="Promjena pakni" value="450" onChange={calculate} />
                <label htmlFor="promjenaPakni">Promjena pakni (450kn)</label>

                <input type="checkbox" id="promijenaGuma" name="Promijena guma" value="100" onChange={calculate} />
                <label htmlFor="promijenaGuma">Promijena guma (100kn)</label>

                <input type="checkbox" id="servisKlime" name="Servis klima uređaja" value="299" onChange={calculate} />
                <label htmlFor="servisKlime">Servis klima uređaja (299kn)</label>

                <input type="checkbox" id="balansiranjeGuma" name="Balansiranje guma" value="50" onChange={calculate} />
                <label htmlFor="balansiranjeGuma">Balansiranje guma (50kn)</label>

                <input type="checkbox" id="uljeKocnica" name="Zamjena ulja u kočnicama" value="229" onChange={calculate} />
                <label htmlFor="uljeKocnica">Zamjena ulja u kočnicama (229kn)</label>

            </form>

            <Kupon applyCoupon={applyCoupon} />

            <div>
                <span>Ukupno</span> <span id='servicePrice'>0</span> <span>Kn</span>
            </div>

            <hr />
            <div>
                <button onClick={previousStep}>Nazad</button>
                <button onClick={nextStep}>Dalje</button>

            </div>


        </div>
    )
}

export default Korak2
