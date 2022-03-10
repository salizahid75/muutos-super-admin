import Heading from "ant/Heading"
import { Menu } from "antd"
import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import Statistics from "../Widgets/Statistics"
import Earnings from "../Widgets/Earnings"
import BestService from "../Widgets/BestService"
import { Table, PlusButton, Button } from "ant"
import {useState, useEffect} from 'react'
import { columns } from "./data"

import { DataTable } from "./styles"

import { ReactComponent as HeartIcon } from "assets/icons/Heart.svg"
import WorstService from "../Widgets/WorstService"
// import Appointments from '../Widgets/Appointments';

export default function DT({ setActiveComp, services, onStatusChange, handleSearch, handleFilter, active, handleDateFilter, onisApprovedChange }) {
    const menu = (
        <Menu onClick={e => setActiveComp(e.key)}>
            <Menu.Item key='upload'>Gym</Menu.Item>
            <Menu.Item key='upload-salon'>Spa and Salon</Menu.Item>
            <Menu.Item key='upload-recreation'>Recreation</Menu.Item>
            <Menu.Item key='upload-dentist'>Dentist</Menu.Item>
        </Menu>
    )

    usePage("Careers")
    const userRole = localStorage.getItem('muutos-u-role');
    const [UserRole, setUserRole] = useState('');
    useEffect(() => {
      if (userRole == 'admin') {
        setUserRole('admin');
      }
    }, []);
    return (
        <Container>
            <div>
                
                <FiltersBar
                    onSearchChange={e => handleSearch(e.target.value)}
                    // filters={{
                    //     defaultValue: "All",
                    //     onChange: f => console.log(f),
                    //     filters: ["New", "Old"],
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
                            serviceId => setActiveComp({ component: "update", props: { serviceId } }),
                            onStatusChange,
                            onisApprovedChange,
                        )}
                        dataSource={services}
                    />
                </DataTable>
            </div>
            {
                () => {
                    if (UserRole !== 'admin') {
                        return (
                            <>
                                <Heading
                                    size='32px'
                                    style={{ marginTop: "10px", marginBottom: "37px" }}>
                                    Activity Widgets
                                </Heading>
                                {/* <Appointments /> */}
                                <Earnings />
                                <BestService />
                                <WorstService />

                                <Statistics />
                            </>
                        )

                    }
                }
            }
        </Container>
    )
}
