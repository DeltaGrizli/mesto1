(()=>{"use strict";var t=document.querySelector(".profile"),e=document.getElementById("editProfile"),n=document.getElementById("editProfileTitle"),r=document.getElementById("editProfileSubtitle"),o=t.querySelector(".profile__button"),i=document.getElementById("edit"),u=t.querySelector(".profile__add-button"),a=i.querySelector(".form"),c=e.querySelector(".form"),l=document.querySelector("#popupEditAvatar"),s=document.querySelector(".profile__content"),f=l.querySelector(".form"),p={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save",inactiveButtonClass:"form__save_inactive",inputErrorClass:"form__input-error",errorClass:"form__input-error_active"};function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var h=function(){function t(e,n,r){var o=r.handleCardClick,i=r.handleDeleteCard,u=r.handleAddLike,a=r.handleRemoveLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._title=e.name,this._link=e.link,this._cardSelector=n,this._handleClick=o,this._handleDeleteCard=i,this._handleAddLike=u,this._handleRemoveLike=a,this._cardId=e._id,this._myID=myId,this.likes=e.likes,this._ownerId=e.owner?e.owner._id:null}var e,n;return e=t,(n=[{key:"getCardId",value:function(){return this._cardId}},{key:"_getTemplate",value:function(){return this.gridCardElement=document.querySelector(this._cardSelector).content.querySelector(".elements__item").cloneNode(!0),this._cardImage=this.gridCardElement.querySelector(".elements__image"),this._likeElement=this.gridCardElement.querySelector(".elements__like"),this.likeCounter=this.gridCardElement.querySelector(".elements__like_count"),this.gridCardElement}},{key:"handleToggleLike",value:function(t){this._likeElement.classList.toggle("elements__like_active"),this.likeCounter.textContent=t.likes.length}},{key:"toggleLike",value:function(){this._likeElement.classList.contains("elements__like_active")?this._handleRemoveLike(this):this._handleAddLike(this)}},{key:"_initialLike",value:function(){var t=this;this.likeCounter.textContent=this.likes.length,this.likes.some((function(e){return e._id===t._myID}))&&this._likeElement.classList.add("elements__like_active")}},{key:"deleteCard",value:function(){this.gridCardElement.remove()}},{key:"generateCard",value:function(){return this._getTemplate(),this._data.owner._id!==this._myID&&(this.gridCardElement.querySelector(".grid__trash").style.display="none"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._title,this.gridCardElement.querySelector(".elements__title").textContent=this._title,this._initialLike(),this.gridCardElement.cardInstance=this,this.gridCardElement}},{key:"_createCard",value:function(){var t=this._getTemplate().cloneNode(!0),e=this._cardImage;t.querySelector(".elements__title").textContent=this._title,e.src=this._link,e.alt=this._title}},{key:"_setEventListeners",value:function(){var t=this;this._likeElement.addEventListener("click",(function(){t.toggleLike(t)})),this._myID===this._ownerId&&this.gridCardElement.querySelector(".elements__trash").addEventListener("click",(function(){t._handleDeleteCard(t.gridCardElement,t._cardId)})),this._cardImage.addEventListener("click",(function(){t._handleClick(t._title,t._link)}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_(r.key),r)}}function v(t,e,n){return(e=_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}var g=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"_showInputError",(function(){var t=r._form.closest(r._formSelector).querySelector(".".concat(r._inputElement.id,"-error"));t.textContent=r._inputElement.validationMessage,t.classList.add(r._errorClass)})),v(this,"_hideInputError",(function(){var t=r._form.closest(r._formSelector).querySelector(".".concat(r._inputElement.id,"-error"));t.classList.remove(r._errorClass),t.textContent=" "})),v(this,"_checkInputValidity",(function(){r._inputElement.validity.valid?r._hideInputError():r._showInputError()})),v(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),v(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableSubmitButton():(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),v(this,"enableValidation",(function(){r._setEventListeners()})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n,this._buttonElement=this._form.closest(this._formSelector).querySelector(this._submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var e,n;return e=t,(n=[{key:"disableSubmitButton",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._inputElement=e,t._checkInputValidity(),t._toggleButtonState()}))}))}},{key:"resetError",value:function(){var t=this;this._inputList.forEach((function(e){t._inputElement=e,t._hideInputError()}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var E=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"prependItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,C(r.key),r)}}function C(t){var e=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(e)?e:String(e)}var P=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=C(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._buttonClose=this._popup.querySelector(".popup__close")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._buttonClose.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup")&&t.close()}))}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__photo"),e._popupPhotoName=e._popup.querySelector(".popup__name"),e}return e=u,(n=[{key:"open",value:function(t){I(B(u.prototype),"open",this).call(this);var e=t.name,n=t.link;this._popupImage.src=n,this._popupImage.alt=e,this._popupPhotoName.textContent=e}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._callback=e,n._inputList=n._popup.querySelectorAll(".form__input"),n._submitButtom=n._popup.querySelector(".form__save"),n._form=n._popup.querySelector(".form"),n._submitButtomText=n._submitButtom.textContent,n}return e=u,n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;x(D(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callback(t._getInputValues())}))}},{key:"isLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";t?this._submitButtom.textContent=e:(this._submitButtom.disabled=!1,this._submitButtom.textContent=this._submitButtomText)}},{key:"close",value:function(){x(D(u.prototype),"close",this).call(this),this._form.reset()}}],n&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var G=function(){function t(e){var n=e.selectorUserName,r=e.selectorUserJob,o=e.selectorUserAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._username=document.querySelector(n),this._userjob=document.querySelector(r),this._useravatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._username.textContent,about:this._userjob.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._username.textContent=e,this._userjob.textContent=n,this._useravatar.src=r,this.userId=o}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}var z=new(function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=n,this.headers=r}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch(this.baseUrl+"/cards",{method:"GET",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"getUserInfo",value:function(){return fetch(this.baseUrl+"/users/me",{method:"GET",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"postNewCard",value:function(t){var e=t.name,n=t.link;return fetch(this.baseUrl+"/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))})).catch((function(t){return console.log("Network error:",t),Promise.reject("Failed to fetch")}))}},{key:"patchUserInfo",value:function(t){var e=t.name,n=t.about;return fetch(this.baseUrl+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:n})}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"patchAvatarInfo",value:function(t){var e=t.avatar;return fetch(this.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"putLike",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"fef5ea78-b931-498d-bcf8-69e7812850f6","Content-Type":"application/json"}});function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=W(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},K.apply(this,arguments)}function Q(t,e){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Q(t,e)}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}var X=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(r);if(o){var n=W(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._deleteButtom=n._popup.querySelector(".form__save"),n._callback=e,n._deleteButtomText=n._deleteButtom.textContent,n}return e=u,n=[{key:"open",value:function(t,e){this.card=t,this.cardId=e,K(W(u.prototype),"open",this).call(this),this._deleteButtom.addEventListener("mousedown",this._callback)}},{key:"close",value:function(){K(W(u.prototype),"close",this).call(this),this._deleteButtom.removeEventListener("mousedown",this._callback)}},{key:"isLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";t?this._deleteButtom.textContent=e:(this._deleteButtom.disabled=!1,this._deleteButtom.textContent=this._deleteButtomText)}}],n&&$(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Z=new g(p,c),tt=new g(p,a),et=new g(p,f),nt=new N("#editProfile",(function(t){nt.isLoading(!0),z.patchUserInfo(t).then((function(t){ut.setUserInfo(t),nt.close()})).catch((function(t){console.log(t)})).finally((function(){nt.isLoading(!1)}))})),rt=new N("#edit",(function(t){rt.isLoading(!0),z.postNewCard(t).then((function(t){ct.prependItem(lt(t)),rt.close()})).catch((function(t){console.log(t)})).finally((function(){rt.isLoading(!1)}))})),ot=new N("#popupEditAvatar",(function(t){ot.isLoading(!0),z.patchAvatarInfo(t).then((function(t){ut.setUserInfo(t),ot.close()})).catch((function(t){console.log(t)})).finally((function(){ot.isLoading(!1)}))})),it=new q("#photoImage"),ut=new G({selectorUserName:".profile__title",selectorUserJob:".profile__subtitle",selectorUserAvatar:".profile__avatar"}),at=new X("#popupDeleteCard",(function(){at.isLoading(!0),z.deleteCard(at.cardId).then((function(){at.card.cardInstance.deleteCard(),at.close()})).catch((function(t){console.log(t)})).finally((function(){at.isLoading(!1)}))})),ct=new E((function(t){ct.addItem(lt(t))}),".elements");function lt(t){var e=new h(t,ut.userId,".template",{handleCardClick:function(){it.open({name:t.name,link:t.link})},handleDeleteCard:function(t,e){at.open(t,e)},handleAddLike:function(t){z.putLike(t.getCardId()).then((function(e){t.handleToggleLike(e)})).catch((function(t){console.log(t)}))},handleRemoveLike:function(t){z.deleteLike(t.getCardId()).then((function(e){t.handleToggleLike(e)})).catch((function(t){console.log(t)}))}});return e.generateCard()}Promise.all([z.getUserInfo(),z.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ut.setUserInfo(o),ct.renderItems(i)})).catch((function(t){console.log(t)})),o.addEventListener("click",(function(){var t=ut.getUserInfo(),e=t.name,o=t.about;n.value=e,r.value=o,nt.open(),Z.resetError()})),u.addEventListener("click",(function(){rt.open(),tt.disableSubmitButton(),tt.resetError()})),s.addEventListener("click",(function(){ot.open(),et.blockButtonOpened(),et.resetErrors()})),nt.setEventListeners(),rt.setEventListeners(),it.setEventListeners(),ot.setEventListeners(),ct.renderItems(),Z.enableValidation(),tt.enableValidation(),at.setEventListeners()})();