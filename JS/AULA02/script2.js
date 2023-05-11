let p1 = 7.0;
let p2 = 5.0;
let a1 = 10;
let a2 = 8;
let a3 = 9;
let a4 = 7;

let media_provas = (p1 + p2) / 2;
let media_ponderada = (a1 + a2 + a3 + a4) / 4;
let av1 = media_provas * 0.6 + media_ponderada * 0.4;

if (av1 > 6.0) {
    console.log(`AV1 = ${av1.toFixed(1)}, você está acima da média.`);
} else if (av1 < 6.0) {
    console.log(`AV1 = ${av1.toFixed(1)}, você está abaixo da média.`);
} else {
    console.log(`AV1 = ${av1.toFixed(1)}, você está na média.`);
}