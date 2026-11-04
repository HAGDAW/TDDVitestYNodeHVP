export function fibonacci(n) {
    if (n < 0) throw new RangeError('n no puede ser negativo')
    if (n === 0) return 0
    if (n === 1) return 1

    let anterior = 0
    let actual = 1
    for (let i = 2; i <= n; i++) {
        const siguiente = anterior + actual
        anterior = actual
        actual = siguiente
    }
    return actual
}