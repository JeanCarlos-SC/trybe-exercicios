"use strict";
const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convertCapacity(value, baseUnit, convertUnit) {
    const indexBaseUnit = unitsCapacity.indexOf(baseUnit);
    const indexConvertUnit = unitsCapacity.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(10, expoent);
}
(function execCapacity() {
    console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE CAPACIDADE');
    console.log('\n--------------------------------------------------');
    readLine.setDefaultOptions({
        limit: unitsCapacity,
    });
    console.log('\nOpções disponíveis: kl, hl, dal, l, dl, cl, ml');
    const value = readLine.questionInt('\nDigite o valor a ser convertido: ');
    const baseUnit = readLine.question('\nDigite a unidade base: ');
    const convertUnit = readLine.question('\nDigite a unidade para que deseja converter: ');
    const result = convertCapacity(value, baseUnit, convertUnit);
    console.log(`\n${value}${baseUnit} é igual a ${result}${convertUnit}`);
})();
