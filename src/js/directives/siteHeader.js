angular
.module('jobApp')
.directive('siteHeader', siteHeader);

function siteHeader() {
    return {
        restrict: 'E',
        template: '<p class="siteheader left"><i class="fa fa-arrow-left" aria-hidden="true"></i> {{back}}</p><p class="siteheader right">{{forward}} <i class="fa fa-arrow-right" aria-hidden="true"></i></p></p>',
        scope: {
            back: '@back',
            forward: '@forward',
            icons: '@icons'
        },
        link: function(scope, element, attrs) {
            $(element[0]).on('click', function() {
                history.back();
                scope.$apply();
            });
            $(element[1]).on('click', function() {
                history.forward();
                scope.$apply();
            });
        }
    };
}
