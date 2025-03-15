const order=require('./OrderProduct');
const offer=require('./Offfers');
let orderObj=new order();
let offerObj=new offer();

orderObj.on('orderProduct',(prodName,prodPrice)=>{
    console.log("New order placed for : ",prodName);
    orderObj.display();
    offerObj.setOffers(prodPrice);
}) 

orderObj.orderProduct("iPhone 16",90000);