document.addEventListener('DOMContentLoaded', () => {
  console.log('js is processed');
})

// Close other details that are not selected but open
const details = document.querySelectorAll('details');

details.forEach((targetDetail) => {
  targetDetail.addEventListener('click', () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute('open');
      }
    });
  });
});

// Open and close the modal
const modal_more_information = document.getElementById('model-more-information');
const button_more_information = document.getElementById('button-more-information');
const button_more_information_close = document.getElementById('button-more-information-close');

button_more_information.onclick = () => {
  modal_more_information.style.display = 'flex'
  button_more_information_close.focus()
}

button_more_information_close.onclick = () => {
  modal_more_information.style.display = 'none'
  button_more_information.focus()
}