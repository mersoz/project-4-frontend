angular
  .module('jobApp')
  .factory('Company', Company);

Company.$inject = ['$resource', 'API_URL'];
function Company($resource, API_URL) {
  return new $resource(`${API_URL}/companies/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
