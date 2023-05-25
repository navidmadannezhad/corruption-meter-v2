import { getCorruptionData } from "@actions/corruption";
import { getGeoJSONData } from "@actions/corruption";
import { ResultType } from "@customTypes/types";
import DesktopMenu from "@components/DesktopMenu";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@components/Map"), { ssr: false })

const Home = async () => {
    const corruption_res = await getCorruptionData();
    const geojson_res = await getGeoJSONData();
    const corruption_data: ResultType = corruption_res.data;
    const geojson_data: any = geojson_res.data;

    return(
        <div className="flex items-start relative justify-between">
            <div className="hidden xl:block w-1/4 h-screen absolute left-0 top-0">
                <DesktopMenu />
            </div>
            <div className="h-screen w-3/4 overflow-x-hidden absolute right-0 top-0">
                <Map geojsonData={geojson_data} corruptionData={corruption_data} />
            </div>
        </div>
    )
}

export default Home;