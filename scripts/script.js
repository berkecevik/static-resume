document.addEventListener("DOMContentLoaded", () => {
    // Social Links
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach(link => {
        link.addEventListener("click", e => {
            if (link.getAttribute("href") === "#") {
                e.preventDefault();
                alert("This link is a placeholder.");
            } else {
                console.log(`Navigating to: ${link.href}`);
            }
        });
    });

    // Neon Buttons
    const neonButtons = document.querySelectorAll(".neon-button");
    neonButtons.forEach(button => {
        button.addEventListener("click", e => {
            const href = button.getAttribute("href");
            if (href === "#") {
                e.preventDefault();
                alert("Download CV functionality is not implemented.");
            } else {
                console.log(`Navigating to: ${href}`);
            }
        });
    });

    // Download CV Button
    const downloadCVButton = document.querySelector('.button[download]');
    if (downloadCVButton) {
        downloadCVButton.addEventListener("click", e => {
            const filePath = downloadCVButton.getAttribute("href");
            if (!filePath) {
                e.preventDefault();
                alert("CV file is missing. Please ensure the file is available.");
            } else {
                console.log(`Downloading CV from: ${filePath}`);
            }
        });
    }


    document.querySelectorAll("a, button").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.style.transition = "transform 0.3s ease-in-out";
            btn.style.transform = "translateY(-10px)"; // Move up
    
            setTimeout(() => {
                btn.style.transform = "translateY(0)"; // Reset to original position
            }, 300); // Matches the transition duration
        });
    });
    
    // Smooth Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Project List Scrolling
    const projectList = document.querySelector('.project-list');
    const projectItem = document.querySelector('.project-item');
    const itemWidth = projectItem ? projectItem.offsetWidth + 20 : 0;

    if (projectList && itemWidth) {
        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');

        nextBtn?.addEventListener('click', () => {
            projectList.scrollBy({ left: itemWidth, behavior: 'smooth' });
        });

        prevBtn?.addEventListener('click', () => {
            projectList.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        });
    }

    // Dragging for Project List
    if (projectList) {
        let isDragging = false;
        let startX;
        let scrollLeft;

        projectList.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - projectList.offsetLeft;
            scrollLeft = projectList.scrollLeft;
            projectList.style.cursor = 'grabbing';
        });

        projectList.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const x = e.pageX - projectList.offsetLeft;
            const walk = (x - startX) * 1.5;
            projectList.scrollLeft = scrollLeft - walk;
        });

        ['mouseup', 'mouseleave'].forEach(event => {
            projectList.addEventListener(event, () => {
                isDragging = false;
                projectList.style.cursor = 'grab';
            });
        });
    }

    // Text Animation
    const line1 = "Hello,";
    const line2 = "Welcome to my portfolio!";
    const typingSpeed = 100;
    let index1 = 0, index2 = 0;

    function typeLine1() {
        if (index1 < line1.length) {
            document.getElementById("typing-line1").innerHTML += line1.charAt(index1);
            index1++;
            setTimeout(typeLine1, typingSpeed);
        } else {
            setTimeout(typeLine2, typingSpeed);
        }
    }

    function typeLine2() {
        if (index2 < line2.length) {
            document.getElementById("typing-line2").innerHTML += line2.charAt(index2);
            index2++;
            setTimeout(typeLine2, typingSpeed);
        }
    }

    typeLine1();
});

//Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }
});