import { useState, useEffect } from "react"
import DataTable from "./DataTable"
import UploadStaff from "./UploadStaff"
import CompLoading from "components/CompLoading"
import { CallUpdateStaffById, GetAllStaff, GetAllStaffByDate, FilterStaff } from "api/staff"

export default function Products() {
  const [activeComp, setActiveComp] = useState("staff")
  const [staffs, setStaffs] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [active, setActive] = useState("all")

  useEffect(() => {
    const makeCall = async () => {
      const res = await GetAllStaff(`ownerId=${localStorage.getItem('uid')}`)
      if (res.status === "active") {
        console.log(res.data)
        setStaffs(res.data)
      }
      setLoading(false)
    }

    makeCall()
  }, [])

  const onStatusChange = async (value, id) => {
    let formData = new FormData()
    formData.append("id", id)
    formData.append("key", "status")
    formData.append("value", value)
    try {
      await CallUpdateStaffById(formData)
    } catch (error) {}
  }

  const onStaffAdd = staff => {
    setStaffs([staff, ...staffs])
    setActiveComp("staff")
    window.scrollTo(0, 0)
  }

  const filterStaffByDate = async date => {
    try {
      setActive(date)
      setLoading(true)
      const formdata = new FormData()
      formdata.append("query", date)
      const res = await GetAllStaffByDate(formdata)
      if (res.status === "active") {
        setStaffs(res.data)
      }
    } catch (error) {}
    setLoading(false)
  }

  const handleSearch = async data => {
    try {
      const res = await FilterStaff(`search=${data}&ownerId=${localStorage.getItem('uid')}`)
      if (res.status === "active") {
        console.log(res.data)
        setStaffs(res.data)
      }
    } catch (error) {}
  }

  const handleFilter = async data => {
    try {
      const res = await FilterStaff(`filter=${data}&ownerId=${localStorage.getItem('uid')}`)
      if (res.status === "active") {
        console.log(res.data)
        setStaffs(res.data)
      }
    } catch (error) {}
  }

  if (isLoading) return <CompLoading />

  const match = activeComp.component || activeComp

  switch (match) {
    case "staff":
      return (
        <DataTable
          active={active}
          setActiveComp={setActiveComp}
          staffs={staffs}
          handleSearch={handleSearch}
          handleFilter={handleFilter}
          onStatusChange={onStatusChange}
          handleDateFilter={filterStaffByDate}
        />
      )
    case "upload":
      return (
        <UploadStaff
          setActiveComp={setActiveComp}
          onStaffAdd={onStaffAdd}
        />
      )
    case "update":
      return (
        <UploadStaff
          setActiveComp={setActiveComp}
          isEdit={true}
          staff={staffs.find(p => p.id == activeComp.props.staffId)}
        />
      )
  }
}
