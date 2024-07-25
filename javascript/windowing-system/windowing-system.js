// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight
}

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}

export function changeWindow(programWindow) {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}
export class ProgramWindow {
    constructor() {
        this.screenSize = {
            width: 800,
            height: 600,
        };

        this.size = new Size();
        this.position = new Position();
    }

    resize(size) {
        const { width: maxWidth, height: maxHeight } = this.screenSize;

        this.size.width = Math.max(1, Math.min(size.width, maxWidth - this.position.x));
        this.size.height = Math.max(1, Math.min(size.height, maxHeight - this.position.y));
    }

    move(position) {
        const { width: maxWidth, height: maxHeight } = this.screenSize;

        this.position.x = Math.max(0, Math.min(position.x, maxWidth - this.size.width));
        this.position.y = Math.max(0, Math.min(position.y, maxHeight - this.size.height));
    }
}