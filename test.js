// function multiplicar (e, f) {
    // return e * f;
// }

// test('multiplicar 6 * 2 es igual a 12') {
    // const result = multiplicar (6, 2);
    // const expected = 12;
    // expect(result).toBe(expected);
// };


// function suma (a,b) {
    // return a + b;
// }

// test('suma 1 + 2 es igual a 3', () => {
    // const result = suma(1, 2);
    // const expected = 3;
    // expect(result).toBe(expected);
// });

// THIS IS THE SAMEEEEEE expect(suma(1, 2)).toBe(3);

// function division (c, d) {
    // return c / d;
// }

// test('division 4 / 2 es igual a 2', () => {
    // const result = division (4, 2);
    // const expected = 2;
    // expect(result).toBe(expected);
// });

function division (e, f) {
    return e / f;
}

test('division 8 / 0 es igual a 0', () => {
    const result = division (8, 0);
    const expected = 0;
    expect(result).toBe(expected);
});