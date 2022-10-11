import { galleryItems } from './gallery-items.js';
// Change code below this line

/* -------------------------------------------------------------------------- */
/*                                     new                                    */
/* -------------------------------------------------------------------------- */

const galleryRef = document.querySelector('.gallery')
const galleryCreate = makeGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryCreate);
galleryRef.addEventListener('click', galleryModal);

// створюємо елементи HTML 
function makeGallery(galleryItems) {
  return galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
      </a>
    </div>`;
  })
  .join("");
}

// створюємо елементи галереї
const instance = basicLightbox.create(`<img src="">`, {
  onShow: () => { document.addEventListener("keydown", onEsc) }, // опція-функція basicLightbox, додаємо подію при появі модалки, для кнопки 
  onClose: () => { document.removeEventListener("keydown", onEsc) }// опція-функція basicLightbox, прибираємо подію після натискання Escape
});

// 
function galleryModal(event){
  event.preventDefault(); // забороняємо відкривати посилання/фото в новому вікні
  if (event.target.nodeName !== "IMG") return; // якщо клік не на картинці нічого не робимо
  
  // при відкритті модалки атрибут src всім елементам img змінюємо на source
  instance.element().querySelector("img").src = event.target.dataset.source; 
  
  instance.show(); // викликаємо вбудовану функцію для відображення модалки
};

// функція для події натискання на кнопку
function onEsc(event) {
     if (event.code === "Escape") {
      instance.close();
    }
  }

/* -------------------------------------------------------------------------- */
/*                                     old                                    */
/* -------------------------------------------------------------------------- */

// const galleryRef = document.querySelector(".gallery")

// // створення колекції елементів з масиву galleryItems
// galleryRef.innerHTML = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<div class="gallery__item">
//       <a class="gallery__link" href="${original}">
//         <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
//       </a>
//     </div>`
//   })
//   .join("");

// // функція створення модального вікна з допомогою бібліотеки basicLightbox
// // function galleryModal(event){
// //   event.preventDefault(); // забороняємо відкривати посилання/фото в новому вікні
// //   if (event.target.nodeName !== "IMG") return; // якщо клік не на картинці нічого не робимо

// //   const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`); // створюємо модальне вікно 

// //   instance.show(); // викликаємо вбудовану функцію для відображення модалки
// // };

// // ============= функція з врахуванням кнопки виходу Escape

// function galleryModal(event){
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") return;

//   const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
//     onShow: () => { window.addEventListener("keydown", onEsc) }, // опція-функція basicLightbox, додаємо подію при появі модалки, для кнопки 
//     onClose: () => { window.removeEventListener("keydown", onEsc) }// опція-функція basicLightbox, прибираємо подію після натискання Escape
//   });
//   // функція перевірки чи дійсно натиснула кнопка, повертає закриття модалки
//   function onEsc(event) {
//      if (event.code === "Escape") {
//       instance.close();//
//     }
//   }
//   instance.show();
// };

// galleryRef.addEventListener("click", galleryModal);

// // console.log();