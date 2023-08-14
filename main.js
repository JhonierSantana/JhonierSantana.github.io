const carousel = document.querySelector('.carousel');
const contentItems = carousel.querySelectorAll('.content');
let currentIndex = 0;

function showContent(index) {
  contentItems.forEach((item, i) => {
    if (i === index) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % contentItems.length;
  showContent(currentIndex);
}

showContent(currentIndex);
setInterval(nextSlide, 3000);

const technologies = document.querySelectorAll('.technology');

function showTechnologies(index) {
  if (index < technologies.length) {
    technologies[index].style.opacity = '1';
    setTimeout(() => {
      showTechnologies(index + 1);
    }, 700);
  } else {
    setTimeout(() => {
      hideTechnologies(0);
    }, 1000);
  }
}

function hideTechnologies(index) {
  if (index < technologies.length) {
    technologies[index].style.opacity = '0';
    setTimeout(() => {
      hideTechnologies(index + 1);
    }, 200);
  } else {
    setTimeout(() => {
      showTechnologies(0);
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showTechnologies(0);
});


