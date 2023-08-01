import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const createGalleryCards = addGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend',createGalleryCards);

function addGalleryCards(cards) {
    return cards.reduce((acc, {preview, original, description}) => 
      acc +
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `,
         ''
    )
 };


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250',
 });

