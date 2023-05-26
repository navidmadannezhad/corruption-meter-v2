import { ResultType } from "@customTypes/types";

interface Props{
    corruption_data: ResultType[];
}

const SimpleStatistics = ({ corruption_data }: Props) => {
    let top_ranks = corruption_data.slice(0, 10);
    let bottom_ranks = corruption_data.slice(corruption_data.length - 10, corruption_data.length)

    return (
        <div className="w-full flex justify-between items-start">
            <div className="top-ranks">
                <p className="font-raleway-bold text-sm mb-3">Least Corrupt</p>
                {top_ranks && top_ranks.map((rank: any, i: number) => (
                    <div className="flex items-center my-1">
                        <span className="text-sm mx-1">{rank.rank}</span>
                        <img src={`http://${rank.flag_url}`} alt={rank.country_name} className="w-[20px] mx-2" />
                        <span className="text-sm mx-1">{rank.country_name}</span>
                    </div>
                ))}
            </div>
            <div className="bottom-ranks">
                <p className="font-raleway-bold text-sm mb-3">Most Corrupt</p>
                {bottom_ranks && bottom_ranks.map((rank: any, i: number) => (
                    <div className="flex items-center my-1">
                        <span className="text-sm mx-1">{rank.rank}</span>
                        <img src={`http://${rank.flag_url}`} alt={rank.country_name} className="w-[20px] mx-2" />
                        <span className="text-sm mx-1">{rank.country_name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SimpleStatistics;