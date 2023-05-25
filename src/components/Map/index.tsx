'use client'

import { LatLngExpression } from "leaflet";
import { MapContainer,
     Popup,
     Marker,
     TileLayer,
     GeoJSON
} from "react-leaflet";

type Props = {
    geojsonData: any;
}

const mapOptions = {
    zoom: 3,
    center: [55.9464418,8.1277591] as LatLngExpression,
    options:{
        noWrap: true,
        maxBounds: [
            [-90, -180],
            [90, 180]
        ],
        minZoom: 3,
        maxZoom: 5,
    },
    scrollWheelZoom: true
}

const Map = ({ geojsonData }: Props) => {
    return(
        <MapContainer
            { ...mapOptions }
            style={{ width: "100%", height: "100vh" }}
        >
            <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF2aWRtbnpoMTExIiwiYSI6ImNsMTdsYTRsNzE1bHgzZGthMWppNTdscTkifQ.cimHgKp_fzMY5v5roiDaOA" />
            <GeoJSON data={geojsonData} />
        </MapContainer>
    )
}

export default Map;