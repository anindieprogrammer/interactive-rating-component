const submitBtn = document.getElementById("submit");
const ratingContainer = document.getElementById("ratingContainer");
const thankYouContainer = document.getElementById("thankYouContainer");
const rateMsg = document.getElementById("rate-msg");

let ratings = Array.from(document.querySelectorAll(".rating"));
let ratingValue = 1;

ratings.forEach((rating, index) => {
  rating.addEventListener("click", () => {
    setRating(index);
  });
});

function setRating(index) {
  let currentRating = ratings[index];
  ratings.forEach((rating) => {
    rating.classList.remove("selected");
  });
  currentRating.classList.add("selected");
  ratingValue = currentRating.innerHTML;
}

submitBtn.addEventListener("click", () => {
  ratingContainer.classList.toggle("hidden");
  thankYouContainer.classList.toggle("hidden");
  rateMsg.innerHTML = `You selected ${ratingValue} out of 5`;
});
