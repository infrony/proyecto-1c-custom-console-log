const log = require('./../index');

var chai = require('chai'),
    expect = chai.expect,
    sinonChai = require('sinon-chai'),
    sinon = require('sinon');

chai.use(sinonChai);
const MENSAJE = 'Hola, estamos en el curso de NPM!!';
describe('Test de las funciones', () => {
    beforeEach( function() {
        sinon.spy(console, 'log')
    });
    afterEach( function() {
        console.log.restore();
    });
	it('Funcion ok', () => {
        log.ok(MENSAJE);
        expect(console.log).to.be.called;
	});
	it('Funcion info', () => {
        log.info(MENSAJE);
        expect(console.log).to.be.called;
	});
	it('Funcion aviso', () => {
        log.aviso(MENSAJE);
        expect(console.log).to.be.called;
	});
	it('Funcion error', () => {
        log.error(MENSAJE);
        expect(console.log).to.be.called;
    });
    it('No llama al console log', () => {
        log.mensajeBienvenida();
        expect(console.log).to.not.be.called;
    });
});
