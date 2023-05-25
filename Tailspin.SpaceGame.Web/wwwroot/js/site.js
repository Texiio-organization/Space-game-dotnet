// Import necessary modules and dependencies
const assert = require('assert');
const { simulateSpaceshipMovement } = require('./tailspin-game');

// Test case: Verify spaceship movement
describe('Spaceship Movement', function () {
  it('should update the spaceship position correctly', function () {
    // Set up the initial spaceship position
    const spaceship = { x: 0, y: 0 };

    // Simulate spaceship movement
    simulateSpaceshipMovement(spaceship, 'right', 10);

    // Verify the final spaceship position
    assert.strictEqual(spaceship.x, 10);
    assert.strictEqual(spaceship.y, 0);
  });
});

