import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

const MENSAJE = 'solo n\u00fameros enteros entre 0 y 78';

describe('fibonacci', () => {
    describe('casos base', () => {
        it('devuelve 0 para n = 0', () => {
            expect(fibonacci(0)).toBe(0);
        });

        it('devuelve 1 para n = 1', () => {
            expect(fibonacci(1)).toBe(1);
        });

        it('devuelve 1 para n = 2', () => {
            expect(fibonacci(2)).toBe(1);
        });
    });

    describe('varios términos', () => {
        it('devuelve 5 para n = 5', () => {
            expect(fibonacci(5)).toBe(5);
        });

        it('devuelve 55 para n = 10', () => {
            expect(fibonacci(10)).toBe(55);
        });
    });

    describe('límite superior', () => {
        it('devuelve 8944394323791464 para n = 78', () => {
            expect(fibonacci(78)).toBe(8944394323791464);
        });
    });

    describe('entradas inválidas', () => {
        it.each([-1, 79, 2.5, NaN, Infinity, -Infinity, '5', null, undefined])(
            'lanza RangeError con %o',
            (valor) => {
                expect(() => fibonacci(valor)).toThrow(RangeError);
                expect(() => fibonacci(valor)).toThrow(new RangeError(MENSAJE));
            }
        );
    });
});