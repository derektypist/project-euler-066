// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.length==0 || num<2 || num>1000 || (num.length>1 && num[0]=="0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 1000.  Do not include leading zeros.`
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Minimal Solutions in x for D ≤ ${num}, largest x is obtained when D = ${diophantineEquation(num)}.`
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to find the value of D ≤ n in minimal solutions of x
    for which the largest value of x is obtained.
    diophantineEquation(7)    returns 5
    diophantineEquation(100)  returns 61
    diophantineEquation(409)  returns 409
    diophantineEquation(500)  returns 421
    diophantineEquation(1000) returns 661
*/
function diophantineEquation(n) {
    function isSolution(D, numerator, denominator) {
        return numerator * numerator - BigInt(D) * denominator * denominator === 1n;
    }

    let result = 0;
    let biggestX = 0;
    for (let D=2;D<=n;D++) {
        let boundary = Math.floor(Math.sqrt(D));
        if (boundary ** 2 === D) continue;
        let m = 0n;
        let d = 1n;
        let a = BigInt(boundary);
        let [numerator, prevNumerator] = [a,1n];
        let [denominator, prevDenominator] = [1n,0n];
        while (!isSolution(D,numerator,denominator)) {
            m = d * a - m;
            d = (BigInt(D) - m*m)/d;
            a = (BigInt(boundary) + m)/d;
            [numerator,prevNumerator] = [a*numerator + prevNumerator,numerator];
            [denominator,prevDenominator] = [a*denominator + prevDenominator,denominator];
        }

        if (numerator > biggestX) {
            biggestX = numerator;
            result = D;
        }
    }
    return result;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}
