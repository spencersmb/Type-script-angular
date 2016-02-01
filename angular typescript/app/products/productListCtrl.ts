
module app.productList {

    //Clearly Define the inteneded properties of the controller
    //helps with intellisense and readability
    interface IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];
        //if function does not return a val its void - if it does replace void with Function.
        toggleImage(): void;
    }

    //create controller class to define properties to expose to the view
    class ProductListCtrl implements IProductListModel {

        //must define a property defined in the interface above
        title:string;
        showImage:boolean;
        products: app.domain.IProduct[];

        //inject the service which helps with minification
        static $inject=["dataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService) {
            this.title = "Product List";
            this.showImage = false;
            this.products = [];

            //declare value of the returned $resource object
            var productResource = dataAccessService.getProductResource();

            //then query the object using built in method that has lots of properties on it
            productResource.query((data: app.domain.IProduct[]) => {
                //set the data to the array which is just a bunch or resource promise objects
                this.products = data;
            });

        }

        toggleImage():void {
            this.showImage = !this.showImage;
        }

    }//End Class

    //Last step to setting up a controller
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
            ProductListCtrl
        );
}