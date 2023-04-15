import React from "react";
import Maps from "./Map";
// import ZDMap from "./3DMap";
import { api } from "./api";
import Menu from "./Menu";
import Preloader from "./Preloader";
// import InfoTooltip from "./InfoTooltip";
function Main() {
  // const [lat, setlat] = React.useState(0);
  // const [lon, setlon] = React.useState(0);
  const [object, setObject] = React.useState(
    {
      lat:0,
      lon:0
    }
  );

  const [parametres, setParametres] = React.useState({});

  const [finished, setfinished] = React.useState(false);


  const [isOpen, setIsOpen] = React.useState(false);
  const num = 0;


  React.useEffect(()=> {
    Promise.resolve(api.getInfo(object.lat, object.lon))
    .then((res) => {
      handleParametres(res);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(setfinished(true))
  },[object]);
  

  function handleIsOpen(){
    setIsOpen(!isOpen);
  }

  function handleMapClick(X, Y) {
    // setlat(X);
    // setlon(Y);
    setObject({
      lat:X,
      lon:Y
    })
  }

  function handleParametres(parametres) {
    setParametres(parametres);
  }

  return(
      <main className="content">
        <Menu finished={finished} isOpen={isOpen} parametres={parametres} handleIsOpen={handleIsOpen}/>
        <div className="map__container page__container">
            <Maps num={num} onClick={handleMapClick}  onClickMap={handleParametres}/>
        </div>
      </main>
  );
}

export default Main;