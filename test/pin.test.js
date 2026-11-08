import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
    describe('PIN válidos', () => {
        it.each(['0123', '1234', '000001', '123456'])(
            'acepta %s',
            (pin) => expect(esPinValido(pin)).toBe(true)
        );

        it('conserva los ceros iniciales (4 y 6 dígitos)', () => {
            expect(esPinValido('0012')).toBe(true);
            expect(esPinValido('012345')).toBe(true);
        });

        it('acepta PIN con casi todos los dígitos iguales', () => {
            expect(esPinValido('1112')).toBe(true);
            expect(esPinValido('222221')).toBe(true);
        });
    });

    describe('longitud incorrecta', () => {
        it.each(['', '1', '12', '123', '12345', '1234567', '12345678'])(
            'rechaza longitud %j',
            (pin) => expect(esPinValido(pin)).toBe(false)
        );
    });

    describe('todos los dígitos iguales', () => {
        it.each(['0000', '1111', '9999', '000000', '888888'])(
            'rechaza %s',
            (pin) => expect(esPinValido(pin)).toBe(false)
        );
    });

    describe('caracteres no permitidos', () => {
        it.each([
            ['letras', '12a4'],
            ['letras en PIN de 6', '12345a'],
            ['espacio inicial', ' 1234'],
            ['espacio final', '1234 '],
            ['espacio intermedio', '12 34'],
            ['signo menos', '-123'],
            ['signo más', '+1234'],
            ['punto decimal', '12.34'],
            ['guion separador', '12-34'],
            ['salto de línea final', '1234\n'],
            ['dígitos árabe-índicos', '١٢٣٤'],
            ['dígitos de ancho completo', '１２３４'],
            ['notación exponencial', '1e34'],
        ])('rechaza %s (%j)', (_nombre, pin) => {
            expect(esPinValido(pin)).toBe(false);
        });
    });

    describe('tipos incorrectos (sin lanzar excepciones)', () => {
        it.each([
            ['null', null],
            ['undefined', undefined],
            ['número', 1234],
            ['número de 6 cifras', 123456],
            ['booleano', true],
            ['array de caracteres', ['1', '2', '3', '4']],
            ['objeto', { pin: '1234' }],
            ['String object', new String('1234')],
            ['NaN', NaN],
            ['bigint', 1234n],
            ['función', () => '1234'],
        ])('devuelve false para %s', (_nombre, pin) => {
            expect(() => esPinValido(pin)).not.toThrow();
            expect(esPinValido(pin)).toBe(false);
        });

        it('devuelve false si se llama sin argumentos', () => {
            expect(esPinValido()).toBe(false);
        });
    });
});