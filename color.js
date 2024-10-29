document.addEventListener("DOMContentLoaded", () => {
    const changeColorButton = document.createElement("button");
    changeColorButton.innerText = "Change Color";
    changeColorButton.className = "btn btn-primary"; 
    changeColorButton.style.position = "fixed";
    changeColorButton.style.bottom = "20px";
    changeColorButton.style.right = "20px";
    changeColorButton.style.zIndex = "1000";

    document.body.appendChild(changeColorButton);

    changeColorButton.setAttribute("title", "Click to change background color");

    let lastBackgroundColor = "";
    let audio = new Audio('pawan.mp3'); 

    changeColorButton.addEventListener("click", () => {
        let newBackgroundColor;

        do {
            newBackgroundColor = getRandomColor();
        } while (newBackgroundColor === lastBackgroundColor);

        document.body.style.backgroundColor = newBackgroundColor;
        lastBackgroundColor = newBackgroundColor;

       
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0; 
        }
    });
});

const colors = [
    "#000000",
    "#404040",
    "#778899",
    "#BC8F8F",
];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
