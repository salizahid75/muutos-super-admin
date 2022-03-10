import { useEffect, useState } from "react"
import Container from "components/Container"
import TopBar from "components/TopBar"
import FiltersBar from "components/FiltersBar"
import usePage from "hooks/usePage"

import { Heading, Table } from "ant"

import { columns, data } from "./data"
import theme from "styles/Theme"
import { GetAllServices } from "api/services"
import CompLoading from "components/CompLoading"

export default function Wishlisted({ setActiveComp }) {
    usePage("Most Wishlisted")
    const [services, setServices] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const makeCall = async () => {
            const res = await GetAllServices('isFeatured=1')
            if (res.status === "active") {
                console.log(res.data)
                setServices(res.data)
            }
            setLoading(false)
        }

        makeCall()
    }, [])

    const handleSearch = async (data) => {
        try {
            const res = await GetAllServices(`isFeatured=1&search=${data}`)
            if (res.status === "active") {
                console.log(res.data)
                setServices(res.data)
            }
        } catch (error) { }
    }

    const handleFilter = async (data) => {
        try {
            const res = await GetAllServices(`isFeatured=1&filter=${data}`)
            if (res.status === "active") {
                console.log(res.data)
                setServices(res.data)
            }
        } catch (error) { }
    }

    if (isLoading) return <CompLoading />;

    return (
        <Container>
            <div>
                <TopBar
                    breadcrumb={{
                        Services: () => setActiveComp("services"),
                        "Most Wishlisted": () => {},
                    }}
                />
                <FiltersBar
                    onSearchChange={s => handleSearch(s.target.value)}
                    sortBy={{
                        defaultValue: "All",
                        onChange: f => handleFilter(f),
                        filters: ["All", "New", "Old"],
                    }}
                />
                <Heading
                    style={{ marginTop: "40px", marginLeft: "5px" }}
                    size='24px'
                    weight={theme.font.weight.semiBold}>
                    Featured Services
                </Heading>
                <Table
                    pagination={{
                        pageSize: 10,
                        hideOnSinglePage: true,
                    }}
                    columns={columns}
                    dataSource={services}
                />
            </div>
            <div></div>
        </Container>
    )
}
