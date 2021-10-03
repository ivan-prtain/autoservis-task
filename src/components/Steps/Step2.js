import React from 'react'
import Coupon from './Coupon';
import { useState } from 'react';
import ActivatedCoupon from './ActivatedCoupon';
import './Steps.css'

const Step2 = ({ nextStep, setTotalPrice, services, setServices, totalPrice, previousStep, checkboxes, saveCheckbox }) => {


    const [CouponCode] = useState('Tokić123')

    /**
     * calculate
     * @param {*} e 
     */
    function calculate(e) {
        let total = totalPrice.total;
        let service = e.target.name;
        let serviceId = e.target.id;
        let serviceCost = e.target.value;
        let serviceDetails = [service, serviceCost]

        setServices([...services, serviceDetails])
        if (totalPrice.couponApplied) {
            let discountedTotal = totalPrice.discountedTotal;
            let discount = totalPrice.discount;
            let itemValue = Number(e.target.value);
            let discountedItemValue = 0
            discountedItemValue = itemValue - (itemValue * 0.3);
            if (e.target.checked === true) {
                saveCheckbox(serviceId, true)

                total += itemValue;
                discountedTotal += discountedItemValue;
                discount += itemValue * 0.3;

                setTotalPrice({
                    total: total,
                    discountedTotal: discountedTotal,
                    discount: discount,
                    couponApplied: true
                })
            }
            else {
                saveCheckbox(serviceId, false)
                total -= itemValue;
                discountedTotal -= discountedItemValue;
                discount -= itemValue * 0.3;

                setTotalPrice({
                    total: total,
                    discountedTotal: discountedTotal,
                    discount: discount,
                    couponApplied: true
                })

                let updatedServices = services.filter(iteratedService => iteratedService[0] !== service)
                setServices(updatedServices);
            }
        }
        else {
            if (e.target.checked === true) {
                saveCheckbox(serviceId, true)
                total += Number(e.target.value);
                setTotalPrice({
                    total: total
                })
            }
            else {
                saveCheckbox(serviceId, false)
                total -= Number(e.target.value);
                setTotalPrice({
                    total: total
                })


                let updatedServices = services.filter(iteratedService => iteratedService[0] !== service)
                setServices(updatedServices)
            }
        }
    }

    /**
     * applyCoupon
     * @param {*} e 
     */
    const applyCoupon = (e) => {
        e.preventDefault()
        let total = totalPrice.total;
        let discountedTotal = totalPrice.discountedTotal;
        let discount = totalPrice.discount;

        let couponNumber = document.getElementById('couponNumber').value;
        if (couponNumber == CouponCode) {
            discountedTotal = total - (total * 0.3)
            discount = total * 0.3

            setTotalPrice({
                total: total,
                discountedTotal: discountedTotal,
                discount: discount,
                couponApplied: true
            })
        }
        else {
            alert('Nepostojeći kupon!')
        }
    }


    return (
        <div >
            <div>
                Korak 2. Odaberite jednu ili više usluga za koje ste
            </div>

            <form id='servicesForm' >

                <div className='service-box1'>
                    <div>
                        <input type='checkbox' checked={checkboxes.uljeifilter} className='regular-checkbox' id="uljeifilter" name="Ulje i filter" value="500" onChange={calculate} />
                        <label className='checkbox-label' htmlFor="uljeifilter">Zamjena ulja i filtera (500kn)</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={checkboxes.servisKlime} className='regular-checkbox' id="servisKlime" name="Servis klima uređaja" value="299" onChange={calculate} />
                        <label className='checkbox-label' htmlFor="servisKlime">Servis klima uređaja (299kn)</label>
                    </div>
                </div>

                <div className='service-box2'>
                    <div>
                        <input type="checkbox" checked={checkboxes.promjenaPakni} className='regular-checkbox' id="promjenaPakni" name="Promjena pakni" value="450" onChange={calculate} />
                        <label className='checkbox-label' htmlFor="promjenaPakni">Promjena pakni (450kn)</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={checkboxes.balansiranjeGuma} className='regular-checkbox' id="balansiranjeGuma" name="Balansiranje guma" value="50" onChange={calculate} />
                        <label className='checkbox-label' htmlFor="balansiranjeGuma">Balansiranje guma (50kn)</label>
                    </div>
                </div>

                <div className='service-box3'>
                    <div>
                        <input type="checkbox" checked={checkboxes.promjenaGuma} className='regular-checkbox' id="promjenaGuma" name="Promjena guma" value="100" onChange={calculate} />
                        <label className='checkbox-label' htmlFor="promijenaGuma">Promijena guma (100kn)</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={checkboxes.uljeKocnica} className='regular-checkbox' id="uljeKocnica" name="Zamjena ulja u kočnicama" value="229" onChange={calculate} />
                        <label className='checkbox-label' htmlFor="uljeKocnica">Zamjena ulja u kočnicama (229kn)</label>
                    </div>
                </div>

            </form>

            {totalPrice.couponApplied ? <ActivatedCoupon total={totalPrice.total} discount={totalPrice.discount} /> : <Coupon applyCoupon={applyCoupon} />}

            <div>
                <span>Ukupno</span> <span id='servicePrice'>{totalPrice.discountedTotal ? totalPrice.discountedTotal : totalPrice.total}</span> <span>Kn</span>
            </div>

            <hr />
            <div>
                <button className='btn' onClick={previousStep}>Nazad</button>
                <button className='btn' onClick={nextStep}>Dalje</button>

            </div>

        </div>
    )
}

export default Step2
