import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Table, PlusButton, Button } from "ant"
import { DataTable } from "./styles"
import { ReactComponent as HeartIcon } from "assets/icons/Heart.svg"
import Heading from "ant/Heading"

import { columns } from "./data"

export default function ProductView({
    setActiveComp,
    products,
    onStatusChange,
    handleSearch,
    handleFilter,
    active,
    handleDateFilter,
}) {
  usePage("Wishlisted Product View")
  return (
    <Container>
      <div>
        <TopBar
          activeItem={active}
          heading='Products/Most Whishlisted/Product View'
          menus={[
            {
              title: "Products",
              key: "yearly",
              onChange: i => {
                // handleDateFilter(i)
              },
            },
            {
              title: "Services",
              key: "all",
              onChange: i => {
                handleDateFilter(i)
              },
            },
          ]}
        />
        <FiltersBar
        title={'Product Name'}
        category={'Shoe'}
        //   onSearchChange={e => handleSearch(e.target.value)}
        //   filters={{
        //     defaultValue: "All",
        //     onChange: f => console.log(f),
        //     filters: ["New", "Old"],
        //   }}
        //   sortBy={{
        //     defaultValue: "All",
        //     onChange: f => handleFilter(f),
        //     filters: ["All", "New", "Old"],
        //   }}
          
          otherFilters={
            <>
              <Button
                type='secondary'
                onClick={() => setActiveComp("wishlisted")}
                style={{
                  height: "54px",
                  display: "inline-flex",
                  transform: "translateY(-1px)",
                }}
                // icon={<HeartIcon style={{ marginRight: "6px" }} />}
                >
                Make Discount 
              </Button>
              {/* <PlusButton
                style={{ display: "inline-flex" }}
                onClick={() => setActiveComp("upload")}
              /> */}
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
              onStatusChange
            )}
            dataSource={products}
          />
        </DataTable>
      </div>
    </Container>
  )
}
