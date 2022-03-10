import { useState } from "react"
import DataTable from "./DataTable"
import Feature from "./FeatureProduct/Feature"
import FeatureServices from "./FeatureService/Feature"

export default function Products() {
    const [activeComp, setActiveComp] = useState("marketing")

    switch (activeComp) {
        case "marketing":
            return <DataTable setActiveComp={setActiveComp} />
        case "feature":
            return <Feature setActiveComp={setActiveComp} />
        case "featureServices":
            return <FeatureServices setActiveComp={setActiveComp} />
    }
}
