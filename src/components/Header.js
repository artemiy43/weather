import logopath from '../images/weather-app (1).png';
function Header() {
    return(
    <header className="header page__container">
      <img src={logopath} alt='logo'/>
      <p className="header__text">Weather-project</p>
    </header>
  );
}

export default Header;