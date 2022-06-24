import Api from'./Api.js'

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: `f3195114-15f7-499c-9881-ff5b27b99807`,
    'Content-Type': 'application/json'
  }
})

const validationSelectors = {
  inputSelector: ".form__item",
  submitButtonSelector: ".form__submit-btn",
  inactiveButtonClass: "form__submit-btn_inactive",
  inputErrorClass: "form__item_type_error",
  errorClass: "form__item-error_active",
  fieldsetSelector: ".form__container",
};



export {
  validationSelectors,
  api,
};
