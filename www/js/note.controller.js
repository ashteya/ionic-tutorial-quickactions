(function(){
	angular.module('starter').controller('NoteController', ['$scope', '$rootScope', '$ionicModal', NoteController]);

	function NoteController($scope, $rootScope, $ionicModal) {
		var vm = this;
		vm.notes = [];
	
		// Initialize the modal view.
		$ionicModal.fromTemplateUrl('new-note.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			vm.modal = modal;
		});
		
		vm.showNewNoteModal = function() {
			vm.note = {};
			vm.modal.show();			
		};
	
		vm.saveNote = function() {
			vm.notes.push(vm.note);
			vm.modal.hide();
		};
				
		$scope.$on('$destroy', function() {
			vm.modal.remove(); 
		});
		
		$rootScope.$on('newNoteQuickAction', function() {
			vm.showNewNoteModal();
		});
	
		return vm;
	}
})();