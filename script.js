function generateQR() {
    var inputUrl = document.getElementById("inputUrl").value;
    var outputDiv = document.getElementById("output");

    if (inputUrl.trim() === "") {
        outputDiv.innerHTML = "Please enter a valid URL";
        return;
    }

    var qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputUrl}`;
    outputDiv.innerHTML = `
        <img src="${qrCodeUrl}" alt="QR Code">
        <br>
        <button id="downloadBtn">Download QR Code</button>
    `;

    // Add event listener to the download button
    document.getElementById("downloadBtn").addEventListener("click", function() {
        downloadQR(qrCodeUrl);
    });
}

function downloadQR(qrCodeUrl) {
    fetch(qrCodeUrl)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            link.click();
            URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
}