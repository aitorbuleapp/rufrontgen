import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthRoute } from "@rufrontgen/controller";
import { LegalConnector } from "modules/legal/LegalConnector";
import { HomeView } from "modules/home/ui/HomeView";
import LoginScreen from "screens/LoginScreen";
import RegisterScreen from "screens/RegisterScreen";
import ForgotPasswordScreen from "screens/ForgotPasswordScreen";
import ChangePasswordScreen from "screens/ChangePasswordScreen";
import TextScreen from "screens/TextScreen";
import CreateListingScreen from "screens/CreateListingScreen";
import FindListingsScreen from "screens/FindListingsScreen";
import ViewListingScreen from "screens/ViewListingScreen";
import Logout from "modules/logout";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={HomeView} />

      {/* Auth Flow Routes */}
      <Route exact={true} path="/register" component={RegisterScreen} />
      <Route exact={true} path="/login" component={LoginScreen} />
      <Route exact={true} path="/logout" component={Logout} />
      <Route
        exact={true}
        path="/forgot-password"
        component={ForgotPasswordScreen}
      />
      <Route
        exact={true}
        path="/change-password/:key"
        component={ChangePasswordScreen}
      />

      {/* Listings Routes */}
      <Route exact={true} path="/listings" component={FindListingsScreen} />
      <AuthRoute
        exact={true}
        path="/listing/:listingId"
        component={ViewListingScreen}
      />
      <Route
        exact={true}
        path="/create-listing"
        component={CreateListingScreen}
      />

      {/* Legal Routes */}
      <Route exact={true} path="/legal" component={LegalConnector} />

      {/* Misc Routes */}
      <Route path="/m/" component={TextScreen} />
    </Switch>
  </BrowserRouter>
);
