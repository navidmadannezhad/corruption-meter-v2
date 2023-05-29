'use client'

import { useSelector } from "react-redux";
import LineChart from "./LineChart";
import { ranked_color } from "@utils/utils";
import { CircleLoader } from "react-spinners";

const Detail = () => {
    const countryDetail = useSelector((state: any) => state.corruption.data)
    const detailLoaded = useSelector((state: any) => state.corruption.loaded);
    const country_color = ranked_color(countryDetail.rank);

    return(
        <div className="w-full">
            {detailLoaded ? (
                <>
                    {countryDetail.rank ? (
                        <div className="h-[350px]">
                            <div className="text-6xl" style={{ color: country_color }}>
                                # {countryDetail.rank}
                            </div>
                            <div className="flex items-center">
                                <img src={`http://${countryDetail.flag_url}`} />
                                <div className="text-2xl mx-3" style={{ color: country_color }}>
                                    {countryDetail.country_name}
                                </div>
                            </div>
                            <div className="w-full mt-3">
                                <LineChart
                                    xData={countryDetail.chart_data.scores}
                                    yData={countryDetail.chart_data.years}
                                    color={country_color}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="h-[350px] w-full flex items-center justify-center">
                            <p>No data for the selected region</p>
                        </div>
                    )}
                </>
            ) : (
                <div className="h-[350px] w-full flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <CircleLoader
                            color="#1ea7fd"
                        />
                        <p className="mt-3">Go on! Select somewhere!</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detail;