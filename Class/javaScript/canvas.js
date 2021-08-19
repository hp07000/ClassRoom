var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
MAX_WIDTH = 800;
MAX_HEIGHT = 600;

ctx.moveTo(500, 400);
let point1 = hitAWall(500, 400, "left", "bottom")
let i = 0

let timer;
let isStarted;

function restart() {
    if (!isStarted) {
        isStarted = true;
        timer = setInterval(() => {
            ctx.beginPath()
            point1 = hitAWall(point1.x, point1.y, point1.d1, point1.d2);
            ctx.stroke();
        }, 500);
    } else {
        isStarted = false;
        clearInterval(timer);
    }
}

function hitAWall(x, y, d1, d2) {
    
    let a = x;
    let b = y;

    

    if (d1 == "left" && d2 == "top") {
        while (x < MAX_WIDTH && y > 0) {
            x = x + 1
            y = y - 1
            ctx.strokeStyle = '#' + Math.random().toString(16).slice(2, 8);
            ctx.lineTo(x, y)
        }

    } if (d1 == "right" && d2 === 'bottom') {
        while (x > 0 && y < MAX_HEIGHT) {
            x = x - 1
            y = y + 1
            ctx.strokeStyle = '#' + Math.random().toString(16).slice(2, 8);
            ctx.lineTo(x, y)
        }

    } if (d1 == "left" && d2 === "bottom") {
        while (x < MAX_WIDTH && y < MAX_HEIGHT) {
            x = x + 1
            y = y + 1
            ctx.strokeStyle = '#' + Math.random().toString(16).slice(2, 8);
            ctx.lineTo(x, y)
        }

    } if (d1 == "right" && d2 == "top") {
        while (x > 0 && y > 0) {
            x = x - 1
            y = y - 1
            ctx.strokeStyle = '#' + Math.random().toString(16).slice(2, 8);
            ctx.lineTo(x, y)
        }
    }

    d1 = calculateDirection(() => (x >= MAX_WIDTH), d1, "left", "right");
    d2 = calculateDirection(() => (y >= MAX_HEIGHT), d2, "top", "bottom");
    d1 = calculateDirection(() => x <= 0, d1, "left", "right");
    d2 = calculateDirection(() => y <= 0, d2, "top", "bottom");

    ctx.lineTo(x, y)
    console.log(x, y, d1, d2)
    return { x, y, d1, d2 }
}

function calculateDirection(validateFn, currentDirection, minValue, maxValue) {
    if (validateFn()) {
        if (currentDirection === minValue) {
            return maxValue;
        }else {
            return minValue
        }
    }
    return currentDirection
}