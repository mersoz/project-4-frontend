angular
  .module('jobApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/static/home.html'
    })
    .state('job-stats', {
      url: '/job-stats',
      templateUrl: 'js/views/job-stats.html',
      controller: 'GlassdoorCtrl as glassdoor'
    })

    /////////// AUTH ///////////
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'AuthCtrl as auth'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'AuthCtrl as auth'
    })

    /////////// COMPANIES ///////////
    .state('companiesIndex', {
      url: '/companies',
      templateUrl: 'js/views/companies/index.html',
      controller: 'CompaniesIndexCtrl as companiesIndex'
    })
    .state('companiesShow', {
      url: '/companies/:id',
      templateUrl: 'js/views/companies/show.html',
      controller: 'CompaniesShowCtrl as companiesShow'
    })

    /////////// LISTINGS ///////////
    .state('listingsIndex', {
      url: '/listings',
      templateUrl: 'js/views/listings/index.html',
      controller: 'ListingsIndexCtrl as listingsIndex'
    })
    .state('listingsShow', {
      url: '/listings/:id',
      templateUrl: 'js/views/listings/show.html',
      controller: 'ListingsShowCtrl as listingsShow'
    })
    .state('listingsEdit', {
      url: '/listings/:id/edit',
      templateUrl: 'js/views/listings/edit.html',
      controller: 'ListingsEditCtrl as listingsEdit'
    })

    /////////// USERS ///////////
    .state('usersIndex', {
      url: '/users',
      templateUrl: 'js/views/users/index.html',
      controller: 'UsersIndexCtrl as usersIndex'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'js/views/users/show.html',
      controller: 'UsersShowCtrl as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: 'js/views/users/edit.html',
      controller: 'UsersEditCtrl as usersEdit'
    })

    /////////// POSTS ///////////
    .state('postsIndex', {
      url: '/posts',
      templateUrl: 'js/views/posts/index.html',
      controller: 'PostsIndexCtrl as postsIndex'
    })
    .state('postsNew', {
      url: '/posts/new',
      templateUrl: 'js/views/posts/new.html',
      controller: 'PostsNewCtrl as postsNew'
    })
    .state('postsShow', {
      url: '/posts/:id',
      templateUrl: 'js/views/posts/show.html',
      controller: 'PostsShowCtrl as postsShow'
    })
    .state('postsEdit', {
      url: '/posts/:id/edit',
      templateUrl: 'js/views/posts/edit.html',
      controller: 'PostsEditCtrl as postsEdit'
    });

  $urlRouterProvider.otherwise('/');
}
