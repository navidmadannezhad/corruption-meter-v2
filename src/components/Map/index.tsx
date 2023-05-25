'use client'

import { ResultType } from "@customTypes/types";
import { LatLngExpression } from "leaflet";
import { MapContainer,
     TileLayer,
     GeoJSON
} from "react-leaflet";

type Props = {
    geojsonData: any;
    corruptionData: ResultType;
}

const mapOptions = {
    zoom: 3,
    center: [55.9464418,8.1277591] as LatLngExpression,
    noWrap: true,
    maxBounds: [
        [-90, -180],
        [90, 180]
    ] as any,
    minZoom: 3,
    maxZoom: 5,
    scrollWheelZoom: true,
    style: { width: "100%", height: "100vh" }
}

const tileURL = "https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF2aWRtbnpoMTExIiwiYSI6ImNsMTdsYTRsNzE1bHgzZGthMWppNTdscTkifQ.cimHgKp_fzMY5v5roiDaOA";

const Map = ({ geojsonData }: Props) => {
    return(
        <MapContainer { ...mapOptions }>
            <TileLayer url={tileURL} />
            <GeoJSON data={geojsonData} />
        </MapContainer>
    )
}

export default Map;