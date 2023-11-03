angular.module('shippingapp', [])
    .controller('ShippingController', function ($scope) {
        $scope.displayJSON = function (){
            if ($scope.address,city,state,zip,carrierName,shippingMethod){
                $scope.shippingInfoJSON = {
                    address: $scope.address,
                    city: $scope.city,
                    state: $scope.state,
                    zip: $scope.zip,
                    carrierName: $scope.carrierName,
                    shippingMethod: $scope.shippingMethod
                };
                $scope.showJSON = true;
            }

        };
});
