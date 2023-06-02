(()=>{"use strict";var t=document.querySelector(".profile"),e=document.getElementById("editProfile"),n=t.querySelector(".profile__button"),r=document.getElementById("editProfileTitle"),o=document.getElementById("editProfileSubtitle"),i=document.getElementById("edit").querySelector(".form"),u=t.querySelector(".profile__add-button"),a=e.querySelector(".form"),c=document.querySelector("#popupEditAvatar"),l=document.querySelector(".profile__content"),s=c.querySelector(".form"),f={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save",inactiveButtonClass:"form__save_inactive",inputErrorClass:"form__input-error",errorClass:"form__input-error_active"};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var d=function(){function t(e,n,r){var o=r.handleCardClick,i=r.handleDeleteCard,u=r.handleAddLike,a=r.handleRemoveLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._title=e.name,this._link=e.link,this._cardSelector=n,this._handleClick=o,this._handleDeleteCard=i,this._handleAddLike=u,this._handleRemoveLike=a,this._cardId=e._id,this._myID=myId,this.likes=e.likes,this._ownerId=e.owner?e.owner._id:null}var e,n;return e=t,(n=[{key:"getCardId",value:function(){return this._cardId}},{key:"_getTemplate",value:function(){return this.gridCardElement=document.querySelector(this._cardSelector).content.querySelector(".elements__item").cloneNode(!0),this._cardImage=this.gridCardElement.querySelector(".elements__image"),this._likeElement=this.gridCardElement.querySelector(".elements__like"),this.likeCounter=this.gridCardElement.querySelector(".elements__like_count"),this.gridCardElement}},{key:"handleToggleLike",value:function(t){this._likeElement.classList.toggle("elements__like_active"),this.likeCounter.textContent=t.likes.length}},{key:"toggleLike",value:function(){this._likeElement.classList.contains("elements__like_active")?this._handleRemoveLike(this):this._handleAddLike(this)}},{key:"_initialLike",value:function(){var t=this;this.likeCounter.textContent=this.likes.length,this.likes.some((function(e){return e._id===t._myID}))&&this._likeElement.classList.add("elements__like_active")}},{key:"deleteCard",value:function(){this.gridCardElement.remove()}},{key:"_createCard",value:function(){var t=this._getTemplate().cloneNode(!0),e=this._cardImage;t.querySelector(".elements__title").textContent=this._title,e.src=this._link,e.alt=this._title}},{key:"_setEventListeners",value:function(){var t=this;this._likeElement.addEventListener("click",(function(){t.toggleLike(t)})),this._myID===this._ownerId&&this.gridCardElement.querySelector(".elements__trash").addEventListener("click",(function(){t._handleDeleteCard(t.gridCardElement,t._cardId)})),this._cardImage.addEventListener("click",(function(){t._handleClick(t._title,t._link)}))}},{key:"generateCard",value:function(){return this._getTemplate(),this._data.owner._id!==this._myID&&(this.gridCardElement.querySelector(".grid__trash").style.display="none"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._title,this.gridCardElement.querySelector(".elements__title").textContent=this._title,this._initialLike(),this.gridCardElement.cardInstance=this,this.gridCardElement}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,v(r.key),r)}}function b(t,e,n){return(e=v(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===h(e)?e:String(e)}var _=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"_showInputError",(function(){var t=r._form.closest(r._formSelector).querySelector(".".concat(r._inputElement.id,"-error"));t.textContent=r._inputElement.validationMessage,t.classList.add(r._errorClass)})),b(this,"_hideInputError",(function(){var t=r._form.closest(r._formSelector).querySelector(".".concat(r._inputElement.id,"-error"));t.classList.remove(r._errorClass),t.textContent=" "})),b(this,"_checkInputValidity",(function(){r._inputElement.validity.valid?r._hideInputError():r._showInputError()})),b(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),b(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableSubmitButton():(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),b(this,"enableValidation",(function(){r._setEventListeners()})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n,this._buttonElement=this._form.closest(this._formSelector).querySelector(this._submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var e,n;return e=t,(n=[{key:"disableSubmitButton",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._inputElement=e,t._checkInputValidity(),t._toggleButtonState()}))}))}},{key:"resetError",value:function(){var t=this;this._inputList.forEach((function(e){t._inputElement=e,t._hideInputError()}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var k=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"prependItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,j(r.key),r)}}function j(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}var C=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=j(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._buttonClose=this._popup.querySelector(".popup__close")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._buttonClose.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup")&&t.close()}))}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__photo"),e._popupPhotoName=e._popup.querySelector(".popup__name"),e}return e=u,(n=[{key:"open",value:function(t){L(T(u.prototype),"open",this).call(this);var e=t.name,n=t.link;this._popupImage.src=n,this._popupImage.alt=e,this._popupPhotoName.textContent=e}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._callback=e,n._inputList=n._popup.querySelectorAll(".form__input"),n._submitButtom=n._popup.querySelector(".form__save"),n._form=n._popup.querySelector(".form"),n._submitButtomText=n._submitButtom.textContent,n}return e=u,n=[{key:"getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;x(A(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callback(t._getInputValues())}))}},{key:"isLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";t?this._submitButtom.textContent=e:(this._submitButtom.disabled=!1,this._submitButtom.textContent=this._submitButtomText)}},{key:"close",value:function(){x(A(u.prototype),"close",this).call(this),this._form.reset()}}],n&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}var J=function(){function t(e){var n=e.selectorUserName,r=e.selectorUserJob,o=e.selectorUserAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._username=document.querySelector(n),this._userjob=document.querySelector(r),this._useravatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._username.textContent,about:this._userjob.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._username.textContent=e,this._userjob.textContent=n,this._useravatar.src=r,this.userId=o}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}var M=new(function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=n,this.headers=r}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch(this.baseUrl+"/cards",{method:"GET",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"getUserInfo",value:function(){return fetch(this.baseUrl+"/users/me",{method:"GET",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"postNewCard",value:function(t){var e=t.name,n=t.link;return fetch(this.baseUrl+"/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))})).catch((function(t){return console.log("Network error:",t),Promise.reject("Failed to fetch")}))}},{key:"patchUserInfo",value:function(t){var e=t.name,n=t.about;return fetch(this.baseUrl+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:n})}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"patchAvatarInfo",value:function(t){var e=t.avatar;return fetch(this.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"putLike",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Error ".concat(t.status))}))}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"fef5ea78-b931-498d-bcf8-69e7812850f6","Content-Type":"application/json"}});function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},$.apply(this,arguments)}function K(t,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},K(t,e)}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Q(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Q(r);if(o){var n=Q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._deleteButtom=n._popup.querySelector(".form__save"),n._callback=e,n._deleteButtomText=n._deleteButtom.textContent,n}return e=u,n=[{key:"open",value:function(t,e){this.card=t,this.cardId=e,$(Q(u.prototype),"open",this).call(this),this._deleteButtom.addEventListener("mousedown",this._callback)}},{key:"close",value:function(){$(Q(u.prototype),"close",this).call(this),this._deleteButtom.removeEventListener("mousedown",this._callback)}},{key:"isLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";t?this._deleteButtom.textContent=e:(this._deleteButtom.disabled=!1,this._deleteButtom.textContent=this._deleteButtomText)}}],n&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Y=new _(f,a),Z=new _(f,i),tt=new _(f,s),et=new D("#editProfile",(function(t){et.isLoading(!0),M.patchUserInfo(t).then((function(t){it.setUserInfo(t),et.close()})).catch((function(t){console.log(t)})).finally((function(){et.isLoading(!1)}))})),nt=new D("#edit",(function(t){nt.isLoading(!0),M.postNewCard(t).then((function(t){at.prependItem(ct(t)),nt.close()})).catch((function(t){console.log(t)})).finally((function(){nt.isLoading(!1)}))})),rt=new D("#popupEditAvatar",(function(t){rt.isLoading(!0),M.patchAvatarInfo(t).then((function(t){it.setUserInfo(t),rt.close()})).catch((function(t){console.log(t)})).finally((function(){rt.isLoading(!1)}))})),ot=new B("#photoImage"),it=new J({userName:".profile__title",userJob:".profile__subtitle"}),ut=new W("#popupDeleteCard",(function(){ut.isLoading(!0),M.deleteCard(ut.cardId).then((function(){ut.card.cardInstance.deleteCard(),ut.close()})).catch((function(t){console.log(t)})).finally((function(){ut.isLoading(!1)}))})),at=new k((function(t){at.addItem(ct(t))}),".elements");function ct(t){var e=new d(t,it.userId,".template",{handleCardClick:function(){ot.open({name:t.name,link:t.link})},handleDeleteCard:function(t,e){ut.open(t,e)},handleAddLike:function(t){M.putLike(t.getCardId()).then((function(e){t.handleToggleLike(e)})).catch((function(t){console.log(t)}))},handleRemoveLike:function(t){M.deleteLike(t.getCardId()).then((function(e){t.handleToggleLike(e)})).catch((function(t){console.log(t)}))}});return e.generateCard()}Promise.all([M.getUserInfo(),M.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];it.setUserInfo(o),at.renderItems(i)})).catch((function(t){console.log(t)})),n.addEventListener("click",(function(){var t=it.getUserInfo(),e=t.name,n=t.about;r.value=e,o.value=n,et.open(),Y.resetError()})),u.addEventListener("click",(function(){nt.open(),Z.disableSubmitButton(),Z.resetError()})),l.addEventListener("click",(function(){rt.open(),tt.blockButtonOpened(),tt.resetErrors()})),et.setEventListeners(),nt.setEventListeners(),ot.setEventListeners(),rt.setEventListeners(),at.renderItems(),Y.enableValidation(),Z.enableValidation(),ut.setEventListeners()})();