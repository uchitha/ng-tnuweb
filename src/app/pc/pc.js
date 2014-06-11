angular.module('ngBoilerplate.pc',[
	'ui.router',
	'placeholders',
	'ui.bootstrap'
])

.config(function config( $stateProvider ){
	$stateProvider.state('pc',{
		url: '/pc',
		views: {
			"main" : {
				controller: 'pcCtrl',
				templateUrl: 'pc/pc.tpl.html'
			}
		},
		data: { 
			pageTitle: 'Personal Computing'
		}
	});

})

.controller('pcCtrl',function pcCtrl( $scope ){
	
});
