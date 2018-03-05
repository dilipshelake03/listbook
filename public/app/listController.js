app.controller('listCtrl', ['$scope','productService','$timeout', 'toaster',
    function($scope, productService, $timeout, toaster){
        $scope.title = 'Welcome to list book';
        $scope.productData = {};
        $scope.data = {};
        productService.getProduct().then(function(response) {
            $scope.productData = response.data;
            $scope.data = $scope.productData.slice(0, 10);
        },
        function(error) {
            console.log(error)
        });
        
        $scope.getMoreData = function () {
            $timeout(function(){
                $scope.data = $scope.productData.slice(0, $scope.data.length + 10);
            },10);
            
        };
        
        $scope.removeRecord = function(index){
            $scope.data.splice(index, 1);  
            toaster.pop('success', "success", "Record deleted successfully");
        };
    }
]);