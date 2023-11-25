import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './mapa.css'
import data from './puntosGeo.json'
import { useEffect, useState } from 'react'

export const Mapa = () => {
    const position = [51.505, -0.09]
    const [puntos, setPuntos] = useState([])

    const construirPunto = () => {
        let arreglo = [];
        data.features.forEach((value, key) => {
            arreglo.push(
                <Marker position={[value.geometry.coordinates[1], value.geometry.coordinates[0]]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            )
        })

        setPuntos(arreglo)
    }

    useEffect(() => {
        construirPunto()
    }, [data])

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='mapa'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {puntos}
        </MapContainer>
    )
}
