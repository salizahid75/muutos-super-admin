import { useState } from "react"
import DataTable from "./DataTable"
import UploadArticle from "./UploadArticle"

export default function Articles() {
    const [activeComp, setActiveComp] = useState("articles")

    switch (activeComp) {
        case "articles":
            return <DataTable setActiveComp={setActiveComp} />
        case "upload":
            return <UploadArticle setActiveComp={setActiveComp} />
    }
}
