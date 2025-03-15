const queryString=require('querystring');
const url=require('url');

let sampleurl='http://www.xyzcompany.com/index.html?user="SivaRayal"&year="2025"';
console.log("URL : ",sampleurl);


let parsedUrl=queryString.parse(url.parse(sampleurl).query);
console.log("Parsed URL : ",parsedUrl);

let urlParser=queryString.stringify({
    user:'SivaRayal',
    year:2025,
    company:'xyzABCCompany'
});
console.log('URL Parser : ',urlParser);