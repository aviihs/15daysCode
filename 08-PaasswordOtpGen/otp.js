function generateOTP() {
    let otp = "";
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    document.getElementById("otp").value = otp;
}

function copyOTP() {
    const otpField = document.getElementById("otp");
    otpField.select();
    document.execCommand("copy");
    alert("OTP copied to clipboard!");
}