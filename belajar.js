console.log("1")

function angka2(callback) {
    setTimeout(function () {
        console.log("2")
        callback()
    }, 1000);
}
function angka3() {
    console.log("3")

}

angka2(angka3)