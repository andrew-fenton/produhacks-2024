import React, { useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import PlaceIcon from '@mui/icons-material/Place';

export default function MapObject() {
    const [clickLocation, setClickLocation] = useState("");

    function handleMarkerClick(location) {
        console.log(location);
    }

    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoiYW5kcmV3ZmVudG9uIiwiYSI6ImNsdTR0aDJ1ZDFkejAyam52OTRncjFlbzQifQ.2cfPtYm2bdvaMo9YBFfHaA"
            initialViewState={{
                latitude: 49.2617,
                longitude: -123.2489,
                zoom: 15
            }}
            style={{width: "50vw", height: "95vh", borderRadius: "25px"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <Marker latitude={49.2617} longitude={-123.2489} onClick={() => handleMarkerClick("ICCS")}>
                <PlaceIcon />
            </Marker>
            <Marker latitude={49} longitude={-123} onClick={() => handleMarkerClick("Other")}>
                <PlaceIcon />
            </Marker>
        </Map>
    );
}