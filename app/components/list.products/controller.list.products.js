function ListProductsController($scope) {
    $scope.items = [
        {product: 'Milk', amount: 2, purchased: false},
        {product: 'Beer', amount: 12, purchased: false}
    ];
}

$scope.addItem = function(product) {
    $http.post('/products/', product).success(function(product) {
        toastr.success("Item added.");
        $scope.items.push(product);
    }).error(function(data) {
        toastr.error("Fail on adding product.");
    });
};

$scope.deleteItem = function(index){
    $scope.items.splice(index, 1);
};

$scope.editItem = function(index){
    $scope.item = $scope.items[index];
};