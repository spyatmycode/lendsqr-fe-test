import { Response } from "./context";

export interface FilterProps {
    selectedFilter: string;
    setSelectedFilter:React.Dispatch<React.SetStateAction<string>>;
    setShowFilter:React.Dispatch<React.SetStateAction<boolean>>;
    showFilter:boolean;
    filterName:string;
    passedData: Response[];
    setPassedData:React.Dispatch<React.SetStateAction<Response[]>>;
  

}