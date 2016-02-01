module app.common {

    //the interface for the service
    interface IDataAccessService{
        getProductResource(): ng.resource.IResourceClass<IProductResource>;
    }

    //will also need a service for identifying the $resource objects returned from the service
    //extends tells IResource to extend its capabilites to only products in the domain Iproduct interface
    interface IProductResource extends ng.resource.IResource<app.domain.IProduct> {

    }

    export class DataAccessService
        implements IDataAccessService {

        //must be injected in the same order, item1, item2
        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService){

        }

        //specify the generic type that this will return
        getProductResource(): ng.resource.IResourceClass<IProductResource>{

            //this will return the $resource object that specify's the URL
            //this will return prodcuts with an optional ID
            return this.$resource("/api/products/:productId")
        }
    }

    //register service as an angular Service - define a service with a lowercase for the name and the upper for the actual class.
    angular.module("common.services")
        .service("dataAccessService", DataAccessService);
}
