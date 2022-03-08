import { useState } from "react"
import DataTable from "./DataTable"
import OrderRequests from "./OrderRequests"

export default function Orders() {
    const [activeComp, setActiveComp] = useState("orders")

    switch (activeComp) {
        case "orders":
            return <DataTable setActiveComp={setActiveComp} />
        case "requests":
            return <OrderRequests setActiveComp={setActiveComp} />
    }
}
