function stepRateCalculate(val, steps, rates, fix) {
    var formula = [];
    var result = 0;
    var acc = 0;

    if (fix == undefined) {
        fix = 2;
    }

    if (val < steps[0]) {
        return 0;
    }
    for (var i=0; i<steps.length; i++) {
        if (val > steps[i+1]) {
            acc = (steps[i+1] - steps[i]) * rates[i] / 100;
            formula.push("(" + steps[i+1].toString() + "-" + steps[i].toString() + ") * " + rates[i].toString() + "% = " + acc.toFixed(fix));
            result += acc;
        } else {
            acc = (val - steps[i]) * rates[i] / 100;
            formula.push("(" + val.toString() + "-" + steps[i].toString() + ") * " + rates[i].toString() + "% = " + acc.toFixed(fix));
            result += acc;
            break;
        }
    }
    return {formula: formula, result: result};
}