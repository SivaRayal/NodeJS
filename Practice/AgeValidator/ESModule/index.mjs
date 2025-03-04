import calcuAge from "./calcuAge.mjs";
// import { createInterface } from "readline";

// const readline = createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const readLineAsync = msg => {
//     return new Promise(resolve => {
//         readline.question(msg, userRes => {
//             resolve(userRes);
//         });
//     });
// }

// const startApp = async() => {
//     const userRes = await readLineAsync("Enter list of age between 0 to 100 with comma(,) seperated : ");
//     readline.close();
//     const inputList = userRes.split(",");
//     const FinalList = calcuAge(inputList);
//     if (FinalList.length > 0) {
//         console.log(calcuAge(inputList).toString);
//     } else {
//         console.log('NA');
//     }
// }

// startApp();

const AgeCalculator = (AgeList) => {
    const FinalList = calcuAge(AgeList);
    if (FinalList.length > 0) {
        return FinalList.toString();
    } else {
        return 'NA';
    }
}

const ageListInput = [1, 22, 55, 66, 88, 99, 6]
console.log(AgeCalculator(ageListInput));