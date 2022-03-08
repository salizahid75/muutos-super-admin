import { useState } from "react"
import DataTable from "./DataTable"
import PayBack from "./OrderPayBack/PayBack"
 

export default function Finance() {
    const [activeComp, setActiveComp] = useState("finance")

    switch (activeComp) {
        case "finance":
            return <DataTable setActiveComp={setActiveComp} />
        case "payback":
            return <PayBack setActiveComp={setActiveComp} />
      
        }
}
