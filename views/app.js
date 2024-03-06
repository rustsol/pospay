document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('posForm');
    const qrImage = document.getElementById('qrCode');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const merchantName = document.getElementById('merchantName').value;
        const address = document.getElementById('address').value;
        const amount = document.getElementById('amount').value;

        
        fetch('/generate-qr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ merchantName, address, amount }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.qrCode) {
                
                qrImage.src = data.qrCode;
                qrImage.hidden = false; 
            } else {
                alert("Failed to generate QR code.  try again.");
            }
        })
        .catch(error => {
            console.error('Error generating QR code:', error);
            alert("Error generating QR code. Please check the console for more details.");
        });
    });
});
