document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    // Carousel
    const carouselImages = [
        "https://img.picgo.net/2024/08/26/10000130739f0e00d2d187c2e4.md.jpg",
        "https://img.picgo.net/2024/08/26/10000130720ac0e0119076405c.md.jpg",
        "https://img.picgo.net/2024/08/26/1000013071b32014cd239d2162.md.jpg",
        "https://img.picgo.net/2024/08/26/1000013070f21d9a5fada3e56f.md.jpg",
        "https://img.picgo.net/2024/08/26/1000013074a1d79d0add056720.md.jpg",
        "https://img.picgo.net/2024/08/26/100001308034c456c1974c5577.md.jpg",
        "https://img.picgo.net/2024/08/26/1000013084dca8366ea72cb533.jpg"
    ];

    const carouselContainer = document.getElementById('carousel');
    let currentIndex = 0;

    function createCarouselItems() {
        carouselImages.forEach((src, index) => {
            const item = document.createElement('div');
            item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Slide ${index + 1}`;
            item.appendChild(img);
            carouselContainer.appendChild(item);
        });
    }

    function rotateCarousel() {
        const items = document.querySelectorAll('.carousel-item');
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    createCarouselItems();
    setInterval(rotateCarousel, 3000);

    // 处理 "了解更多" 按钮点击
    const learnMoreBtn = document.getElementById('learn-more');
    const aboutDetailsSection = document.getElementById('about-details');

    learnMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (aboutDetailsSection.style.display === 'none') {
            aboutDetailsSection.style.display = 'block';
            learnMoreBtn.textContent = '收起';
            aboutDetailsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            aboutDetailsSection.style.display = 'none';
            learnMoreBtn.textContent = '了解更多';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
