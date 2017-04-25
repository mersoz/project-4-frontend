angular
  .module('jobApp')
  .controller('CompaniesIndexCtrl', CompaniesIndexCtrl)
  .controller('CompaniesShowCtrl', CompaniesShowCtrl);

CompaniesIndexCtrl.$inject = ['Company'];
function CompaniesIndexCtrl(Company) {
  const vm = this;
  vm.all = Company.query();
}

CompaniesShowCtrl.$inject = ['Company', '$stateParams', '$state', 'glassdoor'];
function CompaniesShowCtrl(Company, $stateParams, $state, glassdoor) {
  const vm = this;
  Company.get($stateParams)
    .$promise
    .then((company) => {
      vm.company = company;
      getCompanyInfo();
    });

  function getCompanyInfo() {
    console.log(vm.company.name);
    glassdoor.getCompanyInfo(vm.company.name)
      .then((company_info) => {
        vm.company.info = company_info.data.response.employers[0];
        // vm.company.industry = company_info.data.response.employers[0].sectorName;
        // vm.company.numberOfRatings = company_info.data.response.employers[0].numberOfRatings;
        // vm.company.logo = company_info.data.response.employers[0].squareLogo;


        // "overallRating":"3.6",
        // "ratingDescription":"Satisfied",
        // "cultureAndValuesRating":"3.8",
        // "seniorLeadershipRating":"3.4",
        // "compensationAndBenefitsRating":"2.9",
        // "careerOpportunitiesRating":"3.3",
        // "workLifeBalanceRating":"3.3",
        //
        // "featuredReview":
        // {"attributionURL":"http://www.glassdoor.com/Reviews/Employee-Review-onefinestay-RVW13853383.htm","id":13853383,"currentJob":false,"reviewDateTime":"2017-02-20 00:53:33.373",
        // "jobTitle":"Employee","location":"Islington, England (UK)","headline":"team leader","pros":"Great company , friendly and fast-paced environment","cons":"Due to rapid growth there are too many layers of management","overall":5,"overallNumeric":5},
        //
        // "ceo":{"name":"Evan Frank","title":"CEO","numberOfRatings":8,"pctApprove":45,"pctDisapprove":55}}


        console.log(company_info);
      });
  }
}
