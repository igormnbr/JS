export function problem(lines) {
    // const [a, b, c, d] = lines;
    const a = parseInt(lines[0]);
    const b = parseInt(lines[1]);
    const c = parseInt(lines[2]);
    const d = parseInt(lines[3]);

    if (b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 == 0) {
        console.log('Valores aceitos');
    } else {
        console.log('Valores nao aceitos');
    }

}