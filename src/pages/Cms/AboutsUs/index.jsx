import { useEffect } from "react"
import { useState } from "react"
import DataTable from "./DataTable"
import Upload from "./Upload"
import CompLoading from "components/CompLoading"
import { CallUpdateServiceById, GetAllServices, GetAllServicesByDate, CallUpdateServiceFieldById } from "api/services"
import Wishlisted from "./Wishlisted"
export default function Services() {
    const [activeComp, setActiveComp] = useState("services")
    const [services, setServices] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [active, setActive] = useState('all')

    useEffect(() => {
        const makeCall = async () => {
            const res = await GetAllServices()
            if (res.status === "active") {
                console.log(res.data)
                setServices(res.data)
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
            await CallUpdateServiceById(formData);
        } catch (error) { }
    }

    const onisApprovedChange = async (value, id) => {
        let formData = new FormData()
        formData.append("id", id)
        formData.append("key", "isApproved")
        formData.append("value", value)
        try {
            if (value == '0') {
                var v = false;
                await CallUpdateServiceFieldById({ field: 'isApproved', value: v, id: id });
            } else {
                var v = true;
                await CallUpdateServiceFieldById({ field: 'isApproved', value: v, id: id });
            }
        } catch (error) { }
    }

    const onServiceAdd = service => {
        setServices([service, ...services])
        setActiveComp("services")
        window.scrollTo(0, 0)
    }

    const filterServicesByDate = async (date) => {
        try {
            setActive(date);
            setLoading(true)
            const formdata = new FormData();
            formdata.append('query', date)
            const res = await GetAllServicesByDate(formdata)
            if (res.status === "active") {
                setServices(res.data)
            }
        } catch (error) { }
        setLoading(false)
    }

    const handleSearch = async (data) => {
        try {
            const res = await GetAllServices(`search=${data}`)
            if (res.status === "active") {
                console.log(res.data)
                setServices(res.data)
            }
        } catch (error) { }
    }

    const handleFilter = async (data) => {
        try {
            const res = await GetAllServices(`filter=${data}`)
            if (res.status === "active") {
                console.log(res.data)
                setServices(res.data)
            }
        } catch (error) { }
    }

    if (isLoading) return <CompLoading />;

    const match = activeComp.component || activeComp

    switch (match) {
        case "services":
            return <DataTable
                active={active}
                setActiveComp={setActiveComp}
                services={services}
                handleSearch={handleSearch}
                handleFilter={handleFilter}
                onStatusChange={onStatusChange}
                handleDateFilter={filterServicesByDate}
                onisApprovedChange={onisApprovedChange}
            />

        case "upload":
            return <Upload setActiveComp={setActiveComp} />

        case "wishlisted":
            return <Wishlisted setActiveComp={setActiveComp} />

        case "update":
            return (
                <Upload
                    setActiveComp={setActiveComp}
                    isEdit={true}
                    service={services.find(p => p.id == activeComp.props.serviceId)}
                />
            )

    }
}
