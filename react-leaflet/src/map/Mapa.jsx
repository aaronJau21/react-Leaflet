import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './map.css'
import GeoJson from './geoJson.json'
import Geoman from './components/Geoman';

const Mapa = () => {
    const datos = GeoJson.features;

    const polygons = GeoJson.features.map((feature, index) => {
        const coordinates = feature.geometry.coordinates[0][0].map(coordenada => [coordenada[1], coordenada[0]]);
        const purpleOptions = { color: 'purple' };

        return (
            <Polygon key={index} pathOptions={purpleOptions} positions={[coordinates]}>
                <Popup>
                    <div className='order'>
                        <p>Id</p>
                        {feature.properties.id}
                    </div>
                    <div className='order'>
                        <p>Sector</p>
                        {feature.properties.sector}
                    </div>
                    <div className='order'>
                        <p>Valor</p>
                        {feature.properties.valor}
                    </div>
                </Popup>
                <Geoman />
            </Polygon>
        );
    });

    const coordenadas = [GeoJson.features[0].geometry.coordinates[0][0][0][0], GeoJson.features[0].geometry.coordinates[0][0][0][1]];
    const posicion = [coordenadas[1], coordenadas[0]];

    return (
        <>
            <MapContainer center={posicion} zoom={13} scrollWheelZoom={false} className='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {polygons}
            </MapContainer>
        </>
    );
}

export default Mapa;
