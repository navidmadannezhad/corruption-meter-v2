import { Marker, Popup } from "react-leaflet"
import Detail from "@components/Detail"
import { LatLngExpression } from "leaflet";
import { useEffect, useRef } from "react";
import "leaflet/dist/images/marker-shadow.png";
import { useSelector } from "react-redux";
import { icon, Marker as MarkerType } from "leaflet";

interface Props{
    position: LatLngExpression;
}

const ICON = icon({
    iconUrl: "/images/marker.png",
    iconSize: [32, 40],
})

const PopupResolver = ({ position }: Props) => {
    const marker = useRef<MarkerType>(null);
    const detailLoaded = useSelector((state: any) => state.corruption.loaded)

    useEffect(() => {
        if(marker && detailLoaded){
            marker.current!.openPopup();
        }
    }, [position])

    return(
        <>
            {detailLoaded ? (
                <Marker
                    ref={marker}
                    position={position}
                    icon={ICON}
                >
                    <Popup>
                        <Detail />
                    </Popup>
                </Marker>
            ) : null}
        </>
    )
}

export default PopupResolver;