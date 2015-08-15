angular.module('forms', [])
  .controller('selectBox', function() {
    var currencyList = this;
    currencyList.currency = [
      {name: 'EUR', value:'0', dependency: true},
      {name: 'USD', value:'1', dependency: false},
      {name: 'All', value:'2', dependency: false},
    ];

    currencyList.dependentCurrency = [
      {name: 'USD', value:'0', dependency: true},
      {name: 'GBR', value:'1', dependency: true},
    ];
})
  .controller('ajax', function($scope, $http) {
      $http.get('js/data.json')
      .success(function(data, status, headers, config) {
        $scope.currencyList.currency = data;
      })
      .error(function(data, status, headers, config) {
        // log error
      });
    });

