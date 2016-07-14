app.controller('Homepage',['$scope', function($scope){
    $scope.homepage = "Главная";
}]);
app.controller('About',['$scope', function($scope){
    $scope.about = "О нас";
}]);
app.controller('Date',['$scope', function($scope){
    $scope.now = new Date();
}]);
app.controller('Validation',['$scope', function($scope){
    $scope.validate = "Форма входа";
}]);