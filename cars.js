function cars (make,model,color,image,registration,number,price)

{
    this.make=make;
    this.model=model;
    this.color=color;
    this.image=image;
    this.registration=registration;
    this.number=number;
    this.price=price;
};

editprice.cars = function () 
    {

     cars.price="300000";

    }
    showall.cars =function(){

    console.log(this.make +this.model+this.color+this.image+this.registration+this.number+this.price)
}