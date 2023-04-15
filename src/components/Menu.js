function Menu({ isOpen, parametres, handleIsOpen}) {
    return(
        <div className={(isOpen===true) ? "menu" : "menu-unable"} id="menu">
          <div className="menu__flex-container">
            <h1 className="menu__title">Погода в {parametres.name}</h1>
            <button className="menu__button" type="button" onClick={handleIsOpen}><span>{(isOpen===true) ? "Развернуть" : "Свернуть"}</span></button>
          </div>
            <div className={(isOpen===true) ? "menu__grid-container" : "menu__grid-container-unable"}>
              <p className="menu__span-origin">Основное описание: </p>
              <p className="menu__span-origin">{parametres === {} ? "NULL" : parametres.weather[0].description}</p>
              <p className="menu__span-coordinates">Температура</p>
              <p className="menu__span-origin">Основная[градусы Цельсия]: </p>
              <p className="menu__span-origin">{parametres === {} ? "NULL" : parametres.main.temp}</p>
              <p className="menu__span-origin">Максимальная[градусы Цельсия]: </p>
              <p className="menu__span-origin">{parametres === {} ? "NULL" : parametres.main.temp_max}</p>
              <p className="menu__span-origin">Минимальная[градусы Цельсия]: </p>
              <p className="menu__span-origin">{parametres === {} ? "NULL" : parametres.main.temp_min}</p>
              <p className="menu__span-origin">Как чувствуется[градусы Цельсия]: </p>
              <p className="menu__span-origin">{parametres === {} ? "NULL" : parametres.main.feels_like}</p>
              <p className="menu__span-coordinates">Ветер</p>
              <p className="menu__span-origin">Скорость[м/с]: </p>
              <p className="menu__span-origin">{parametres === {} ? "NULL" : parametres.wind.speed}</p>
              <p className="menu__span-origin">Направление[градусы]: </p>
              <p className="menu__span-origin">{parametres === {} ? "NULL": parametres.wind.deg}</p>
              <p className="menu__span-coordinates">Другие показатели</p>
              <p className="menu__span-origin">Атмосферное давление[Гектопаскаль]: </p>
              <p className="menu__span-origin">{parametres === {} ? "NULL": parametres.main.pressure}</p>
              <p className="menu__span-origin">Влажность[Проценты]: </p>
              <p className="menu__span-origin">{parametres === {} ? "NULL": parametres.main.humidity}</p>
            </div>
        </div>
    );
}

export default Menu;