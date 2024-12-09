document.write("<h1>String</h1>")
document.write("<hr>")
let number=[];
do{
    input=prompt("enter numbers")
    number.push(input)
}while(number.length<5)
document.write(`<p><strong style="color:red">u've entered the values of</strong> ${number}</p>`)
document.write(`<p><strong style="color:red">ur values after being sorted descending</strong> ${number.sort((a,b) => a-b)}</p>`)
document.write(`<p><strong style="color:red">ur values after being sorted ascending</strong> ${number.sort((a,b) => b-a)}</p>`)
