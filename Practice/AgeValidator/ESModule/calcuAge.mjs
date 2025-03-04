const calcuAge = (ageList) => {
    let finalList=[];
    ageList.forEach(element => {
        if(element>=18 && element<=60){
            finalList.push(element);
        }
    });
    return finalList;
}

export default calcuAge;