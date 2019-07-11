class MovingObject {
    constructor(field, x, y, dx, dy, isDead) {
        this.field = field;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.isDead = isDead;
    }

    collides(x, y, objects) {
        let collidingObject = undefined;

        for (const obj of Object.values(objects)) {
            if (obj === this) continue;

            if (x === obj.x && y === obj.y) {
                return obj;
            }

            for (const proj of obj.projectiles) {
                if (x === proj.x && y === proj.y) {
                    return proj;
                }
            }
        }

        return collidingObject;
    }

    move(tanks) {
        const nextX = this.x + this.dx;
        const nextY = this.y + this.dy;

        const collidingObject = this.collides(nextX, nextY, tanks);
        if (collidingObject) {
            this.isDead = true;
            collidingObject.isDead = true;
        } else {
            if (this.field.isInside(nextX, nextY)) {
                this.x = nextX;
                this.y = nextY;
            } else {
                this._movedOutside(nextX, nextY);
            }
        }
    }

    _movedOutside(nextX, nextY) { }
}

module.exports = MovingObject;
