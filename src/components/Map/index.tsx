'use client'

import { loadDetail } from "@redux/corruptionSlice";
import { ranked_color } from "@utils/utils";
import { MapContainer,
     TileLayer,
     GeoJSON
} from "react-leaflet";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import useBreakPoint from "@hooks/useBreakPoint";
import PopupResolver from "@components/PopupResolver";
import { FeatureGroup, LatLngExpression, Layer } from "leaflet";

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
    minZoom: 2,
    maxZoom: 5,
    scrollWheelZoom: true,
    style: { width: "100%", height: "100vh" }
}

const tileURL = "https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF2aWRtbnpoMTExIiwiYSI6ImNsMTdsYTRsNzE1bHgzZGthMWppNTdscTkifQ.cimHgKp_fzMY5v5roiDaOA";

const Map = ({ geojsonData }: Props) => {
    const dispatch = useDispatch();
    const map = useRef(null);
    const isMobile = useBreakPoint(1278);
    const [markerPosition, setMarkerPosition] = useState<LatLngExpression>([0,0])

    const onEachFeature: any = (feature: FeatureGroup, layer: Layer) => {
        layer.on({
            click: (e) => {
                dispatch(loadDetail(e.target.feature.properties.corruption_data))
                if(isMobile){
                    setMarkerPosition([
                        e.latlng.lat,
                        e.latlng.lng
                    ])
                    e.target._map.flyTo([
                        e.latlng.lat,
                        e.latlng.lng
                    ], 3, {
                        animate: true,
                        duration: 1
                    })
                }
            },
            mouseover: (e) => {
                e.target.setStyle({
                    'fillOpacity': 0.6
                });
            },
            mouseout: (e) => {
                e.target.setStyle({
                    'fillOpacity': 0.4
                });
            }
        })
    }

    const featureStyle = (feature: any) => {
        return {
            color: ranked_color(feature.properties.corruption_data.rank),
            fillColor: ranked_color(feature.properties.corruption_data.rank),
            weight: 2,
            fillOpacity: 0.4,
        }
    }

    return(
        <MapContainer whenReady={((e: any) => {map.current = e.target}) as any} { ...mapOptions }>
            <TileLayer url={tileURL} />
            <GeoJSON data={geojsonData} onEachFeature={onEachFeature} style={featureStyle as any} />

            {isMobile ? (
                <PopupResolver position={markerPosition} />
            ) : null}

            {isMobile ? (
                <div className="absolute bottom-0 text-xs z-[9999]">
                    done by <a className="mx-1" href="https://www.linkedin.com/in/navidmnzh/" target="_blank">navidmnzh</a>
                </div>
            ) : null}
        </MapContainer>
    )
}

export default Map;