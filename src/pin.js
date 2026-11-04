export function esPinValido(pin) {
    return /^\d{4}$/.test(pin)
}