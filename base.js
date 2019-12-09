const heure = document.getElementById('heure');
const minute = document.getElementById('minute');
const seconde = document.getElementById('seconde');
const date_actuelle = new Date();

let rotate_seconde = (date_actuelle.getSeconds() * 6) - 6;
let rotate_minute = (date_actuelle.getMinutes() * 6);
let rotate_heure = (date_actuelle.getHours() * 30) + (date_actuelle.getMinutes() * 0.5);




const temps_seconde = function () {
    setTimeout(temps_seconde, 1000);
    if (date_actuelle.getMilliseconds() >= 0) {
        rotate_seconde += 6;
    }
    if (seconde.style.transform === 'rotate(360deg)') {
        rotate_minute += 6;
        rotate_heure += 0.5;
        rotate_seconde = 6;
    }
    seconde.style.transform = 'rotate(' + rotate_seconde + 'deg)';
    minute.style.transform = 'rotate(' + rotate_minute + 'deg)';
    heure.style.transform = 'rotate(' + rotate_heure + 'deg)';
};





temps_seconde();

