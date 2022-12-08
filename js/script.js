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