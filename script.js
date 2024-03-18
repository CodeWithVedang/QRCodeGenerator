function generateQR() {
    var inputUrl = document.getElementById("inputUrl").value;
    var outputDiv = document.getElementById("output");

    if (inputUrl.trim() === "") {
        outputDiv.innerHTML = "Please enter a valid URL";
        return;
    }

    outputDiv.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputUrl}" alt="QR Code">`;
}