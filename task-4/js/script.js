//Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width*height) using with argument.
let Circle = document.getElementById("circle");
let Rectangle = document.getElementById("rectangle");

class Shape {

    circleArea(radius){
        let circle = 3.14 * radius * radius;

        Circle.innerHTML = (`area of circle is : ${circle}`);
    }    

    rectangle(width, height){
        let rectangle = width * height;

        Rectangle.innerHTML = (`area of Rectangle is : ${rectangle}`);
    }    

}

const area = new Shape();
area.circleArea(5);
area.rectangle(5, 6)