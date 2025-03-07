export function toCamelCase(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

export const reverseStr=(str)=>{
    return str.split(" ").reverse().join(" ");
};