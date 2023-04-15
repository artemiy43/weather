class Api {                                //класс API для работы с сервером
  constructor(contentType) {                              
    this._contentType = contentType;                      //контент тайп
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInfo(lat, lon) {                                                        
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ce15172cb4fba3253e8b981c49424648&lang=ru&units=metric`, {
      method: 'GET',
    })
    .then((res) =>{
      return this._checkStatus(res);
    });
  }
}


export const api = new Api('application/json');