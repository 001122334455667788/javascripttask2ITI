input=prompt("what is the value of a circle’s radius")
alert("Total area of circle is " + Math.PI*input*input);
input=prompt("what is value to calculate its square root")
alert("squar root of "+input+" is "+Math.sqrt(input))
input=prompt("Enter the angle")
let radians = input * (Math.PI / 180); 
document.write("cos "+input+"° is "+Math.cos(radians).toFixed(3))

