const submitBtn = document.querySelector(".submit-btn");
console.log(submitBtn);
const mainContainer = document.querySelector(".main-container");
//console.log(mainContainer);
const circleBtns = document.querySelectorAll(".circle-btn");
console.log(circleBtns);
const thankyouPage = document.querySelector(".thankyou-page");
console.log(thankyouPage);
const score = document.querySelector(".score");
console.log(score);

submitBtn.addEventListener("click", () => {
  thankyouPage.classList.remove("hide");
  mainContainer.classList.add("hide");
});

circleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    score.innerHTML = btn.dataset.id;
  });
});
