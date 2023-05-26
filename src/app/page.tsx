import { getCorruptionData } from "@actions/corruption";
import { getGeoJSONData } from "@actions/corruption";
import { ResultType } from "@customTypes/types";
import DesktopMenu from "@components/DesktopMenu";
import dynamic from "next/dynamic";
import { ranked_geojson } from "@utils/utils";

const Map = dynamic(() => import("@components/Map"), { ssr: false })

const Home = async () => {
    const corruption_res = await getCorruptionData();
    const geojson_res = await getGeoJSONData();
    
    const corruption_data: ResultType[] = corruption_res.data;
    const geojson_data: any = geojson_res.data;

    const geojson = ranked_geojson(geojson_data, corruption_data);

    return(
        <div className="flex items-start relative justify-between">
            <div className="hidden xl:block w-1/4 h-screen absolute left-0 top-0">
                <DesktopMenu corruption_data={corruption_data} />
            </div>
            <div className="h-screen xl:w-3/4 w-full overflow-x-hidden absolute right-0 top-0">
                <Map geojsonData={geojson} />
            </div>
        </div>
    )
}

export default Home;