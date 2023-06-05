const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const imageSrc = thumbnail.getAttribute('src');
        const altText = thumbnail.getAttribute('alt');

        modalImage.setAttribute('src', imageSrc);
        modalImage.setAttribute('alt', altText);
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});