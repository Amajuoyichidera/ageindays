// challenge 1: your age in days

function ageinDays() {
    var birthyear = prompt("What year were you born..good friend");
    var ageinDayss = (2022 - birthyear) * 365;
    var h1 = document.createElement("h1");
    var textanswer = document.createTextNode("you are" + ageinDayss  +  "days old");
    h1.setAttribute("id", "ageinDays");
    h1.appendChild(textanswer);
    document.getElementById("flex-box-result").appendChild(h1);
    // console.log(ageinDayss);
}
function reset() {
    document.getElementById("ageinDays").remove();
}
 