angular
  .module('jobApp')
  .controller('CompaniesIndexCtrl', CompaniesIndexCtrl)
  .controller('CompaniesShowCtrl', CompaniesShowCtrl);

CompaniesIndexCtrl.$inject = ['Company'];
function CompaniesIndexCtrl(Company) {
  const vm = this;
  vm.all = Company.query();
}

CompaniesShowCtrl.$inject = ['Company', '$stateParams', '$state'];
function CompaniesShowCtrl(Company, $stateParams, $state) {
  const vm = this;
  vm.company = Company.get($stateParams);
  // 
  // function companiesDelete() {
  //   vm.company
  //     .$remove()
  //     .then(() => $state.go('companiesIndex'));
  // }
  // vm.delete = companiesDelete;
}
