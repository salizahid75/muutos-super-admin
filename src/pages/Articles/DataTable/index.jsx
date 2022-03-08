import { useState } from "react"

import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Table, Button, ColorSvg } from "ant"
import Heading from "ant/Heading"

import { columns, data } from "./data"

import { DataTable } from "./styles"

import { ReactComponent as TextIcon } from "assets/icons/File/Text.svg"
import ArticleCalendar from "../Widgets/ArticleCalendar"

export default function DT({ setActiveComp }) {
    const [active, setActive] = useState(0)

    usePage("Articles")
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
                    sortBy={{
                        defaultValue: "All",
                        onChange: f => console.log(f),
                        filters: ["All", "New", "Old"],
                    }}
                    otherFilters={
                        <Button
                            type='secondary'
                            onClick={() => setActiveComp("upload")}
                            style={{
                                height: "54px",
                                display: "inline-flex",
                                transform: "translateY(4px)",
                            }}
                            icon={
                                <ColorSvg color='primary'>
                                    <TextIcon
                                        style={{
                                            marginRight: "6px",
                                            transform: "translateY(2px)",
                                        }}
                                    />
                                </ColorSvg>
                            }>
                            Add Article
                        </Button>
                    }
                />

                <DataTable>
                    <Table
                        pagination={{
                            pageSize: data.length + 1,
                            hideOnSinglePage: true,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                </DataTable>
            </div>
            <div>
                <Heading
                    size='32px'
                    style={{ marginTop: "10px", marginBottom: "37px" }}>
                    Activity Widgets
                </Heading>
                <ArticleCalendar />
            </div>
        </Container>
    )
}
