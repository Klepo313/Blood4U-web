
function openPage(element){
    console.log("Element: " + element)
    sessionStorage.setItem("element", element)
    location.href = "Ustanova.html"
}