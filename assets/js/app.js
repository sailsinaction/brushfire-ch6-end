angular.module('brushfire', ['ngRoute', 'toastr', 'compareTo', 'ngPatternRestrict'])
  .config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      '*://www.youtube.com/**'
    ]);
  }])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider

    .when('/', {
    templateUrl: '/templates/home.html'
  })

  .when('/signup', {
    templateUrl: '/templates/signup.html',
    controller: 'signupPageController'
  })

  .when('/administration', {
    templateUrl: '/templates/admin-users.html',
    controller: 'adminUsersPageController'
  })

  .when('/videos', {
    templateUrl: '/templates/videos.html',
    controller: 'videosPageController'
  })

  .when('/profile/:id', {
    templateUrl: '/templates/profile.html',
    controller: 'profilePageController'
  })

  .when('/profile/edit/:id', {
    templateUrl: '/templates/edit-profile.html',
    controller: 'editProfilePageController'
  })

  .when('/restore-profile', {
    templateUrl: '/templates/restore-profile.html',
    controller: 'restorePageController'
  });
}]);