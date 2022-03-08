import { useState } from "react"
import { languages, statuses, services } from "./data"

export default function useServicesController({ data: {} }) {
    const [values, setValues] = useState({
         
        staffWorkers: "",
        userCapacity: "",
        specialists: "",
       
    })
   
    const [status, setStatus] = useState(Object.values(statuses)[0])
     
    const [workingHours, setWorkingHour] = useState([])

    return {
        set: {
             
            
            workingHours: ([workingHour, status]) => {
                if (status) setWorkingHour([...workingHours, workingHour])
                else setWorkingHour(workingHours.filter(w => w !== workingHour))
            },
             
            status: setStatus,
          
            registerInput: (name, options = {}) => ({
                onChange: e => {
                    const { validator } = options

                    if (validator) {
                        const isValid = validator(e.target.value)
                        if (!isValid) return
                    }

                    setValues({ ...values, [name]: e.target.value })
                },
                value: values[name],
            }),
        },
        get: {
            data: () => {
                const data = JSON.parse(JSON.stringify(values))
                data.status = status
                   
                data.workingHours = workingHours
                
                return data
            },
        },
    }
}
