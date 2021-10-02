export const onClick = (Step1, Step2) => {
    console.log('kliknuo sam');
    if (validate()) {
        Step1(false);
        Step2(true);

    }
    else {
        alert('Molim vas odaberite prvo proizvođača')
    }
}

export const validate = () => {
    /*   console.log('poceo validaciju') */
    let inputInfo = document.radioForm.manufacturer;
    let radioIsChecked = false;
    let checkedElement

    inputInfo.forEach(element => {
        if (element.checked === true) {
            radioIsChecked = true;
            checkedElement = element.value;
            /*    console.log('prepetak')
               console.log(checkedElement) */
            return true;
        }
    });
    return [radioIsChecked, checkedElement];
}