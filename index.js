module.exports = {
    ok,
    info,
    error,
    aviso,
    mensajeBienvenida
};


function ok(mensaje) {
    const estilos = 'background-color: green; color: white; font-size: 30px; display:block; text-align: center;';
    mostratLog(mensaje, estilos);
}

function info(mensaje) {
    const estilos = 'background-color: blue; color: white; font-size: 30px; display:block; text-align: center;';
    mostratLog(mensaje, estilos);
}

function error(mensaje) {
    const estilos = 'background-color: red; color: white; font-size: 30px; display:block; text-align: center;';
    mostratLog(mensaje, estilos);
}

function aviso(mensaje) {
    const estilos = 'background-color: orange; color: white; font-size: 30px; display:block; text-align: center;';
    mostratLog(mensaje, estilos);
}

function mostratLog(mensaje, estilos) {
    console.log('%c%s', estilos, mensaje);
}

function mensajeBienvenida() {
    return 'Hola!!!';
}