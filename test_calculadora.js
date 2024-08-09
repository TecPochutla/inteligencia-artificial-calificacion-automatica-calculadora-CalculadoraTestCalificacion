const calculadora = require('./calculadora');

test('suma de 2 + 3 es 5', () => {
    expect(calculadora(2, 3, '+')).toBe(5);
});

test('resta de 5 - 2 es 3', () => {
    expect(calculadora(5, 2, '-')).toBe(3);
});

test('multiplicación de 3 * 4 es 12', () => {
    expect(calculadora(3, 4, '*')).toBe(12);
});

test('división de 10 / 2 es 5', () => {
    expect(calculadora(10, 2, '/')).toBe(5);
});

test('división por cero da error', () => {
    expect(calculadora(10, 0, '/')).toBe("Error: División por cero");
});

test('operador no válido da error', () => {
    expect(calculadora(10, 5, '%')).toBe("Error: Operador no válido");
});
