angular
  .module('jobApp')
  .controller('GlassdoorCtrl', GlassdoorCtrl);

  GlassdoorCtrl.$inject = ['glassdoor'];
  function GlassdoorCtrl(glassdoor) {
    const vm = this;
    vm.jobTitles = [];

    function getJobTitles() {
      glassdoor.getJobTitles()
        .then((titles) => {
          vm.jobTitles = titles;
        });
    }
    getJobTitles();

    function getCompanyInfo(info) {
      glassdoor.getCompanyInfo(info)
        .then((job_information) => {
          console.log(job_information);
        });
    }
    getCompanyInfo('onefinestay');
  }
