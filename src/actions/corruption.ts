import httpClient from "./httpClient";

export const getCorruptionData = () => {
    return httpClient().get("data.json");
}

export const getGeoJSONData = () => {
    return httpClient().get("geojson.json");
}