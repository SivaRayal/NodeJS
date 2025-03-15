class Offers{
   setOffers(price){
    if(price>50000)
        console.log("Wow..! You unlocked offer worth 5000 INR");
    else
        console.log("We are sorry, No Offers availble at this time.");
   }
}

module.exports = Offers;