app.controler('Homepage',['$scope', function($scope){
    $scope.homepage = "Главная";
}]);
app.controller('About',['$scope', function($scope){
    $scope.about = "О нас";
}]);
app.controller('Date',['$scope', function($scope){
    $scope.now = new Date();
}]);