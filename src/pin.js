export function esPinValido(pin) {
    // 1. Tiene que ser una cadena
    if (typeof pin !== 'string') {
        return false;
    }

    // 2. Solo dígitos ASCII del 0 al 9, y exactamente 4 o 6
    if (!/^([0-9]{4}|[0-9]{6})$/.test(pin)) {
        return false;
    }

    // 3. No pueden ser todos iguales
    return new Set(pin).size > 1;
}