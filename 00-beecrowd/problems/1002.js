export function problem(lines) {

    const raio = Number(lines[0]);
    const pi = 3.14159;
    const area = raio ** 2 * pi;

    console.log('A=' + area.toFixed(4));
}