export function problem(lines) {

    const [name, wage, sales] = lines;
    const commission = 0.15
    const totalWage = Number(wage) + Number(sales) * commission;

    console.log(`TOTAL = R$ ${totalWage.toFixed(2)}`);
}