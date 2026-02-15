
document.addEventListener("DOMContentLoaded", function() {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const loveList = document.getElementById("loveList");
  const imagenFinal = document.getElementById("imagenFinal");

  const thingsILove = [

    "Tu sonrisa hermosa y preciosa mi nene precioso",
    "me encanta cuando me dedicas videos",
    "me encantan las cartas que me haces",
    "me encanta tus gustos musicales",
    "me encanta tu humor y como me haces reir",
    "eres mi persona favorita",
    "tu pierna es mia jejeje",
    "me encantan tus gatos",
    "me encanta como juegas tan bien cualquier juego de peleas",
    "Simplemente tú ✨"

  ];

  noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

  });

  yesBtn.addEventListener("click", function() {

    loveList.style.display = "block";

    loveList.innerHTML = "";

    thingsILove.forEach((item, index) => {

      setTimeout(() => {

        const li = document.createElement("li");

        li.textContent = item;

        loveList.appendChild(li);

      }, index * 400);

    });

    imagenFinal.style.display = "block";

  });

});
