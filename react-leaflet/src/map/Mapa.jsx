import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './map.css'
import GeoJson from './geoJson.json'

const Mapa = () => {
    const coordenadas = [GeoJson.features[0].geometry.coordinates[0][0][0][0], GeoJson.features[0].geometry.coordinates[0][0][0][1]]
    const posicion = [coordenadas[1], coordenadas[0]]


    const Arraycoordenadas1 = GeoJson.features[0].geometry.coordinates[0][0];
    const Arraycoordenadas2 = GeoJson.features[1].geometry.coordinates[0][0];
    const Arraycoordenadas3 = GeoJson.features[2].geometry.coordinates[0][0];
    const Arraycoordenadas4 = GeoJson.features[3].geometry.coordinates[0][0];
    const Arraycoordenadas5 = GeoJson.features[4].geometry.coordinates[0][0];
    const Arraycoordenadas6 = GeoJson.features[5].geometry.coordinates[0][0];
    const Arraycoordenadas7 = GeoJson.features[6].geometry.coordinates[0][0];
    const Arraycoordenadas8 = GeoJson.features[7].geometry.coordinates[0][0];
    const Arraycoordenadas9 = GeoJson.features[8].geometry.coordinates[0][0];
    const Arraycoordenadas10 = GeoJson.features[9].geometry.coordinates[0][0];
    const Arraycoordenadas11 = GeoJson.features[10].geometry.coordinates[0][0];
    const Arraycoordenadas12 = GeoJson.features[11].geometry.coordinates[0][0];



    const cambiarPosicion = Arraycoordenadas1.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion2 = Arraycoordenadas2.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion3 = Arraycoordenadas3.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion4 = Arraycoordenadas4.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion5 = Arraycoordenadas5.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion6 = Arraycoordenadas6.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion7 = Arraycoordenadas7.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion8 = Arraycoordenadas8.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion9 = Arraycoordenadas9.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion10 = Arraycoordenadas10.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion11 = Arraycoordenadas11.map(coordenada => [coordenada[1], coordenada[0]]);
    const cambiarPosicion12 = Arraycoordenadas12.map(coordenada => [coordenada[1], coordenada[0]]);
    const multiPolygon = [
        [
            cambiarPosicion
        ],
        [
            cambiarPosicion2
        ],
        [
            cambiarPosicion3
        ],
        [
            cambiarPosicion4
        ],
        [
            cambiarPosicion5
        ],
        [
            cambiarPosicion6
        ],
        [
            cambiarPosicion7
        ],
        [
            cambiarPosicion8
        ],
        [
            cambiarPosicion9
        ],
        [
            cambiarPosicion10
        ],
        [
            cambiarPosicion11
        ],
        [
            cambiarPosicion12
        ]
    ]

    const purpleOptions = { color: 'purple' }

    return (
        <>
            <MapContainer center={posicion} zoom={13} scrollWheelZoom={false} className='map'>
                {/* Capa de azulejos (tiles) del mapa */}


                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
            </MapContainer>
        </>
    )
}

export default Mapa