// Array of customer details
const customers = [
  {
    name: "Shayna Gomez",
    image: "image/pic1.jpg",
    review:
      "These platform is the best place to lean the skills. I am quit impress.",
  },
  {
    name: "Jason Roy",
    image: "image/pic2.jpg",
    review:
      "I am satisfied with these platform, and i advised other to use these platform to learn the skill in 10x mode.",
  },
  {
    name: "Nitesh Maddy",
    image: "image/pic3.jpg",
    review:
      "Its Awesome, hope these website keep going like these, and there should be no add as it will disturb the mind.",
  },
  {
    name: "Misti Havens",
    image: "image/pic4.jpg",
    review:
      "You must add compition with reward, so that all can have more interest. ",
  },
];

let currentIndex = 0;

// Function to update the customer details based on the currentIndex
function updateCustomerDetails() {
  const customer = customers[currentIndex];
  const customerImg = document.getElementById("customer-img");
  const customerName = document.querySelector(".customer-name");
  const customerText = document.getElementById("customer-text");

  customerImg.src = customer.image;
  customerName.textContent = customer.name;
  customerText.textContent = customer.review;
}

// Function to handle the "Next" button click
function nextCustomer() {
  currentIndex = (currentIndex + 1) % customers.length;
  updateCustomerDetails();
}

// Function to handle the "Previous" button click
function prevCustomer() {
  currentIndex = (currentIndex - 1 + customers.length) % customers.length;
  updateCustomerDetails();
}

// Add event listeners to the arrow buttons
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
prevBtn.addEventListener("click", prevCustomer);
nextBtn.addEventListener("click", nextCustomer);

// Initialize the first customer details
updateCustomerDetails();
