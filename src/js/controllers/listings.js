angular
  .module('jobApp')
  .controller('ListingsIndexCtrl', ListingsIndexCtrl)
  // .controller('ListingsNewCtrl', ListingsNewCtrl)
  .controller('ListingsShowCtrl', ListingsShowCtrl);
  // .controller('ListingsEditCtrl', ListingsEditCtrl);

ListingsIndexCtrl.$inject = ['Listing', 'glassdoor'];
function ListingsIndexCtrl(Listing, glassdoor) {
  const vm = this;
  vm.all = Listing.query();

  function getListings() {
    glassdoor.getListings()
      .then((res) => {
        vm.listings = res;
      });
  }
  vm.getListings = getListings;
}

// ListingsNewCtrl.$inject = ['Listing', '$state'];
// function ListingsNewCtrl(Listing, $state) {
//   const vm = this;
//   vm.listing = {};
//
//   function listingsCreate() {
//     Listing
//       .save({ listing: vm.listing })
//       .$promise
//       .then(() => $state.go('listingsIndex'));
//   }
//   vm.create = listingsCreate;
// }

ListingsShowCtrl.$inject = ['Listing', '$stateParams', '$state'];
function ListingsShowCtrl(Listing, $stateParams, $state) {
  const vm = this;
  vm.listing = Listing.get($stateParams);

  function listingsDelete() {
    vm.listing
      .$remove()
      .then(() => $state.go('listingsIndex'));
  }
  vm.delete = listingsDelete;
}

// ListingsEditCtrl.$inject = ['Listing', '$stateParams', '$state'];
// function ListingsEditCtrl(Listing, $stateParams, $state) {
//   const vm = this;
//   vm.listing = Listing.get($stateParams);
//
//   function listingsUpdate() {
//     Listing.update({ id: vm.listing.id, listing: vm.listing })
//       .$promise
//       .then(() => $state.go('listingsShow', $stateParams));
//   }
//   vm.update = listingsUpdate;
// }
