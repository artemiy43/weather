import React from "react";
import Maps from "./Map";
import { api } from "./api";
import Menu from "./Menu";
function Main() {
  
  const [object, setObject] = React.useState(
    {
      lat:55.74,
      lon:37.6
    }
  );

  const [parametres, setParametres] = React.useState({});

  const [isOpen, setIsOpen] = React.useState(false);
  const num = 0;


  React.useEffect(()=> {
    api.getInfo(object.lat, object.lon)
    .then((res) => {
      handleParametres(res);
    })
    .catch(err => {
      console.log(err);
    });
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
        <Menu isOpen={isOpen} parametres={parametres} handleIsOpen={handleIsOpen}/>
        <div className="map__container page__container">
            <Maps num={num} onClick={handleMapClick}  onClickMap={handleParametres}/>
        </div>
      </main>
  );
}

export default Main;