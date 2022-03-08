import { useState } from "react"
import DataTable from "./DataTable"
import EditStatus from "./EditStatus/EditStatus"
import axios from "axios"
export default function Categories() {
    const [activeComp, setActiveComp] = useState("operations")
    const onStatusChange = async (value, id) => {
        var data = {
            id:id,
            key:'categoryStatus',
            value:value
        }
        try {
          const updateStatus = await axios.post(`http://localhost:8080/api/updateCategoryFieldById`, data);
          if(updateStatus){
              window.location.reload();
          }
        } catch (error) {}
    }
    switch (activeComp) {
        case "operations":
            return <DataTable setActiveComp={setActiveComp} onStatusChange={onStatusChange}/>
        case "editStatus":
            return <EditStatus setActiveComp={setActiveComp} />
    }
}
