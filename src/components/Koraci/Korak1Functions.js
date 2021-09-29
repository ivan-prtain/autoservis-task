export const onClick = (setKorak1, setKorak2) => {
    console.log('kliknuo sam');
    if (validate()) {
        console.log('mozete dalje')
        console.log(sessionStorage.getItem('carManufacturer'));
        setKorak1(false);
        setKorak2(true);

    }
    else {
        console.log('odlucio')
        console.log(sessionStorage.getItem('carManufacturer'));
        alert('Molim vas odaberite prvo proizvođača')
    }
}

export const validate = () => {
    console.log('poceo validaciju')
    let inputInfo = document.radioForm.manufacturer;
    let radioIsChecked = false;

    inputInfo.forEach(element => {
        if (element.checked === true) {
            radioIsChecked = true;
            saveCarManufacturer(element.value);
            return true;
        }
    });
    return radioIsChecked;
}

export function saveCarManufacturer(manufacturer) {
    sessionStorage.setItem('carManufacturer', manufacturer);
}