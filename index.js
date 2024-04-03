// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

//--------------------------------------------------------------------------

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

window.addEventListener("mousemove", (e) => {
  box1.style.left = e.pageX + "px";
  box1.style.top = e.pageY + "px";
});
window.addEventListener("mousemove", (e) => {
  box2.style.left = e.pageX + "px";
  box2.style.top = e.pageY + "px";
});
window.addEventListener("mousemove", (e) => {
  box3.style.left = e.pageX + "px";
  box3.style.top = e.pageY + "px";
});
