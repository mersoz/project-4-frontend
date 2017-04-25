angular
  .module('jobApp')
  .service('glassdoor', Glassdoor);

Glassdoor.$inject = ['$http', 'API_URL'];
function Glassdoor($http, API_URL) {
  const vm = this;

  function getJobTitles() {
    return $http
      .get(`${API_URL}/job_titles`)
      .then((response) => {
        return response.data.response.jobTitles;
      });
  }
  vm.getJobTitles = getJobTitles;

  function getCompanyInfo(company_name) {
    return $http
      .get(`${API_URL}/company_info`, { params: { q: company_name } })
      .then((response) => {
        return response;
      });
  }
  vm.getCompanyInfo = getCompanyInfo;
}
