import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.btn-load-more');

const galleryItem = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  const markup = images
    .map(img => {
      return `<li class="gallery-item">
  <a class="gallery-link" href="${img.largeImageURL}">
    <img
      class="gallery-image"
      src="${img.webformatURL}"
      alt="${img.tags}"
      width='360' 
      height='200'
    />
  </a>
  <div class='info'>
  <p class='info-item'><b>Likes</b>${img.likes}</p>
  <p class='info-item'><b>Views</b>${img.views}</p>
  <p class='info-item'><b>Comments</b>${img.comments}</p>
  <p class='info-item'><b>Downloads</b>${img.downloads}</p>
  </div>
</li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  galleryItem.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  loader.classList.remove('hidden');
};

export const hideLoader = () => {
  loader.classList.add('hidden');
};

export const showLoadMoreButton = () => {
  loadMoreBtn.classList.remove('is-hidden');
};

export const hideLoadMoreButton = () => {
  loadMoreBtn.classList.add('is-hidden');
};
