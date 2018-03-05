'use strict'
app.factory('productService', ['$http', '$q', function($http, $q){
        function getProduct(){
            var deferred = $q.defer();
            //'http://dummy.restapiexample.com/api/v1/employees'
            
            $http.get('/public/api/products.json').then(function(data){
                 deferred.resolve(data.data);
            }, function(err){
                deferred.reject(err);
            });
              
            return deferred.promise;
        }
        
        return {
            getProduct : getProduct
        };
}]);
