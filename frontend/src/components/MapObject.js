import React from 'react';
import Map, {Marker} from 'react-map-gl';
import PlaceIcon from '@mui/icons-material/Place';
import '../style/MapObject.css'

export default function MapObject({setClickLocation}) {
    const markers = [
        [49.253600, -122.982614, "burnaby"],
        [49.166592, -123.133568, "richmond"],
        [49.194751, -122.848482, "surrey"],
        [49.281876, -122.794220, "coquitlam"],
        [49.106371, -122.660839, "langley"],
        [49.091533, -123.028455, "delta"],
        [49.026965, -122.802483, "white rock"]
    ];

    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoiYW5kcmV3ZmVudG9uIiwiYSI6ImNsdTR0aDJ1ZDFkejAyam52OTRncjFlbzQifQ.2cfPtYm2bdvaMo9YBFfHaA"
            initialViewState={{
                latitude: 49.211826,
                longitude: -122.933802,
                zoom: 10
            }}
            style={{width: "50vw", height: "95vh", borderRadius: "25px", rightMargin:"2vw"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            {markers.map((marker) => {
                return (
                    <Marker latitude={marker[0]} longitude={marker[1]} onClick={() => setClickLocation(marker[2])}>
                        <PlaceIcon className='marker' />
                    </Marker>
                );
            })};
        </Map>
    );
}