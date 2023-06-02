export class Api{
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl
        this.headers = headers;
      }

      _checkStatus(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Error ${response.status}`);
      }

    getInitialCards() {
        return fetch(this.baseUrl + '/cards', {
            method: 'GET',
            headers: this.headers
        })
          .then(this._checkStatus)
          .catch(error => {
            console.error('Error:', error);
          });
      } 
      getUserInfo() {
        return fetch(this.baseUrl + '/users/me', {
            method: 'GET',
            headers: this.headers
        })
        .then(this._checkStatus)
      .catch(error => {
        console.error('Error:', error);
      });
    }

    postNewCard({ name, link }) {
        return fetch(this.baseUrl + '/cards', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(this._checkStatus)
        .catch(error => {
          console.error('Error:', error);
        });
    }

    deleteCard(cardId){
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.headers,
        })
        .then(this._checkStatus)
        .catch(error => {
          console.error('Error:', error);
        });
    }

    patchUserInfo({ name, about }) {
        return fetch(this.baseUrl + '/users/me', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
        .then(this._checkStatus)
        .catch(error => {
          console.error('Error:', error);
        });
    }

    patchAvatarInfo({avatar}) {
        return fetch(this.baseUrl + '/users/me/avatar', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: avatar
            })
        })
        .then(this._checkStatus)
        .catch(error => {
          console.error('Error:', error);
        });
    }

    putLike(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this.headers
        })
        .then(this._checkStatus)
      .catch(error => {
        console.error('Error:', error);
      });
    }

    deleteLike(cardId) {
        return fetch((`${this.baseUrl}/cards/${cardId}/likes`), {
            method: "DELETE",
            headers: this.headers
        })
        .then(this._checkStatus)
        .catch(error => {
          console.error('Error:', error);
        });
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: 'fef5ea78-b931-498d-bcf8-69e7812850f6',
      'Content-Type': 'application/json'
    }
  })