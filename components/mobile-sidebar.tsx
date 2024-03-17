  
import { Menu } from "lucide-react";
import { SheetTrigger, Sheet, SheetContent } from "./ui/sheet";
import Sidebar from "./sidebar";

 export const MobileSidebar =()=> {

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white left-0"/>
            </SheetTrigger>
            <SheetContent side="left">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    )
 }