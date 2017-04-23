angular
  .module('jobApp')
  .controller('AuthCtrl', AuthCtrl);

AuthCtrl.$inject = ['$auth', '$state', '$scope'];
function AuthCtrl($auth, $state, $scope) {
  const vm = this;

  function register() {
    $auth.signup(vm.user)
      .then(() => $state.go('login'));
  }
  vm.register = register;

  function login() {
    $auth.login(vm.credentials)
      .then((user) => {
        // $scope.currentUser = user;
        $state.go('listingsIndex');
      });
  }
  vm.login = login;
}
