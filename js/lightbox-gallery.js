import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");

const createGalleryItem = ({ preview, original, description }) => {
  const item = `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
        <span class="gallery__icon">
          <i class="material-icons">zoom_out_map</i>
        </span>
      </a>
    </li>
  `;
  return item;
};

const createGalleryItems = arr => {
  return arr.map(item => createGalleryItem(item)).join(" ");
};

gallery.insertAdjacentHTML("beforeend", createGalleryItems(galleryItems));

gallery.addEventListener("click", e => {
  const lightboxImg = document.querySelector(".lightbox___image");

  if (e.target.dataset.source) {
    event.preventDefault();

    lightboxImg.src = e.target.dataset.source;
    lightboxImg.alt = e.target.alt;
    lightbox.classList.add("is-open");
  }
});

lightbox.addEventListener("click", e => {
  if (
    e.target.className !== "lightbox___image" ||
    e.target.dataset.action === "close-lightbox"
  ) {
    lightbox.classList.remove("is-open");
  }
});

document.addEventListener("keyup", e => {
  if (e.key === "Escape") {
    lightbox.classList.remove("is-open");
  }
});
