function print(word, number){
    console.log(word, number)
    
}


function square(edge){

    var area = edge*edge

    print("Area of square is : ", area)
}

function circle(radius){
var circle_area = 3.14*radius*radius
print("Area of circle is : ", circle_area)


}

function rectangle(length, breadth){

    var rectangle_area = length*breadth
    print("Area of rectangle is : ", rectangle_area)
}


Object.setPrototypeOf(square,print)
Object.setPrototypeOf(circle,print)
Object.setPrototypeOf(rectangle,print)

square(20)
circle(65)
rectangle(10,87)


