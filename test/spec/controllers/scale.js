'use strict';

describe('Controller: ScaleCtrl', function() {

    // load the controller's module
    beforeEach(module('kordingApp'));

    var ScaleCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ScaleCtrl = $controller('ScaleCtrl', {
            $scope: scope
                // place here mocked dependencies
        });
    }));

    xit('should attach a list of awesomeThings to the scope', function() {
        expect(ScaleCtrl.awesomeThings.length).toBe(3);
    });

    xit('should watch the currentScale scope property', function($scope) {
      expect(!!$scope.currentScale).toBe(true);
    });

    it('should have method genVexScale that returns Data URL of rendered Vex Flow Scale', function() {
        var vexUrl = ScaleCtrl.genVexScale('C', '', 'major');
        expect(vexUrl).toStartWith('data:image/png');
    });
});
