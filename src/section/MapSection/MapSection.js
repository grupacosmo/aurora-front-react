// import React, {Component, useState} from "react"
// import 'leaflet/dist/leaflet.css';
// import "./MapSection.css"
// import {MapContainer, TileLayer, Marker, useMapEvents} from "react-leaflet"
// import {Popup} from "leaflet";
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// import Leaflet from 'leaflet';
//
//
//
//
// function LocationMarker() {
//     const [position, setPosition] = useState(null)
//     const map = useMapEvents({
//         click(e) {
//             console.log(e.latlng)
//         },
//     })
//
//     return position === null ? null : (
//         <Marker position={position}>
//             <Popup>You are here</Popup>
//         </Marker>
//     )
// }
//
// class MapSection extends Component {
//
//     DefaultIcon = Leaflet.icon({
//         iconSize: [25, 41],
//         iconAnchor: [10, 41],
//         popupAnchor: [2, -40],
//         iconUrl: icon,
//         shadowUrl: iconShadow
//     });
//
//     render () {
//         return (
//             <MapContainer
//                 center={{ lat: 50.07093834931043, lng: 19.982242594705898 }}
//                 zoom={13}
//                 className="map"
//                 >
//                 <TileLayer
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <LocationMarker />
//                 <Marker position={[50.07093834931043, 19.982242594705898]} icon={this.DefaultIcon}>
//                     <Popup>
//                         A pretty CSS3 popup. <br /> Easily customizable.
//                     </Popup>
//                 </Marker>
//             </MapContainer>
//         )
//     }
// }
//
// export default MapSection

import React, {Component} from 'react';
import "./MapSection.css"
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from './leaf-green.png';
import leafShadow from './leaf-shadow.png'



class App extends Component {

    state = {
        greenIcon: {
            lat: 35.787449,
            lng: -78.6438197,
        },
        redIcon: {
            lat: 35.774416,
            lng: -78.633271,
        },
        orangeIcon: {
            lat: 35.772790,
            lng: -78.652305,
        },
        zoom: 13
    }


    grenIcon = L.icon({
        iconUrl: leafGreen,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76]
    });

    redIcon = L.icon({
        iconUrl: leafGreen,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });

    orangeIcon = L.icon({
        iconUrl: leafGreen,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });

    render(){
        const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
        const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
        const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
        return (
            <MapContainer className="map" center={positionGreenIcon} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={positionGreenIcon} icon={this.grenIcon}>
                    <Popup>
                        I am a green leaf
                    </Popup>
                </Marker>
                <Marker position={positionRedIcon} icon={this.redIcon}>
                    <Popup>
                        I am a red leaf
                    </Popup>
                </Marker>
                <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
                    <Popup>
                        I am an orange leaf
                    </Popup>
                </Marker>
            </MapContainer>
        );
    }
}

export default App;
