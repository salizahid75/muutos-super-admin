import { useState } from "react"

import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Table, Button, ColorSvg } from "ant"

import { ReactComponent as StarIcon } from "assets/icons/Star.svg"
import Heading from "ant/Heading"

import { Block, ItemsFlex } from "./styles"

import {
    productsData,
    productsColumns,
    servicesData,
    servicesColumns,
} from "./data"
import DiscountCalendar from "../Widgets/DiscountCalendar"
import AddAnnoucement from "../Widgets/AddAnnouncement"
import DiscountList from "./AnnouncementAndDiscount/DiscountList"
import AnnouncementList from "./AnnouncementAndDiscount/AnnouncementList"

export default function DT({ setActiveComp }) {
    usePage("Marketing")
    const [hide, setHide] = useState(false)
    const [showAnnouncememt, setShowAnnouncememt] = useState(false)
    console.log(productsData);
    return (
        <Container>
            <div>
                <TopBar heading='05 AUG 2021' />
                <FiltersBar
                    onSearchChange={s => console.log(s)}
                    otherFilters={
                        <>
                        <Button
                            type='secondary'
                            onClick={() => setActiveComp("feature")}
                            style={{
                                height: "54px",
                                display: "inline-flex",
                                transform: "translateY(4px)",
                            }}
                            icon={
                                <ColorSvg color='primary'>
                                    <StarIcon
                                        style={{
                                            marginRight: "6px",
                                            transform: "translateY(2px)",
                                        }}
                                    />
                                </ColorSvg>
                            }>
                            Feature Product
                        </Button>
                        <Button
                        type='secondary'
                        onClick={() => setActiveComp("featureServices")}
                        style={{
                            height: "54px",
                            display: "inline-flex",
                            transform: "translateY(4px)",
                        }}
                        icon={
                            <ColorSvg color='primary'>
                                <StarIcon
                                    style={{
                                        marginRight: "6px",
                                        transform: "translateY(2px)",
                                    }}
                                />
                            </ColorSvg>
                        }>
                        Feature Services
                    </Button>
                    </>
                    }
                />

                <div style={{ marginTop: "40px" }}></div>

                <Block>
                    <Heading
                        onClick={() => {
                            setHide(true)
                        }}
                        weight='600'
                        size='24px'>
                        Discounts
                    </Heading>
                    <p>
                        You don’t have any active discount yet!{" "}
                        <Button
                            onClick={() => {
                                setHide(true)
                            }}
                            style={{ display: "inline", padding: "5px" }}
                            type='link'>
                            Add Discount
                        </Button>
                    </p>
                    <DiscountList />
                </Block>
                <Block>
                    <Heading weight='600' size='24px'>
                        Announcements
                    </Heading>
                    <p>
                        You don’t have any Announcement yet!{" "}
                        <Button
                            onClick={() => {
                                setShowAnnouncememt(true)
                            }}
                            style={{ display: "inline", padding: "5px" }}
                            type='link'>
                            Add Announcement
                        </Button>
                    </p>
                    <AnnouncementList />
                </Block>

                <Block>
                    <Heading weight='600' size='24px'>
                        Featured Products
                    </Heading>
                    <ItemsFlex>
                        <Table
                            pagination={{
                                pageSize:
                                    productsData.slice(
                                        0,
                                        Math.ceil(productsData.length / 2)
                                    ).length + 1,
                                hideOnSinglePage: true,
                            }}
                            columns={productsColumns}
                            dataSource={productsData.slice(
                                0,
                                Math.ceil(productsData.length / 2)
                            )}
                        />
                        {/* {productsData.length >= 1 ? (
                            <Table
                                pagination={{
                                    pageSize:
                                        productsData.slice(
                                            Math.ceil(productsData.length / 2)
                                        ).length + 1,
                                    hideOnSinglePage: true,
                                }}
                                columns={productsColumns}
                                dataSource={productsData.slice(
                                    Math.ceil(productsData.length / 2)
                                )}
                            />
                        ) : (
                            <div></div>
                        )} */}
                    </ItemsFlex>
                </Block>
                <Block>
                    <Heading weight='600' size='24px'>
                        Featured Services
                    </Heading>
                    <ItemsFlex>
                        <Table
                            pagination={{
                                pageSize:
                                    servicesData.slice(
                                        0,
                                        Math.ceil(servicesData.length / 2)
                                    ).length + 1,
                                hideOnSinglePage: true,
                            }}
                            columns={servicesColumns}
                            dataSource={servicesData.slice(
                                0,
                                Math.ceil(servicesData.length / 2)
                            )}
                        />
                        {/* {servicesData.length > 2 ? (
                            <Table
                                pagination={{
                                    pageSize:
                                        servicesData.slice(
                                            Math.ceil(servicesData.length / 2)
                                        ).length + 1,
                                    hideOnSinglePage: true,
                                }}
                                columns={servicesColumns}
                                dataSource={servicesData.slice(
                                    Math.ceil(servicesData.length / 2)
                                )}
                            />
                        ) : (
                            <div></div>
                        )} */}
                    </ItemsFlex>
                </Block>
            </div>
            <div>
                <Heading
                    size='32px'
                    style={{ marginTop: "10px", marginBottom: "37px" }}>
                    Activity Widgets
                </Heading>
                {hide ? (
                    <DiscountCalendar onHide={() => setHide(false)} />
                ) : (
                    <>
                        <Button
                            onClick={() => {
                                setHide(true)
                            }}
                            type='secondary'>
                            Add Discount
                        </Button>

                        <br />

                        {showAnnouncememt ? (
                            <AddAnnoucement
                                onHide={() => setShowAnnouncememt(false)}
                            />
                        ) : (
                            <Button
                                onClick={() => {
                                    setShowAnnouncememt(true)
                                }}
                                type='secondary'>
                                Add Announcement
                            </Button>
                        )}
                    </>
                )}
            </div>
        </Container>
    )
}
