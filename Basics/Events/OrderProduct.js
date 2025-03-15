const em = require('events');

class OrderProduct extends em{
    constructor(){
        super();
        this.itemName="";
        this.price=0;
    }

    orderProduct(item,cost){
        this.itemName=item;
        this.price=cost;
        this.emit("orderProduct",this.itemName,this.price);
    }

    display(){
        console.log(`Produc Name : ${this.itemName} price : ${this.price}`);
    }
}

module.exports=OrderProduct;