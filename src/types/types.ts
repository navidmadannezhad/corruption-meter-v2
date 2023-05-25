export interface ResultType{
    rank: number;
    country_name: string;
    flag_url: string;
    corruption_data: {
        years: number[];
        scores: number[];
    }
}