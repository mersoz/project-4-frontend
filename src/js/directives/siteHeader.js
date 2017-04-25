angular
.module('jobApp')
.directive('siteHeader', siteHeader);

function siteHeader() {
    return {
        restrict: 'E',
        template: '<p class="siteheader left"><i class="fa fa-arrow-left" aria-hidden="true"></i> {{back}}</p>',
        scope: {
            back: '@back',
            icons: '@icons'
        },
        link: function(scope, element, attrs) {
            $(element[0]).on('click', function() {
                window.history.back();
                scope.$apply();
            });
        }
    };
}
