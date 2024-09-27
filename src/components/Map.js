import { useRef, useEffect } from "react";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
function Maps(props) {
  const num = props.num;
  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        portalItem: {
          id: "aa1d3f80270146208328cf66d022e09c",
        },
      });

      const view = new MapView({
        container: mapRef.current,
        map: webmap,
        center: [76.057852574651, 17.145581642251],
        zoom: 3,
      });

      const bookmarks = new Bookmarks({
        view,
      });

      const bkExpand = new Expand({
        view,
        content: bookmarks,
        expanded: true,
      });

      // Add the widget to the top-right corner of the view
      view.ui.add(bkExpand, "top-right");

      // bonus - how many bookmarks in the webmap?
      view.when(() => {
        if (webmap.bookmarks && webmap.bookmarks.length) {
          console.log("Bookmarks: ", webmap.bookmarks.length);
        } else {
          console.log("No bookmarks in this webmap.");
        }
      });
      view.on("click", function (event) {
        props.onClick(
          event.mapPoint.latitude.toFixed(12),
          event.mapPoint.longitude.toFixed(12)
        );
      });
    }
  }, [mapRef, num]);

  return <div className="webmap" ref={mapRef} />;
}

export default Maps;

// center: [76.057852574651, 17.145581642251],
//         zoom: 3

// view.on("click", function(event) {
//   props.onClick(event.mapPoint.latitude.toFixed(12),event.mapPoint.longitude.toFixed(12));
// });
