import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup,
  ZoomControl,
  LayersControl,
  Marker,
  LayerGroup,
  Circle,
  FeatureGroup,
  Rectangle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import GeoJson from "./geoJson.json";
import Geoman from "./components/Geoman";

const Mapa = () => {
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  const polygons = GeoJson.features.map((feature, index) => {
    const coordinates = feature.geometry.coordinates[0][0].map((coordenada) => [
      coordenada[1],
      coordenada[0],
    ]);
    const purpleOptions = { color: "purple" };

    return (
      <Polygon
        key={index}
        pathOptions={purpleOptions}
        positions={[coordinates]}
      >
        <Popup>
          <div className="order">
            <p>Id</p>
            {feature.properties.id}
          </div>
          <div className="order">
            <p>Sector</p>
            {feature.properties.sector}
          </div>
          <div className="order">
            <p>Valor</p>
            {feature.properties.valor}
          </div>
        </Popup>
        <Geoman />
      </Polygon>
    );
  });

  const coordenadas = [
    GeoJson.features[0].geometry.coordinates[0][0][0][0],
    GeoJson.features[0].geometry.coordinates[0][0][0][1],
  ];
  const posicion = [coordenadas[1], coordenadas[0]];

  return (
    <div className="mapStyle">
      <MapContainer
        center={posicion}
        zoom={13}
        scrollWheelZoom={true}
        className="map "
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />
        <img
          src="http://13.59.46.236/img/logo.png"
          alt=""
          className="logoStyle"
        />
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        {polygons}
        <LayersControl position="topright">
          <LayersControl.Overlay name="Marker with popup">
            <Marker position={posicion}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </LayersControl.Overlay>
          <LayersControl.BaseLayer checked name="Layer group with circles">
            <LayerGroup>
              <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'"
                attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
              />
            </LayerGroup>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Layer group with circles">
            <LayerGroup>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayerGroup>
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="Feature group">
            <FeatureGroup pathOptions={{ color: "purple" }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default Mapa;
