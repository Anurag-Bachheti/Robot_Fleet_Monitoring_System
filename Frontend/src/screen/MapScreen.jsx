import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const activeIcon = new Icon({
    iconUrl: "./src/assets/active.svg",
    iconSize: [15, 15]
});

const inActiveIcon = new Icon({
    iconUrl: "./src/assets/inactive.svg",
    iconSize: [15, 15]
});
const MapScreen = ({ data }) => {
    return (
        <MapContainer center={[12.931758, -7.110705]} zoom={1}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {
                data && data.map(obj => (
                    obj.status == true ? (
                        <Marker
                            key={obj.id}
                            position={[
                                obj.location.latitude,
                                obj.location.longitude
                            ]}
                            icon={activeIcon}
                        />
                    ) : (
                        <Marker
                            key={obj.id}
                            position={[
                                obj.location.latitude,
                                obj.location.longitude
                            ]}
                            icon={inActiveIcon}
                        />
                    )
                ))
            }
        </MapContainer>

    );
};


export default MapScreen;