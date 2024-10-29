window.onload = function() {

    const now = new Date();
    const hour = now.getHours();
    let greetingMessage;


    switch (true) {
        case (hour >= 5 && hour < 12):
            greetingMessage = "Good Morning! Welcome to WaifuSpot!";
            break;
        case (hour >= 12 && hour < 18):
            greetingMessage = "Good Afternoon! Welcome to WaifuSpot!";
            break;
        case (hour >= 18 && hour < 22):
            greetingMessage = "Good Evening! Welcome to WaifuSpot!";
            break;
        default:
            greetingMessage = "Good Night! Welcome to WaifuSpot!";
            break;
    }

    const greetingModal = document.createElement("div");
    greetingModal.style.position = "fixed";
    greetingModal.style.top = "0";
    greetingModal.style.left = "0";
    greetingModal.style.width = "100%";
    greetingModal.style.height = "100%";
    greetingModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    greetingModal.style.color = "white";
    greetingModal.style.display = "flex";
    greetingModal.style.alignItems = "center";
    greetingModal.style.justifyContent = "center";
    greetingModal.style.zIndex = "9999";

    const greetingContent = document.createElement("div");
    greetingContent.style.padding = "20px";
    greetingContent.style.textAlign = "center";
    greetingContent.style.backgroundColor = "#1a1a1a";
    greetingContent.style.borderRadius = "8px";
    greetingContent.innerHTML = `<h1>${greetingMessage}</h1>`;


    const closeButton = document.createElement("button");
    closeButton.innerText = "Enter Site";
    closeButton.style.marginTop = "20px";
    closeButton.style.padding = "10px 20px";
    closeButton.style.backgroundColor = "#fac550";
    closeButton.style.border = "none";
    closeButton.style.color = "black";
    closeButton.style.cursor = "pointer";
    closeButton.style.borderRadius = "5px";
    closeButton.style.fontWeight = "bold";

    closeButton.onclick = function() {
        document.body.removeChild(greetingModal);
    };

    greetingContent.appendChild(closeButton);
    greetingModal.appendChild(greetingContent);
    document.body.appendChild(greetingModal);
};
