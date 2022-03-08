import { useEffect, useState } from "react"
import { Heading, Table } from "ant"
import { CallUpdateProductById, GetAllProducts, GetAllProductsByDate } from "api/products"

import Container from "components/Container"
import TopBar from "components/TopBar"
import FiltersBar from "components/FiltersBar"
import usePage from "hooks/usePage"
import CompLoading from "components/CompLoading"

import { columns, data } from "./data"
import theme from "styles/Theme"

import DiscountCalendar from "../Widgets/DiscountCalendar"


export default function Wishlisted({ setActiveComp }) {
    usePage("Most Wishlisted")
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const makeCall = async () => {
            const res = await GetAllProducts('isFeatured=1')
            if (res.status === "active") {
                console.log(res.data)
                setProducts(res.data)
            }
            setLoading(false)
        }

        makeCall()
    }, [])

    const handleSearch = async (data) => {
        try {
            const res = await GetAllProducts(`isFeatured=1&search=${data}`)
            if (res.status === "active") {
                console.log(res.data)
                setProducts(res.data)
            }
        } catch (error) { }
    }

    const handleFilter = async (data) => {
        try {
            const res = await GetAllProducts(`isFeatured=1&filter=${data}`)
            if (res.status === "active") {
                console.log(res.data)
                setProducts(res.data)
            }
        } catch (error) { }
    }

    if (isLoading) return <CompLoading />;

    return (
        <Container>
            <div>
                <TopBar
                    breadcrumb={{
                        Product: () => setActiveComp("products"),
                        "Most Wishlisted": () => { },
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
                    Featured Products
                </Heading>
                <div onClick={()=>setActiveComp('productView')}> Product Details</div>
                <Table
                    pagination={{
                        pageSize: 10,
                        hideOnSinglePage: true,
                    }}
                    dataSource={products}
                    columns={columns}
                />
            </div>
            <div>
                <DiscountCalendar />
            </div>
        </Container>
    )
}
