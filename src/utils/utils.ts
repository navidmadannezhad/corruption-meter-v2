import { ResultType } from "@customTypes/types";

let colors = {
    healthy: "#58ee9e",
    good: "#b0ee58",
    not_bad: "#eed358",
    bad: "#ee8058",
    fucked_up: "#ee5858",
    default: "#ffffff"
}

let messages = {
    healthy: "I enjoy living here",
    good: "Nice country with a little Corruption!",
    not_bad: "Country is not healthy.",
    bad: "Country is Corrupt!",
    fucked_up: "Paradise of Corruption!!"
}

const ranked_color = (rank: number) => {
    switch(true){
        case rank < 36 && rank >= 0:
            return colors.healthy;
            
        case rank < 72 && rank >= 36:
            return colors.good;
            
        case rank < 108 && rank >= 72:
            return colors.not_bad;
            
        case rank < 144 && rank >= 108:
            return colors.bad;
            
        case rank >= 144:
            return colors.fucked_up;

        default:
            return colors.default;
            
    }
}

const modal_message = (rank: number) => {
    switch(true){
        case rank < 36 && rank >= 0:
            return messages.healthy;
            
        case rank < 72 && rank >= 36:
            return messages.good;
            
        case rank < 108 && rank >= 72:
            return messages.not_bad;
            
        case rank < 144 && rank >= 108:
            return messages.bad;
            
        case rank >= 144:
            return messages.fucked_up;
            
    }
}

const ranked_geojson = (geojson: any, corruptionData: ResultType[]) => {
    let result = geojson.features.map((geo: any) => {

        let geoJsonFound = false;

        corruptionData.forEach((data: any) => {
            if(data.country_name === geo.properties.ADMIN){
                geoJsonFound = true;
                geo.properties.corruption_data = {
                    rank: data.rank,
                    country_name: data.country_name,
                    flag_url: data.flag_url,
                    chart_data: data.corruption_data,
                }
            }
        })

        if(!geoJsonFound){
            geo.properties.corruption_data = {
                rank: null,
                country_name: null,
                flag_url: null,
                chart_data: null,
            }
        }

        return geo;
    })
    return result;
}

export { ranked_color, modal_message, ranked_geojson };