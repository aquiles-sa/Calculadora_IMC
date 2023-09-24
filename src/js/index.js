const form = document.querySelector(".formu");
const text = document.querySelector(".result");

const event = (e) => {
  e.preventDefault();

  const weight_value = Number(document.getElementById("weight").value);
  const height_value = Number(document.getElementById("height").value);

  bmi_calculus(weight_value, height_value);
};

const bmi_calculus = (weight, height) => {
  const categories = [
    "Underweight",
    "Normal weight",
    "Overweight",
    "Obesity grade 1",
    "Obesity grade 2",
    "Obesity grade 3",
  ];

  let total = ((weight / height ** 2) * 10000).toFixed(2);

  if (total <= 18.5) {
    text.innerHTML = `${total} kg/m<sup>2</sup> | ${categories[0]}`;

    text.classList.add("underweight");
    text.classList.remove(
      "normal-weight",
      "overweight",
      "obesity-one",
      "obesity-two",
      "obesity-three"
    );
  }

  if (total >= 18.6 && total <= 24.9) {
    text.innerHTML = `${total} kg/m<sup>2</sup> | ${categories[1]}`;

    text.classList.add("normal-weight");
    text.classList.remove(
      "underweight",
      "overweight",
      "obesity-one",
      "obesity-two",
      "obesity-three"
    );
  }

  if (total >= 25 && total <= 29.9) {
    text.innerHTML = `${total} kg/m<sup>2</sup> | ${categories[2]}`;

    text.classList.add("overwheight");
    text.classList.remove(
      "underweight",
      "normal-weight",
      "obesity-one",
      "obesity-two",
      "obesity-three"
    );
  }

  if (total >= 30 && total <= 34.9) {
    text.innerHTML = `${total} kg/m<sup>2</sup> | ${categories[3]}`;

    text.classList.add("obesity-one");
    text.classList.remove(
      "underweight",
      "normal-weight",
      "overweight",
      "obesity-two",
      "obesity-three"
    );
  }

  if (total >= 35 && total <= 39.9) {
    text.innerHTML = `${total} kg/m<sup>2</sup> | ${categories[4]}`;

    text.classList.add("obesity-two");
    text.classList.remove(
      "underweight",
      "normal-weight",
      "overweight",
      "obesity-one",
      "obesity-three"
    );
  }

  if (total >= 40) {
    text.innerHTML = `${total} kg/m<sup>2</sup> | ${categories[5]}`;

    text.classList.add("obesity-three");
    text.classList.remove(
      "underweight",
      "normal-weight",
      "overweight",
      "obesity-one",
      "obesity-two"
    );
  }

  return total;
};

const erase = () => {
  window.location.reload();
};

form.addEventListener("submit", event);
