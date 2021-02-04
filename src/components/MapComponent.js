import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import './css/Map.css';

const MapComponent = ({latitude, longitude}) => {
    const [center, setCenter] = useState({lat: latitude, lng: longitude});
    const [zoom, setZoom] = useState(16);
    return (
        <div className="google-map" >
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Marker
                    lat={latitude}
                    lng={longitude}
                    name="Location"
                    color="blue"
                />
            </GoogleMapReact>
        </div>
    );
}

export default MapComponent;
