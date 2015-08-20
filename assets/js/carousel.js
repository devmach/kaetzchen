var app = angular.module('app', ['ngAnimate']);

app.controller('CarouselController', function($scope, $interval) {
  $scope.images = [
    './assets/img/kitten_1.jpg',
    './assets/img/kitten_2.jpg',
    './assets/img/kitten_3.jpg',
  ];

  $scope.activeImage = 0;
  $scope.rotateImages = true;
  $scope.shouldAutoRotate = true;

  $scope.rotate = function() {
    $scope.timer = $interval(function() {
      $scope.nextSlide();
    }, 2000);
  };

  $scope.startStopAutoRotate = function(val) {
    $scope.rotateImages = val;

    if (val) {
      $scope.rotate();
    } else {
      $interval.cancel($scope.timer);
    }
  };

  $scope.goToSlide = function(idx) {
    $scope.activeImage = idx;
    if ($scope.rotateImages) {
      $scope.rotate();
    }
  };

  $scope.nextSlide = function() {
    $interval.cancel($scope.timer);
    $scope.goToSlide(($scope.activeImage + 1) % $scope.images.length);
  };

  $scope.prevSlide = function() {
    $interval.cancel($scope.timer);
    $scope.goToSlide(($scope.activeImage - 1 + $scope.images.length) %
      $scope.images.length );
  };

  if ($scope.rotateImages) {
    $scope.rotate();
  }
});