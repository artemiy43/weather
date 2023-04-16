import Clear from '../images/Clear.png';
import Clouds from '../images/Clouds.png';
import Clouds25 from '../images/Clouds25.png';
import Clouds50 from '../images/Clouds50.png';
import Drizzle from '../images/Drizzle.png';
import Mist from '../images/Mist.png';
import Rain from '../images/Rain.png';
import Snow from '../images/Snow.png';
import Thunderstorm from '../images/Thunderstorm.png';
function Menu({ finished, isOpen, parametres, handleIsOpen}) {
    let pic=''; 
    switch(parametres.weather[0].main) {
      case 'Thunderstorm':  
        pic = Thunderstorm;
        break;
      case 'Clouds':  
        pic = Clouds;
        break;
      case 'Clouds' && parametres.weather[0].id === 801:  
        pic = Clouds25;
        break;
      case 'Clouds' && parametres.weather[0].id === 802:  
        pic = Clouds50;
        break;
      case 'Drizzle':  
        pic = Drizzle;
        break;
      case 'Mist' || 'Smoke'|| 'Haze'|| 'Dust'|| 'Fog'|| 'Sand'|| 'Ash'|| 'Squall'|| 'Tornado':  
        pic = Mist;
        break;
      case 'Rain':  
        pic = Rain;
        break;
      case 'Snow':  
        pic = Snow;
        break;
      default:
        pic = Clear;
        break;
    }
    if (finished === true)
      return(
          <div className={(isOpen===true) ? "menu" : "menu-unable"} id="menu">
            <div className="menu__flex-container">
              <h1 className="menu__title">Погода в</h1>
              <h2 className="menu__text">{parametres.name}</h2>
              <button className="menu__button" type="button" onClick={handleIsOpen}><span>{(isOpen===true) ? "Закрыть" : "Открыть"}</span></button>
              <img className={(isOpen===true) ? "menu__pic" : "menu__pic-unable"} src={pic} alt="погода"/>
            </div>
              <div className={(isOpen===true) ? "menu__grid-container" : "menu__grid-container-unable"}>
                <p className="menu__span-coordinates">{parametres.weather[0].description}</p>
                <p className="menu__span-coordinates">Температура</p>
                <p className="menu__span-origin">Основная °C: </p>
                <p className="menu__span-origin">{parametres.main.temp}</p>
                <p className="menu__span-origin">Как чувствуется °C: </p>
                <p className="menu__span-origin">{parametres.main.feels_like}</p>
                <p className="menu__span-origin">Скорость ветра м/с: </p>
                <p className="menu__span-origin">{parametres.wind.speed}</p>
                <p className="menu__span-origin">Атмосферное давление[Гектопаскаль]: </p>
                <p className="menu__span-origin">{parametres.main.pressure}</p>
                <p className="menu__span-origin">Влажность[%]: </p>
                <p className="menu__span-origin">{parametres.main.humidity}</p>
              </div>
          </div>
      );
}

export default Menu;