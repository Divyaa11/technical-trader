function countAnimation(targetNumber, elementId) {
  var currentNumber = 0;
  var increment = Math.ceil(targetNumber / 250); // Adjust increment for faster counting
  var intervalTime = 20; // Time between each increment in milliseconds

  var interval = setInterval(function () {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      clearInterval(interval);
      currentNumber = targetNumber; // Ensure the target number is reached exactly
    }
    document.getElementById(elementId).textContent = currentNumber.toLocaleString() + '+'; // Update the display with the current number
  }, intervalTime);
}

function updatePrices(currency) {
  const finalPriceElement = document.getElementById('final-price');
  const prevPriceElement = document.getElementById('prev-price');

  // Fetch prices from data attributes
  const finalPrice = currency === 'INR' ? finalPriceElement.dataset.inr : finalPriceElement.dataset.usd;
  const prevPrice = currency === 'INR' ? prevPriceElement.dataset.inr : prevPriceElement.dataset.usd;

  // Update the content
  finalPriceElement.textContent = currency === 'INR' ? `₹${finalPrice}` : `$${finalPrice}`;
  prevPriceElement.textContent = currency === 'INR' ? `₹${prevPrice}` : `$${prevPrice}`;
}

// Handle currency selection change
document.getElementById('currency-selector').addEventListener('change', (event) => {
  const selectedCurrency = event.target.value;

  // Prevent scrolling when the dropdown is interacted with
  event.preventDefault();

  // Save the preference to localStorage
  localStorage.setItem('selectedCurrency', selectedCurrency);

  // Update prices
  updatePrices(selectedCurrency);
});

// Load saved preference on page load
window.addEventListener('load', () => {
  const savedCurrency = localStorage.getItem('selectedCurrency') || 'INR';
  document.getElementById('currency-selector').value = savedCurrency;
  updatePrices(savedCurrency);
});

// Example usage
countAnimation(1000, 'count1'); // Start count animation for the first text
countAnimation(150, 'count2'); // Start count animation for the second text

const checkbox = document.querySelector("#hide_checkbox");
let gitLogo = document.getElementById("gitlogo");
let footerLogo = document.getElementById("footerLogo");
let topLogo = document.getElementById("topLogo");

hide_checkbox.addEventListener("click", () => {
  const body = document.body;

  if (checkbox.checked) {
    body.classList.add("dark");
    body.classList.remove("light");
    gitLogo.src = "images/github-dark.webp";
    footerLogo.src = "images/logo.webp";
    topLogo.src = "images/logo.webp";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    gitLogo.src = "images/github-light.webp";
    footerLogo.src = "images/logo_dark.webp";
    topLogo.src = "images/logo_dark.webp";
  }
});

// Slideshow functionality
let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
  currentSlide = (currentSlide + 1) % slides.length; // Loop through slides
}

// Change slide every 3 seconds
setInterval(showSlides, 3000);
