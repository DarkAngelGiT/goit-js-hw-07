import { galleryItems } from './gallery-items.js';
// Change code below this line

/* -------------------------------------------------------------------------- */
/*                                     new                                    */
/* -------------------------------------------------------------------------- */

const galleryRef = document.querySelector('.gallery')
const galleryCreate = makeGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryCreate);

// створюємо елементи HTML 
function makeGallery(items) {
  return items
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}">
      </a>`;
  })
  .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

/* -------------------------------------------------------------------------- */
/*                                     Old                                    */
/* -------------------------------------------------------------------------- */
// // import SimpleLightbox from "simplelightbox";

// const galleryRef = document.querySelector(".gallery")

// // створення колекції елементів з масиву galleryItems
// galleryRef.innerHTML = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<a class="gallery__item" href="${original}">
//         <img class="gallery__image" src="${preview}" alt="${description}">
//       </a>`
//   })
//   .join("");

// const lightbox = new SimpleLightbox(".gallery a", {
//   captionPosition: 'bottom',
//   captionsData: 'alt',
//   captionDelay: 250,
// });

console.log(lightbox);