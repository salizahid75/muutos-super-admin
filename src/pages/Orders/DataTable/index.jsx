import { useState, useEffect } from "react"
import Heading from "ant/Heading"

import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Table, PlusButton, Button, ColorSvg } from "ant"

import { columns, data } from "./data"

import { DataTable } from "./styles"

import { ReactComponent as ArchiveIcon } from "assets/icons/Archive.svg"
import DeliveryStatus from "../Widgets/DeliveryStatus"
import OrderDetails from "../../../components/OrderDetails"
export default function DT({ setActiveComp }) {
    const data = [
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name  Awesome Name",
            Coupon: "FAIZ-CODE",
            Action: "Pending",

            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name  Awesome Name",
            Coupon: "FAIZ-CODE",
            Action: "Pending",

            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            Coupon: "FAIZ-CODE",
            Action: "Pending",

            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            Coupon: "FAIZ-CODE",
            Action: "Canceled",

            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            Coupon: "FAIZ-CODE",
            Action: "Pending",

            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            Coupon: null,
            Action: "Delivered",

            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            Coupon: "FAIZ-CODE",
            Action: "Pending",

            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name Awesome Name",
            Coupon: null,
            Action: "Pending",

            price: "QAR 1500",
            edit: 1,
        },
        {
            key: "1",
            image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
            name: "An Awesome Name",
            Coupon: null,
            Action: "Canceled",

            price: "QAR 1500",
            edit: 1,
        },
    ]

    const [active, setActive] = useState(0)
    const [completed, setCompleted] = useState(0)

    useEffect(() => {
        setCompleted(100)
    }, [])
    usePage("Accepted Orders")
    return (
        <Container>
            <div>
                <TopBar
                    activeItem={active}
                    heading='05 AUG 2021'
                    menus={[
                        {
                            title: "Day",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "Week",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "Month",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "Year",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "All Time",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                    ]}
                />
                <FiltersBar
                    onSearchChange={s => console.log(s)}
                    filters={{
                        defaultValue: "All",
                        onChange: f => console.log(f),
                        filters: ["New", "Old"],
                    }}
                    sortBy={{
                        defaultValue: "All",
                        onChange: f => console.log(f),
                        filters: ["All", "New", "Old"],
                    }}
                    otherFilters={
                        <Button
                            type='secondary'
                            onClick={() => setActiveComp("requests")}
                            style={{
                                height: "54px",
                                display: "inline-flex",
                                transform: "translateY(4px)",
                            }}
                            icon={
                                <ColorSvg color='primary'>
                                    <ArchiveIcon
                                        style={{
                                            marginRight: "6px",
                                            transform: "translateY(3px)",
                                        }}
                                    />
                                </ColorSvg>
                            }>
                            Order Requests
                        </Button>
                    }
                />
                <OrderDetails data={data} />
            </div>
            <div>
                <Heading
                    size='32px'
                    style={{ marginTop: "10px", marginBottom: "37px" }}>
                    Activity Widgets
                </Heading>
                <DeliveryStatus />
            </div>
        </Container>
    )
}
