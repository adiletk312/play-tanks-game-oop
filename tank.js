const MovingObject = require('./moving_object.js');
const Projectile = require('./projectile.js');

class Tank extends MovingObject {
    constructor(socket, field, x, y, dx, dy) {
        super(field, x, y, dx, dy, false);

        this.socket = socket;
        this.projectiles = [];
    }

    turnUp() {
        this.dx = 0;
        this.dy = -1;
    }

    turnDown() {
        this.dx = 0;
        this.dy = 1;
    }

    turnLeft() {
        this.dx = -1;
        this.dy = 0;
    }

    turnRight() {
        this.dx = 1;
        this.dy = 0;
    }

    fire() {
        this.projectiles.push(
            new Projectile(
                this.field,
                this.x + this.dx,
                this.y + this.dy,
                this.dx,
                this.dy
            )
        );
    }

    update(tanks) {
        for (const projectile of this.projectiles) {
            console.log(`The projectile of player's tank ${this.socket.id} moved to ${projectile.x} ${projectile.y}.`);

            projectile.move(tanks);
        }
        this.projectiles = this.projectiles.filter(obj => {
            console.log(`The projectile of player's tank ${this.socket.id} was destroyed.`);

            return !obj.isDead
        });
    }

    serialize() {
        return {
            'x': this.x,
            'y': this.y,
            'dx': this.dx,
            'dy': this.dy,
            'isDead': this.isDead
        };
    }
}

module.exports = Tank;
