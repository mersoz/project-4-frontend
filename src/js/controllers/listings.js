angular
  .module('jobApp')
  .controller('ListingsIndexCtrl', ListingsIndexCtrl);

ListingsIndexCtrl.$inject = ['Listing', '$rootScope', 'User'];
function ListingsIndexCtrl(Listing, $rootScope, User) {
  const vm = this;
  vm.all = Listing.query();
  vm.currentUser = $rootScope.currentUser;

  function usersUpdate() {
    User
      .update({ id: vm.currentUser.id, user: vm.currentUser });
  }

  function toggleFavorites(listing) {
    const index = vm.currentUser.listings_favorited_ids.indexOf(listing.id);
    if (index > -1) {
      vm.currentUser.listings_favorited.splice(index, 1);
      vm.currentUser.listings_favorited_ids.splice(index, 1);
    } else {
      vm.currentUser.listings_favorited.push(listing);
      vm.currentUser.listings_favorited_ids.push(listing.id);
    }
    usersUpdate();
  }
  vm.toggleFavorites = toggleFavorites;

  function isFavorited(listing) {
    return vm.currentUser.listings_favorited_ids.includes(listing.id);
  }
  vm.isFavorited = isFavorited;
}
