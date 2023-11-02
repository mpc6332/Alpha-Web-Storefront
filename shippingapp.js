angular.module('shippingapp', [])
    .controller('ShippingController', function ($scope) {
        $scope.displayJSON = function (){
            if ($scope.address){
                $scope.shippingInfoJSON = {
                    address: $scope.address
                };
                $scope.showJSON = true;
            }
        };
});