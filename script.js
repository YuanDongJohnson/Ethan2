document.addEventListener("DOMContentLoaded", () => {
  // Header scroll effect
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.9)"
    } else {
      header.style.backgroundColor = "transparent"
    }
  })

  // Carousel
  const carouselImages = [
    "https://img.picgo.net/2024/08/26/10000130739f0e00d2d187c2e4.md.jpg",
    "https://img.picgo.net/2024/08/26/10000130720ac0e0119076405c.md.jpg",
    "https://img.picgo.net/2024/08/26/1000013071b32014cd239d2162.md.jpg",
    "https://img.picgo.net/2024/08/26/1000013070f21d9a5fada3e56f.md.jpg",
    "https://img.picgo.net/2024/08/26/1000013074a1d79d0add056720.md.jpg",
    "https://img.picgo.net/2024/08/26/100001308034c456c1974c5577.md.jpg",
    "https://img.picgo.net/2024/08/26/1000013084dca8366ea72cb533.jpg",
  ]

  const carouselContainer = document.getElementById("carousel")
  let currentIndex = 0

  function createCarouselItems() {
    carouselImages.forEach((src, index) => {
      const item = document.createElement("div")
      item.className = `carousel-item ${index === 0 ? "active" : ""}`
      const img = document.createElement("img")
      img.src = src
      img.alt = `Slide ${index + 1}`
      item.appendChild(img)
      carouselContainer.appendChild(item)
    })
  }

  function rotateCarousel() {
    const items = document.querySelectorAll(".carousel-item")
    items[currentIndex].classList.remove("active")
    currentIndex = (currentIndex + 1) % items.length
    items[currentIndex].classList.add("active")
  }

  createCarouselItems()
  setInterval(rotateCarousel, 3000)

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
})

