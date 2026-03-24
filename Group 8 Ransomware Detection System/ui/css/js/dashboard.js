const statusCard = document.getElementById("statusCard");

if (killCount > 0) {

    document.getElementById("systemStatus").innerText = "THREAT DETECTED";

    // Change card color from green to yellow
    statusCard.classList.remove("safe");
    statusCard.classList.add("warning");

    document.getElementById("alertBox").classList.remove("d-none");

} else {

    document.getElementById("systemStatus").innerText = "SAFE";

    statusCard.classList.remove("warning");
    statusCard.classList.add("safe");
}
