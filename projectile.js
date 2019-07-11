const MovingObject = require('./moving_object.js');

class Projectile extends MovingObject {
    constructor(field, x, y, dx, dy) {
        super(field, x, y, dx, dy, !field.isInside(x, y))
    }

    _movedOutside(nextX, nextY) { 
        this.isDead = true;
    }
}

module.exports = Projectile;
