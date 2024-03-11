

export function problem(lines) {

    var a = Number(lines[0]);
    var b = Number(lines[1]);
    var c = Number(lines[2]);
    var avgr = ((a * 2) + (b * 3) + (c * 5)) / 10;

    console.log('MEDIA = ' + avgr.toFixed(1));
}