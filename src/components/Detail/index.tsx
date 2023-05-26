'use client'

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Chart from "./Chart";
import { ranked_color } from "@utils/utils";
import { CircleLoader } from "react-spinners";

const Detail = () => {
    const [detailLoaded, setDetailLoaded] = useState<boolean>(false);
    const countryDetail = useSelector((state: any) => state.corruption.data)
    const country_color = ranked_color(countryDetail.rank);
    
    useEffect(() => {
        setDetailLoaded(false);
        setTimeout(() => {
            setDetailLoaded(true);
        }, 500)
    }, [countryDetail])

    return(
        <div className="w-full">
            {detailLoaded ? (
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
                        <Chart
                            xData={countryDetail.corruption_data.scores}
                            yData={countryDetail.corruption_data.years}
                            color={country_color}
                        />
                    </div>
                </div>
            ) : (
                <div className="h-[400px] w-full flex items-center justify-center">
                    <CircleLoader
                        color="#1ea7fd"
                    />
                </div>
            )}
        </div>
    )
}

export default Detail;