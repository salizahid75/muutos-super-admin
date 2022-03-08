import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Table, PlusButton, Button } from "ant"


// import SoldProducts from "../Widgets/SoldProducts"

import { ReactComponent as HeartIcon } from "assets/icons/Heart.svg"
import Heading from "ant/Heading"
// import BestProducts from "../Widgets/BestProducts"
// import Statistics from "../Widgets/Statistics"
// import WorstProducts from "../Widgets/WorstProducts"



export default function UserView({
  setActiveComp,
  staffs,
  onStatusChange,
  handleSearch,
  handleFilter,
  active,
  handleDateFilter,
}) {

  usePage("User Details")

  return (
    <>
    <TopBar
      breadcrumb={{
        Users: () => setActiveComp("staff"),
        "User Details": () => {},
      }}
    />
    <Container>
        <div className="container bootstrap snippets bootdey">
          <div className="row d-flex align-items-center">
              <div className="profile-nav col-md-3">
                  <div className="panel">
                      <div className="user-heading round">
                          <a href="#">
                              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                          </a>
                          <h1 className="viewed-user-name">Camila Smith</h1>
                          <p className="viewed-user-email">deydey@theEmail.com</p>
                      </div>

                  
                  </div>
              </div>
              <div className="profile-info col-md-9">
                  <div className="panel">
                      <div className="panel-body bio-graph-info">
                          {/* <h1>Bio Graph</h1> */}
                          <div className="row">
                              <div className="bio-row">
                                  <p><span>Country </span>:  Australia</p>
                              </div>
                              <div className="bio-row">
                                  <p><span>Birthday</span>:  13 July 1983</p>
                              </div>
                              <div className="bio-row">
                                  <p><span>Occupation </span>:  UI Designe</p>
                              </div>
                              <div className="bio-row">
                                  <p><span>Mobile </span>:  (12) 03 4567890</p>
                              </div>
                              <div className="bio-row">
                                  <p><span>Phone </span>:  88 (02) 123456</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </Container>
    </>
  )
}
