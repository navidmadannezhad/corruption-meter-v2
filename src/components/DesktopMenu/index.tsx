import Detail from "@components/Detail";
import SimpleStatistics from "./SimpleStatistics";
import { ResultType } from "@customTypes/types";

interface Props{
    corruption_data: ResultType[];
}

const DesktopMenu = ({ corruption_data }: Props) => {
    return(
        <div className="h-[100%] bg-heavyDark flex items-center flex-col relative">
            <div className="py-6 border-b border-b-lightWhite w-11/12 text-center tracking-widest">
                Corruption-Meter-V2
            </div>

            <div className="w-11/12 mt-6">
                <Detail />
            </div>

            <div className="mt-6 w-11/12">
                <SimpleStatistics corruption_data={corruption_data} />
            </div>

            <div className="absolute bottom-[10px]">
                Done by navidmnzh
            </div>
        </div>
    )
}

export default DesktopMenu;