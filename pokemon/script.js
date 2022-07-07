let gallery_btn = document.getElementById("gallery_btn");
let gallery_section = document.getElementById("gallery_section");
gallery_btn.onclick = function () {
  console.log(gallery_section.style.display);
  console.log(typeof gallery_section.style.display);
  if (gallery_section.style.display == "") {
    let Confirm = confirm("Do you want to see pokemons of ASH?");
    if (Confirm) {
      gallery_section.style.display = "block";
      gallery_btn.innerHTML = "Hide Gallery";
    }
  } else {
    let Confirm = confirm("Are You sure you want to hide the gallery?");
    if (Confirm) {
      gallery_section.style.display = "";
      gallery_btn.innerHTML = "Click Here to Look Ash's Pokemon";
    }
  }
};
