'use client'

import { ranked_color } from "@utils/utils";
import { FeatureGroup, LatLngExpression, Layer } from "leaflet";
import { MapContainer,
     TileLayer,
     GeoJSON
} from "react-leaflet";

type Props = {
    geojsonData: any;
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
    const onEachFeature: any = (feature: FeatureGroup, layer: Layer) => {
        layer.on({
            click: (e) => {
                console.log(e.target.feature)
            },
        })
    }

    const featureStyle = (feature: any) => {
        return {
            color: ranked_color(feature.properties.corruption_data.rank),
            fillColor: ranked_color(feature.properties.corruption_data.rank),
            weight: 2,
            fillOpacity: 0.5
        }
    }

    return(
        <MapContainer { ...mapOptions }>
            <TileLayer url={tileURL} />
            <GeoJSON data={geojsonData} onEachFeature={onEachFeature} style={featureStyle as any} />
        </MapContainer>
    )
}

export default Map;