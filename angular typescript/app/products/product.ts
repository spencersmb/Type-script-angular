//create new namespace for any entity to belong to the domain namespace
//start with wrapping it in an iffy
module app.domain{

    //define interface
    //to access product outside of this function and usable by other files use keyword export
    export interface IProduct{
        productId: number;
        productName: string;
        productCode: string;
        releaseDate: Date;
        price: number;
        description:string;
        imageUrl: string;
        //func takes in a number and returns: a number
        //calculateDiscount(percent: number): number;
    }

    export class Product implements IProduct {

        constructor(public productId: number,
                    public productName: string,
                    public productCode: string,
                    public releaseDate: Date,
                    public price: number,
                    public description: string,
                    public imageUrl: string
                    ){

        }

        calculateDiscount(percent: number): number{
            return this.price - (this.price * percent/100);
        }
    }

}