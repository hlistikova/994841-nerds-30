const orderLink = document.querySelector(".order-link");
const orderPopup = document.querySelector(".modal-order");
const orderClose = orderPopup.querySelector(".modal-close");
const orderForm = orderPopup.querySelector(".order-form");
const orderName = orderPopup.querySelector(".order-name");
const orderEmail = orderPopup.querySelector(".order-email");
const orderText = orderPopup.querySelector(".order-text");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

orderLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	orderPopup.classList.add("modal-show");
	
	if (storage) {
    orderName.value = storage;
    orderEmail.focus();
  } else {
  	orderName.focus();
  	}
});

orderClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	orderPopup.classList.remove("modal-show");
	orderPopup.classList.remove("modal-error");
});

orderForm.addEventListener("submit", function (evt) {
	if (!orderName.value || !orderEmail.value) {
    evt.preventDefault();
    orderPopup.classList.add("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", orderName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      orderPopup.classList.remove("modal-error");
    }
  }
});