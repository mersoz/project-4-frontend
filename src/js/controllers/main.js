angular
  .module('jobApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$scope', '$state', '$auth', 'User'];
function MainCtrl($rootScope, $scope, $state, $auth, User) {
  const vm = this;
  vm.isAuthenticated = $auth.isAuthenticated;

  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    // if($auth.getPayload()) $rootScope.currentUser = $auth.getPayload();
    if ($auth.getPayload()) {
      vm.currentUser = User.get({ id: $auth.getPayload().id });
      $rootScope.currentUser = User.get({ id: $auth.getPayload().id });
    }
    // console.log(vm.currentUser);
  });

  const protectedStates = ['listingsNew', 'listingsEdit', 'companiesNew', 'companiesEdit', 'postsNew', 'postsEdit', 'commentsNew', 'commentsEdit'];

  $rootScope.$on('$stateChangeStart', (e, toState) => {
    if((!$auth.isAuthenticated() && protectedStates.includes(toState.name))) {
      e.preventDefault();
      $state.go('login');
      vm.message = 'You must be logged in to access this page.';
    }
    vm.pageName = toState.name;
  });

  function logout() {
    $auth.logout();
    $state.go('home');
  }
  vm.logout = logout;
}
