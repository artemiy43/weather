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
      lat:-1,
      lon:-1
    }
  );

  const [parametres, setParametres] = React.useState({});

  const [loading, setLoading] = React.useState(false);


  const [isOpen, setIsOpen] = React.useState(false);
  const num = 0;


  React.useEffect(()=> {
    setLoading(true);
    Promise.resolve(api.getInfo(object.lat, object.lon))
    .then((res) => {
      handleParametres(res);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(setLoading(false))
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
        {loading ? (
          <Preloader/>
        ) : (
          <Menu isOpen={isOpen} parametres={parametres} handleIsOpen={handleIsOpen}/>
        )}
        {/* <Menu isOpen={isOpen} parametres={parametres} handleIsOpen={handleIsOpen}/> */}
        <div className="map__container page__container">
            <Maps num={num} onClick={handleMapClick}  onClickMap={handleParametres}/>
        </div>
      </main>
  );
}

export default Main;