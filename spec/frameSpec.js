'use strict';

describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('Should be constructed with a frame variable = []', function() {
    expect(frame.scores).toEqual([]);
  });

  it('Should be able to add points to scores with add method', function () {
    frame.add(8);
    expect(frame.scores).toEqual([8]);
  });
});