import { Response } from "./context";

export interface ActionsProps{
    id: string;
    selectedAction: string;
    setSelectedAction:React.Dispatch<React.SetStateAction<string>>;
    setShowAction:React.Dispatch<React.SetStateAction<boolean>>;
    showAction:boolean;
    actionName:string;


    
}