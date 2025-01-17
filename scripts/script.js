// Scripts

const projectList = document.querySelector('.project-list');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const itemWidth = document.querySelector('.project-item').offsetWidth + 20; // Add gap width

nextBtn.addEventListener('click', () => {
    projectList.scrollBy({ left: itemWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    projectList.scrollBy({ left: -itemWidth, behavior: 'smooth' });
});

