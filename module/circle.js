function Circle(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

}

Circle.prototype.isOverlapped = function (circle) {
    var distanceOO = Math.sqrt((Math.pow(this.x - circle.x,2 ) + Math.pow(this.y - circle.y,2)));
    if (this.radius - circle.radius < distanceOO && this.radius + circle.radius > distanceOO){
        return -1;
    }else if(distanceOO == this.radius - circle.radius || distanceOO == this.radius + circle.radius){
        return 0;
    }else{
        return 1;
    }
}

module.exports = Circle;