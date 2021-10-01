import React from 'react'
import Kupon from './Kupon';
import { useState } from 'react';
import ActivatedCoupon from './ActivatedCoupon';
import './Koraci.css'

const Korak2 = ({ nextStep, sendState, sendState2, previousStep, visibility }) => {

    const [couponApplied, setCouponApplied] = useState(false);
    const [data, setData] = useState({
        total: 0,
        discountedTotal: 0,
        discount: 0
    })
    const [services, setServices] = useState([])

    const [CouponCode] = useState('Tokić123')

    let total = 0;
    let discountedTotal = 0;
    let discount = 0;

    function calculate(e) {
        total = data.total;
        let service = e.target.name;
        let serviceCost = e.target.value;
        let serviceDetails = [service, serviceCost]

        setServices([...services, serviceDetails])
        console.log('stize servis')
        console.log(services);
        if (couponApplied) {
            /* console.log('checked - kupon aktiviran - uslo u kalkulaciju')
            console.log(total);
            console.log(discountedTotal); */

            discountedTotal = data.discountedTotal;
            discount = data.discount;

            /*  console.log('checked - kupon aktiviran - discounted total bi sad trebao biti postavljen')
             console.log(total);
             console.log(discountedTotal); */

            let itemValue = Number(e.target.value);
            let discountedItemValue = 0
            discountedItemValue = itemValue - (itemValue * 0.3);
            if (e.target.checked === true) {

                total += itemValue;
                discountedTotal += discountedItemValue;
                discount += itemValue * 0.3;
                document.getElementById('servicePrice').innerText = parseInt(discountedTotal);
                document.getElementById('osnovica').innerText = parseInt(total);
                document.getElementById('popust').innerText = parseInt(discount);

                setData({
                    total: total,
                    discountedTotal: discountedTotal,
                    discount: discount
                })

                /*  console.log('checked - kupon aktiviran - nakon kaluklacije')
                 console.log(total);
                 console.log(discountedTotal); */
            }
            else {
                total -= itemValue;
                discountedTotal -= discountedItemValue;
                discount -= itemValue * 0.3;
                document.getElementById('servicePrice').innerText = parseInt(discountedTotal);
                document.getElementById('osnovica').innerText = parseInt(total);
                document.getElementById('popust').innerText = parseInt(discount);

                setData({
                    total: total,
                    discountedTotal: discountedTotal,
                    discount: discount
                })

                let updatedServices = services.filter(iteratedService => iteratedService[0] !== service)
                setServices(updatedServices);
                /*   console.log('unchecked - kupon aktiviran - nakon kaluklacije')
                  console.log(total);
                  console.log(discountedTotal); */

                /*  servicesCopy = services;
 
                 setServices(services.filter((iteratedService) => iteratedService[0] !== service))
                 console.log('stize servis')
                 console.log(services); */
            }


        }
        else {
            /*  console.log('checked - kupon neaktiviran - uslo u kaluklacije')
             console.log(total);
             console.log(discountedTotal); */
            if (e.target.checked === true) {
                total += Number(e.target.value);
                setData({
                    total: total
                })
                document.getElementById('servicePrice').innerText = parseInt(total);
                /*  console.log('checked - kupon neaktiviran - nakon kaluklacije')
                 console.log(total);
                 console.log(discountedTotal); */
            }
            else {
                total -= Number(e.target.value);
                setData({
                    total: total
                })
                document.getElementById('servicePrice').innerText = parseInt(total);

                let updatedServices = services.filter(iteratedService => iteratedService[0] !== service)
                setServices(updatedServices)
                console.log(services)

                /*  console.log('checked - kupon neaktiviran - nakon kaluklacije')
                 console.log(total);
                 console.log(discountedTotal); */
            }

        }
    }

    const applyCoupon = (e) => {
        e.preventDefault()
        total = data.total;
        /*   console.log(total);
          console.log(discountedTotal); */

        let couponNumber = document.getElementById('couponNumber').value;
        if (couponNumber == CouponCode) {
            /*   console.log('ovo je okinuto'); */
            discountedTotal = total - (total * 0.3)
            discount = total * 0.3
            document.getElementById('servicePrice').innerText = parseInt(discountedTotal);
            setData({
                total: total,
                discountedTotal: discountedTotal,
                discount: discount
            })
            setCouponApplied(true);
            setTimeout(function () {
                document.getElementById('osnovica').innerText = parseInt(total);
                document.getElementById('popust').innerText = parseInt(discount);
            }, 0);
            /* console.log(total);
            console.log(discountedTotal); */
        }
        else {
            alert('Nepostojeći kupon!')
        }
    }

    function nextStepAndsend() {
        sendState(data);
        sendState2(services);
        nextStep();
    }



    return (
        <div style={{ display: visibility }}>
            <div>
                Korak 2. Odaberite jednu ili više usluga za koje ste
            </div>

            <form style={{ height: '10rem' }} id='servicesForm' name='Zamjena ulja i filtera'>
                <input type='checkbox' className='regular-checkbox' id="uljeifilter" name="Ulje i filter" value="500" onChange={calculate} />
                <label className='checkbox-label' htmlFor="uljeifilter">Zamjena ulja i filtera (500kn)</label>

                <input type="checkbox" className='regular-checkbox' id="promjenaPakni" name="Promjena pakni" value="450" onChange={calculate} />
                <label className='checkbox-label' htmlFor="promjenaPakni">Promjena pakni (450kn)</label>

                <input type="checkbox" className='regular-checkbox' id="promijenaGuma" name="Promijena guma" value="100" onChange={calculate} />
                <label className='checkbox-label' htmlFor="promijenaGuma">Promijena guma (100kn)</label>

                <input type="checkbox" className='regular-checkbox' id="servisKlime" name="Servis klima uređaja" value="299" onChange={calculate} />
                <label className='checkbox-label' htmlFor="servisKlime">Servis klima uređaja (299kn)</label>

                <input type="checkbox" className='regular-checkbox' id="balansiranjeGuma" name="Balansiranje guma" value="50" onChange={calculate} />
                <label className='checkbox-label' htmlFor="balansiranjeGuma">Balansiranje guma (50kn)</label>

                <input type="checkbox" className='regular-checkbox' id="uljeKocnica" name="Zamjena ulja u kočnicama" value="229" onChange={calculate} />
                <label className='checkbox-label' htmlFor="uljeKocnica">Zamjena ulja u kočnicama (229kn)</label>

            </form>

            {!couponApplied && <Kupon applyCoupon={applyCoupon} />}

            {couponApplied && <ActivatedCoupon />}

            <div>
                <span>Ukupno</span> <span id='servicePrice'>0</span> <span>Kn</span>
            </div>

            <hr />
            <div>
                <button onClick={previousStep}>Nazad</button>
                <button onClick={nextStepAndsend}>Dalje</button>

            </div>


        </div>
    )
}

export default Korak2
