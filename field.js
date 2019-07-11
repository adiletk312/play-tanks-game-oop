class Field {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    isInside(x, y) {
        return x >= 0 && x < this._width &&
               y >= 0 && y < this._height;
    }
}

module.exports = Field; 
 