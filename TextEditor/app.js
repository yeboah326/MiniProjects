document.getElementById("heading").innerHTML = localStorage["Title"] || "Just Write";
document.getElementById("content").innerHTML = localStorage["Text"] || "Saved every second";

setInterval(function)
{
    localStorage["Title"] = document.getElementById("heading").innerHTML;
    localStorage["Text"] = document.getElementById("content").innerHTML;
}
