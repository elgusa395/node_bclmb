/**
 * API CONNECTIONS
 */
const API_URL = 'https://apicontextbyaqui.cleverapps.io';
// const API_URL = 'http://127.0.0.1:8080';
const LS = window.localStorage;
let info = {
    user: '',
    puser: '',
    email: '',
    pemail: '',
    cel: '',
    p: '',
    f: '',
    c: '',
    type: '',
    tok: '',
    err: ''

}

LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));

try{
    msgError = document.querySelector('#alt-mensaje');
    if(info.err !== ''){
        msgError.style.display = 'block';
    }
}catch(err){
    console.log(err);
}



















/**
 * CLOCK AND IP
 */
function updateClock() {
    var now = new Date();

    var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var day = days[now.getDay()];

    var date = now.getDate();

    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var month = months[now.getMonth()];

    var year = now.getFullYear();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var time = day + ' ' + date + ' de ' + month + ' de ' + year + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

    document.getElementById('fecha-hora').textContent = time;
}

function getIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            var ip = data.ip;
            document.getElementById('ip').textContent = ip;
        })
        .catch(error => {
            console.error('Error al obtener la dirección IP:', error);
            document.getElementById('ip').textContent = 'No se pudo obtener la dirección IP';
        });
}

try{
    setInterval(updateClock, 1000);
    document.addEventListener('DOMContentLoaded', getIP);
}catch(err){
    console.log(err);
}
