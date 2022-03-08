import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Table, PlusButton, Button } from "ant"

import { DataTable } from "./styles"

import SoldProducts from "../Widgets/SoldProducts"
import {useState, useEffect} from 'react'
import { ReactComponent as HeartIcon } from "assets/icons/Heart.svg"
import Heading from "ant/Heading"
import BestProducts from "../Widgets/BestProducts"
import Statistics from "../Widgets/Statistics"
import WorstProducts from "../Widgets/WorstProducts"

import { columns } from "./data"

export default function DT({
  setActiveComp,
  products,
  onStatusChange,
  handleSearch,
  handleFilter,
  active,
  handleDateFilter,
  onisApprovedChange,
}) {
  usePage("Products");
  const userRole = localStorage.getItem('muutos-u-role');
  const [UserRole, setUserRole] = useState('');
  useEffect(() => {    
    if(userRole=='admin'){
      setUserRole('admin');
    }
  }, []);

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
              <Button
                type='secondary'
                onClick={() => setActiveComp("wishlisted")}
                style={{
                  height: "54px",
                  display: "inline-flex",
                  transform: "translateY(6px)",
                }}
                icon={<HeartIcon style={{ marginRight: "6px" }} />}>
                Most Wishlisted
              </Button>
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
              productId =>
                setActiveComp({ component: "update", props: { productId } }),
                onStatusChange,
                onisApprovedChange,
            )}
            dataSource={products}
          />
        </DataTable>
      </div>
      {
        ()=>{
          if(UserRole!=='admin'){
            return(
              <div>
                <Heading
                  size='32px'
                  style={{ marginTop: "10px", marginBottom: "37px" }}>
                  Activity Widgets
                </Heading>
                <SoldProducts />
                <BestProducts />
                <WorstProducts />
                <Statistics />
              </div>
            )
          }
        }
      }
    </Container>
  )
}
