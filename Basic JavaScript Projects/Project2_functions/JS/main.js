function assignColor() {
    var string = "Hello there, how are you today? This text is blue, can you believe it!";
    var str_color = string.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = str_color;
}

function functionTwo() {
    var line1 = "This is the first part of the sentence, ";
    line1 += "this is the second part, which as been concatenated!";
    document.getElementById("Concat").innerHTML = line1;
}