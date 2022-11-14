import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

// making gallery elements
galleryItems.forEach((item) => {
  const imageBox = document.createElement("div");
  imageBox.classList.add("gallery__item");

  const imageLink = document.createElement("a");
  imageLink.classList.add("gallery__link");
  imageLink.setAttribute("href", item.original);

  const imagePhoto = document.createElement("img");
  imagePhoto.classList.add("gallery__image");
  imagePhoto.src = item.preview;
  imagePhoto.setAttribute("data-source", item.original);
  imagePhoto.setAttribute("alt", item.description);

  imageLink.append(imagePhoto);
  imageBox.append(imageLink);
  gallery.append(imageBox);
});

// OPENING A LIGHTBOX INSTANCE
let instance = basicLightbox.create(`
    <img src="" alt="">
`);

// handler function of gallery item
const imgHandler = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  instance = basicLightbox.create(`
    <img src=${event.target.getAttribute(
      "data-source"
    )} alt=${event.target.getAttribute("alt")} >
    `);

  instance.show();
};

// click listener galley item
gallery.addEventListener("click", imgHandler);

// CLOSING A LIGHTBOX INSTANCE
gallery.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Escape") {
    instance.close();
  }
});
