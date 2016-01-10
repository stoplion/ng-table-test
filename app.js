angular.module('test', ['data-table']);

angular.module('test')
  .controller('testController', ['$scope', function($scope){

    $scope.options = {
      rowHeight: 60,
      headerHeight: 60,
      footerHeight: false,
      emptyMessage: 'Nothing to show...',
      columns: [{
        name: "ONE",
        prop: "first",
        width: 100
      }, {
        name: "TWO",
        prop: "second",
        width: 100
      }, {
        name: "THREE",
        prop: "third",
        width: 100
      }, {
        name: "FOUR",
        prop: "fourth",
        width: 100
      }, {
        name: "FIVE",
        prop: "fifth",
        width: 100
      }, {
        name: "SIX",
        prop: "sixth",
        width: 100
      }]
    };

    $scope.notes = [{
      first: "ONE",
      second: "TWO ",
      third: "THREE ",
      fourth: 'FOUR',
      fifth: 'FIVE',
      sixth: 'SIX'
    }];

  }]);
