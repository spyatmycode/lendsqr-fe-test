export interface FilterProps {
    selectedFilter: string;
    setSelectedFilter:React.Dispatch<React.SetStateAction<string>>;
    setShowFilter:React.Dispatch<React.SetStateAction<boolean>>;
    showFilter:boolean;
    filterName:string;
  

}