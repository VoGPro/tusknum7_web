function updatePrice() {
  let f2 = document.getElementsByName("field2");
  let v1 = 1;
  let v2 = parseInt(f2[0].value);
  if (isNaN(v2) || v2 <= 0) alert("Введите корректное значение!");
  else v1 = v2;

  // Находим select по имени в DOM.
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }

  // Скрываем или показываем радиокнопки.
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = (select.value == "2" ? "block" : "none");

  // Смотрим какая товарная опция выбрана.
  let radios = document.getElementsByName("prodOptions");
  let radioPrice = 0;
  radios.forEach(function (radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        radioPrice = optionPrice;
      }
    }
  });

  // Скрываем или показываем чекбоксы.
  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = ((select.value == "2") || (select.value == "1") ? "none" : "block");

  // Смотрим какие товарные свойства выбраны.
  let checkboxes = document.querySelectorAll("#checkboxes input");
  let checkboxPrice = 0;
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        checkboxPrice += propPrice;
      }
    }
  });

  let img = document.getElementById('phone-img');

  switch (priceIndex) {
    case 0:
      img.src = "images/honor-20.png";
      img.alt = "Honor 20";
      break;
    case 1:
      price += radioPrice;
      img.src = "images/iphone-14.png";
      img.alt = "iPhone 14";
      break;
    case 2:
      price += checkboxPrice;
      img.src = "images/flip4.png";
      img.alt = "Flip4";
      break;
  }

  let prodPrice = document.getElementById("prodPrice");
  prodPrice.innerHTML = v1 * price + " рублей";
}

function getPrices() {
  return {
    prodTypes: [16109, 84999, 75899],
    prodOptions: {
      option2: 10000,
      option3: 30000,
    },
    prodProperties: {
      prop1: 7198,
      prop2: 1999,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {
  // Скрываем радиокнопки.
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";

  let f2 = document.getElementsByName("field2");
  let v2 = f2[0];
  v2.addEventListener("change", function (event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });

  // Находим select по имени в DOM.
  let s = document.getElementsByName("prodType");
  let select = s[0];
  // Назначаем обработчик на изменение select.
  select.addEventListener("change", function (event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });

  // Назначаем обработчик радиокнопок.  
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });

  // Назначаем обработчик радиокнопок.  
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  updatePrice();
});
