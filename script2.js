function get_largest_length(){
    let text ="this is a javascript string demo";
    let newstr=text.split(" ");
    newstr.sort((a,b)=>b.length-a.length)
    console.log(newstr[0])
}
get_largest_length()
