import { useState } from "react"

import { specialities, statuses } from "./data"

export default function useStaffController({ 
  data: {}, 
  defaultData = null, 
}) {
  const [values, setValues] = useState(!defaultData
    ?{
    name: "",
    email: "",
    mobile: "",
    description: "",
    charges: "",
    ownerId: localStorage.getItem("uid"),
  }:{
    name:defaultData.name,
    email:defaultData.email,
    mobile:defaultData.mobile,
    description:defaultData.description,
    charges:defaultData.charges,
    ownerId:defaultData.ownerId,
  })
  const [speciality, setSpecility] = useState(specialities[0])
  const [status, setStatus] = useState(Object.values(statuses)[0])
  const [workingHours, setWorkingHours] = useState([])

  return {
    set: {
      workingHours: ([workingHour, status]) => {
        if (status) setWorkingHours([...workingHours, workingHour])
        else setWorkingHours(workingHours.filter(w => w !== workingHour))
      },
      speciality: setSpecility,
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
        data.speciality = speciality
        data.workingHours = workingHours
        return data
      },
    },
  }
}
