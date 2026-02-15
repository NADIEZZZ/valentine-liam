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
"me encanta como defiendes tu opinion",
"amo que le des sentido a las canciones de amor",
"amo tu piel, de verdad me encanta",
"me gusta que te dejes dar besos en las manos",
"eres capaz de todo lo que te propongas",
"me encanta que literalmente no exista una persona igual a ti",
"me encantan los apodos que te tengo",
"quien es mi nene precioso?",
"amo extrañarte todo el tiempo",
"me encanta ver peliculas contigo",
"no pongo emijis en todos pq me da pereza lmao",
"eres mi nene precioso",
"amo cuando te puedo tomar fotos en video llamada",
"me encanta que sea atrevido",
"Cómo me haces sentir cuado compartimos cosas que nos gustan❤️",
"Tu forma de abrazarme(me encanta sentir es extraño y escaso pero extremadamente comodo calor de tu cuerpo) 🤍",
"Tu personalidad tan extravagante que me enamora 🫶",
"Tu voz cuando me hablas 🎶",
"Cómo me miras con tus ojos preciosos (lo que mas amo en parte lmao)🥹",
"Tu corazón tan bonito(que pronto me comere) 💕",
"me encanta tu cara preciosa(cada que puedo le saco foto)",
"Tu risa contagiosa(tambien de mis cosas favoritas pq te empiezas a reir de la nada) 😆",
"Tu manera de amar tan apasionada e intensa(propiamente unico de ti)💞",
"Simplemente tú ✨"

  ];

  // BOTÓN NO HUYE

  noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

  });

  // BOTÓN SÍ

  yesBtn.addEventListener("click", function() {

    loveList.style.display = "block";

    loveList.innerHTML = "";

    thingsILove.forEach((text, index) => {

      setTimeout(() => {

        const li = document.createElement("li");

        li.textContent = text;

        loveList.appendChild(li);

      }, index * 300);

    });

    if(imagenFinal){

      imagenFinal.style.display = "block";

    }

  });

});
