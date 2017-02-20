function getTriangleArea(a, h) {
	var result =  a * h / 2;
	
	if (a <= 0 || h <= 0) {
	    console.log('Nieprawidłowe dane');
	} else return result;
}

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, -1);
var triangle3Area = getTriangleArea(0, 18);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
