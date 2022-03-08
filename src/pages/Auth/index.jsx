import { useRouteMatch, Route, Redirect } from "react-router-dom"

import CustomSwitch from "components/CustomSwitch"

import Login from "./Login"
import VendorDetails from "./VendorDetails"

export default function Auth() {
  const match = useRouteMatch()

  return (
    <CustomSwitch>
      <Route exact path={`${match.path}/login`} component={Login} />
      <Route exact path={`${match.path}/vendorDetails`} component={VendorDetails} />
      <Route exact path={`${match.path}`}>
        <Redirect to={`${match.path}/login`} />
      </Route>
    </CustomSwitch>
  )
}
