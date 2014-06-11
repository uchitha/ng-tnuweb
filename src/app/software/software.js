angular.module('ngBoilerplate.software',[
	'ui.router',
	'placeholders',
	'ui.bootstrap'
])

.config(function config( $stateProvider ){
	$stateProvider.state('software',{
		url: '/software',
		views: {
			"main" : {
				controller: 'softwareCtrl',
				templateUrl: 'software/software.tpl.html'
			}
		},
		data: { 
			pageTitle: 'Software Solutions'
		}
	});

})

.controller('softwareCtrl',function softwareCtrl( $scope ){
	
});
