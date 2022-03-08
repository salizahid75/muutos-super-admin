import { useState } from "react"
import DataTable from "./DataTable"
import EditStatus from "./EditStatus/EditStatus"

export default function Operations() {
    const [activeComp, setActiveComp] = useState("operations")

    switch (activeComp) {
        case "operations":
            return <DataTable setActiveComp={setActiveComp} />
        case "editStatus":
            return <EditStatus setActiveComp={setActiveComp} />
    }
}
