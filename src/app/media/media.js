angular.module('ngBoilerplate.media', [
	'ui.router',
	'placeholders',
	'ui.bootstrap'
])

.config (function ( $stateProvider){
	$stateProvider.state('media',{
		url:'/media',
		views: {
			"main" : {
				controller: 'mediaCtrl',
				templateUrl: 'media/media.tpl.html'
			}
		},
		data: { 
			pageTitle: 'Media Solutions'
		}

	});

})

.controller('mediaCtrl',function mediaCtrl($scope){

});