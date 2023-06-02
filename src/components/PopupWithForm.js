import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._callback = submitForm;
        this._inputList = this._popup.querySelectorAll('.form__input')
        this._submitButtom = this._popup.querySelector('.form__save');
        this._form = this._popup.querySelector('.form');
        this._submitButtomText = this._submitButtom.textContent
    }

    getInputValues() {
        const formValues = {};
        this._inputList.forEach((input) =>{ 
            formValues[input.name] = input.value; 
          }); 
          //console.log(formValues);
        return formValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callback(this._getInputValues());
            //this.close();
        });
    };

    isLoading(loading, text = 'Сохранение...') {
        if (loading) {
            this._submitButtom.textContent = text;
        }
        else {
            this._submitButtom.disabled = false;
            this._submitButtom.textContent = this._submitButtomText;
        }
    }

    close() {
        super.close();
        this._form.reset();
    }
}