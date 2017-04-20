angular
  .module('jobApp')
  .service('glassdoor', Glassdoor);

Glassdoor.$inject = ['$http', 'API_URL'];
function Glassdoor($http, API_URL) {
  const vm = this;

  function getListings() {
    return $http
      .get(`${API_URL}/job_stats`)
      .then((response) => {
        // console.log(response.data.response.states);
        // .each((state) => console.log(state));
        $.each(response.data.response.states, function(index, value) {
            console.log(value.name);
        });
      });
  }
  vm.getListings = getListings;
}
