import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Table, PlusButton, Button } from "ant"

import { DataTable } from "./styles"

// import SoldProducts from "../Widgets/SoldProducts"

import { ReactComponent as HeartIcon } from "assets/icons/Heart.svg"
import Heading from "ant/Heading"
// import BestProducts from "../Widgets/BestProducts"
// import Statistics from "../Widgets/Statistics"
// import WorstProducts from "../Widgets/WorstProducts"

import { columns } from "./data"

export default function DT({
  setActiveComp,
  staffs,
  onStatusChange,
  handleSearch,
  handleFilter,
  active,
  handleDateFilter,
}) {
  usePage("Products")
  return (
    <Container>
      <div>
        <TopBar
          activeItem={active}
          heading='05 AUG 2021'
          menus={[
            {
              title: "Day",
              key: "daily",
              onChange: i => {
                handleDateFilter(i)
              },
            },
            {
              title: "Week",
              key: "weekly",
              onChange: i => {
                handleDateFilter(i)
              },
            },
            {
              title: "Month",
              key: "monthly",
              onChange: i => {
                handleDateFilter(i)
              },
            },
            {
              title: "Year",
              key: "yearly",
              onChange: i => {
                handleDateFilter(i)
              },
            },
            {
              title: "All Time",
              key: "all",
              onChange: i => {
                handleDateFilter(i)
              },
            },
          ]}
        />
        <FiltersBar
          onSearchChange={e => handleSearch(e.target.value)}
          // filters={{
          //   defaultValue: "All",
          //   onChange: f => console.log(f),
          //   filters: ["New", "Old"],
          // }}
          sortBy={{
            defaultValue: "All",
            onChange: f => handleFilter(f),
            filters: ["All", "New", "Old"],
          }}
          otherFilters={
            <>
              <PlusButton
                style={{ display: "inline-flex" }}
                onClick={() => setActiveComp("upload")}
              />
            </>
          }
        />

        <DataTable>
          <Table
            pagination={{
              pageSize: 10,
              hideOnSinglePage: true,
            }}
            columns={columns(
              staffId =>
                setActiveComp({ component: "update", props: { staffId } }),
              onStatusChange
            )}
            dataSource={staffs}
          />
        </DataTable>
      </div>
      <div>
        <Heading
          size='32px'
          style={{ marginTop: "10px", marginBottom: "37px" }}>
          Activity Widgets
        </Heading>
        {/* <SoldProducts />
        <BestProducts />
        <WorstProducts />
        <Statistics /> */}
      </div>
    </Container>
  )
}
