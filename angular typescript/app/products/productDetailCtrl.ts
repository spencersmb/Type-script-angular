module app.productDetail{

    interface IProductDetail {
        title: string;
        //the binds to the properties of that product
        product: app.domain.IProduct;
    }

    //define interface for stateParams
    interface IProductParams extends angular.ui.IStateParamsService{
        productId: number;
    }
    class ProductDetailCtrl implements IProductDetail{
        title:string;
        product: app.domain.IProduct;

        //inject the data
        //MUST INJECT IN THE SAME ORDER TO WORK
        static $inject=["dataAccessService", "$stateParams"];
        constructor(private dataAccessService: app.common.DataAccessService,
                    private $stateParams: IProductParams
                    ){
            this.title = "Product Detail";

            //get data
            //var productResource = dataAccessService.getProductResource();
            var id = $stateParams.productId;

            //declare value of the returned $resource object
            var productResource = dataAccessService.getProductResource();


            //the param name i.e. "id" must match the api parameter name
            productResource.get({ productId: id }, (data: app.domain.IProduct) => {
                this.product = data;
            });
        }
    }
    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",
            ProductDetailCtrl
        );

}