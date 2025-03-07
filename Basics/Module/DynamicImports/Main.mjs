async function loadMathModules(){
    const math= await import('./MathDiv.mjs');

    console.log("Division : ",math.divide(5,2));
    console.log("Modulus : ",math.modulus(4,3));
}

loadMathModules();