export function problem(lines) {

    const [distance, fuelConsumption] = lines;
    const avgrConsumption = Number(distance) / Number(fuelConsumption);

    console.log(avgrConsumption.toFixed(3) + ' km/l')

}