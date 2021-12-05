const toggleBtn = document.querySelector('.toggle');

const slider = document.querySelector('.slider-bar');
const pageviewers = document.querySelector('.pageviewers-amount');
const price = document.querySelector('.price-bar');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  getbilling();
});

function getPrice(value) {
  if (value < 50) {
    return 8;
  } else if ((value >= 50) & (value < 100)) {
    return 12;
  } else if ((value >= 100) & (value < 500)) {
    return 16;
  } else if ((value >= 500) & (value < 1000)) {
    return 24;
  } else if ((value = 1000)) {
    return 36;
  }
}

function getbilling() {
  if (toggleBtn.classList.contains('active')) {
    price.innerHTML = `<span class="price">$${
      getPrice(parseInt(slider.value)) * 0.25 * 12
    }.00</span>/year`;
  } else {
    price.innerHTML = `<span class="price">$${getPrice(
      parseInt(slider.value)
    )}.00</span>/month`;
  }
}

slider.addEventListener('mouseup', () => {
  //   slider.style.setProperty('--sidebar', `${slider.value}%`);
  slider.style.background = `
        linear-gradient(
            to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${parseInt(slider.value) / 10}%,
            hsl(224, 65%, 95%) ${parseInt(slider.value) / 10}%,
            hsl(224, 65%, 95%) 100%
          )
        `;
  if (slider.value < 1000) {
    pageviewers.innerText = `${slider.value}k`;
  } else {
    pageviewers.innerText = `1m`;
  }
  getbilling();
});

slider.addEventListener('touchend', () => {
  //   slider.style.setProperty('--sidebar', `${slider.value}%`);
  slider.style.background = `
        linear-gradient(
            to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${parseInt(slider.value) / 10}%,
            hsl(224, 65%, 95%) ${parseInt(slider.value) / 10}%,
            hsl(224, 65%, 95%) 100%
          )
        `;
  if (slider.value < 1000) {
    pageviewers.innerText = `${slider.value}k`;
  } else {
    pageviewers.innerText = `1m`;
  }
  getbilling();
});
