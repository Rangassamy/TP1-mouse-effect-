// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

//--------------------------------------------------------------------------

const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});

// window.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";
// });
// window.addEventListener("mousemove", (e) => {
//   mouse1.style.left = e.pageX + "px";
//   mouse1.style.top = e.pageY + "px";
// });
// window.addEventListener("mousemove", (e) => {
//   mouse2.style.left = e.pageX + "px";
//   mouse2.style.top = e.pageY + "px";
// });
