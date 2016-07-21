'use strict';

describe('Directive: venue', function () {

  // load the directive's module
  beforeEach(module('andigitalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<venue></venue>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the venue directive');
  }));
});
