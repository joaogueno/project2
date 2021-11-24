function changeh1(i) {
    let h1 = document.getElementsByTagName("h1")[0];
    console.log(" Log: O h1 foi modificado " + i)
    h1.innerText = i.value;
}

function hideH1() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.display = "none";

}

function showH1() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.display = "";

}
