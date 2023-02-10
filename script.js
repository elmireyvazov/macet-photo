const form = document.getElementById("form");
const openPopUp = document.getElementById("open__popup");
const closePopUp = document.getElementById("popup__close");
const popUp = document.getElementById("popup");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = {
    date: e.target[0].value,
    email: e.target[1].value,
    firstName: e.target[2].value,
    secondName: e.target[3].value,
    phone: e.target[4].value,
    cardInfo: {
      number: e.target[5].value,
      expirationDate: e.target[6].value,
      cvv: e.target[7].value,
    },
    agreed: e.target[8].value,
  };
  console.log(result);
});

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});
