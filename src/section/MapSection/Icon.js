import L from 'leaflet';
import marker from "./marker.min.svg"

const iconPerson = new L.icon({
    iconUrl: marker,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]
});

export { iconPerson };