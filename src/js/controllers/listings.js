angular
  .module('jobApp')
  .controller('ListingsIndexCtrl', ListingsIndexCtrl);
  // .controller('ListingsShowCtrl', ListingsShowCtrl);
  // .controller('ListingsNewCtrl', ListingsNewCtrl);
  // .controller('ListingsEditCtrl', ListingsEditCtrl);

ListingsIndexCtrl.$inject = ['Listing', '$rootScope', 'User'];
function ListingsIndexCtrl(Listing, $rootScope, User) {
  const vm = this;
  vm.all = Listing.query();
  vm.currentUser = $rootScope.currentUser;

  function updateResources() {
    User
      .update({ id: vm.currentUser.id });
  }
  // NOT WORKING ATM

  function toggleFavorites(listing) {
    console.log(vm.currentUser.listings_favorited.includes(listing));
    const index = vm.currentUser.listings_favorited.indexOf(listing);
    if (index > -1) {
      vm.currentUser.listings_favorited.splice(index, 1);
    } else {
      vm.currentUser.listings_favorited.push(listing);
    }
    updateResources();
    console.log(listing.id);
    console.log(vm);
    console.log(vm.currentUser);
    console.log(vm.currentUser.listings_favorited);
    console.log(vm.currentUser.listings_favorited.includes(listing));

  }
  vm.toggleFavorites = toggleFavorites;

  function isFavorited(listing) {
    return vm.currentUser.listings_favorited.includes(listing);
  }
  vm.isFavorited = isFavorited;
}
//
// ListingsShowCtrl.$inject = ['Listing', '$stateParams', '$state'];
// function ListingsShowCtrl(Listing, $stateParams, $state) {
//   const vm = this;
//   vm.listing = Listing.get($stateParams);
//
//   function listingsDelete() {
//     vm.listing
//       .$remove()
//       .then(() => $state.go('listingsIndex'));
//   }
//   vm.delete = listingsDelete;
// }

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
