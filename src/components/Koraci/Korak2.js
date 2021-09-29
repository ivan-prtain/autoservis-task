import React from 'react'

const Korak2 = () => {

    let total = 0

    function calculate(e) {
        console.log(e.target.value);
        console.log(e.target.checked);

        if (e.target.checked === true) {
            total += Number(e.target.value);
            console.log(total);
            document.getElementById('servicePrice').innerText = total;
        }
        else {
            total -= Number(e.target.value);
            console.log(total);
            document.getElementById('servicePrice').innerText = total;
        }
    }



    return (
        <div>
            <div>
                Korak 2. Odaberite jednu ili više usluga za koje ste
            </div>

            <form style={{ height: '10rem' }} name='servicesForm'>
                <input type="checkbox" id="uljeifilter" name="uljeifilter" value="500" onChange={calculate} />
                <label htmlFor="uljeifilter">Zamjena ulja i filtera (500kn)</label>

                <input type="checkbox" id="promjenaPakni" name="promjenaPakni" value="450" onChange={calculate} />
                <label htmlFor="promjenaPakni">Promjena pakni (450kn)</label>

                <input type="checkbox" id="promijenaGuma" name="promijenaGuma" value="100" onChange={calculate} />
                <label htmlFor="promijenaGuma">Promijena guma (100kn)</label>

                <input type="checkbox" id="servisKlime" name="servisKlime" value="299" onChange={calculate} />
                <label htmlFor="servisKlime">Servis klima uređaja (299kn)</label>

                <input type="checkbox" id="balansiranjeGuma" name="balansiranjeGuma" value="50" onChange={calculate} />
                <label htmlFor="balansiranjeGuma">Balansiranje guma (50kn)</label>

                <input type="checkbox" id="uljeKocnica" name="uljeKocnica" value="229" onChange={calculate} />
                <label htmlFor="uljeKocnica">Zamjena ulja u kočnicama (229kn)</label>

            </form>

            <div>
                <span>Ukupno</span> <span id='servicePrice'>0</span> <span>Kn</span>
            </div>


        </div>
    )
}

export default Korak2
