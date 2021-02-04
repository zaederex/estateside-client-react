import React from 'react';
import '../components/css/HomeComponent.css'
import ProfileComponent from "../components/ProfileComponent";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import PrivacyPolicyComponent from "../components/PrivacyPolicyComponent";
import HelpComponent from "../components/HelpComponent";
import ContactComponent from "../components/ContactComponent";
import AboutComponent from "../components/AboutComponent";
import SearchResultComponent from "../components/SearchResultComponent";
import RegisterComponent from "../components/RegisterComponent";
import LandlordPortal from "../components/LandlordPortal";
import FavouritePropertyComponent from "../components/FavouriteProperty";
import VisitingAppointment from "../components/VisitingAppointment";

export default class AppContainer extends React.Component {
    state = {
        isLoggedIn: false,
        userProfile: {},
        searchProperty: "",
        selectedNavItem: "Home",
        contact: {message: '', name: '', email: ''},
        profileUpdated: false,
        contactRequested: false,
        searchLocation: "",
        properties: []
    };

    updateSearchLocation = (location) => {
        this.setState({searchLocation: location})
    }

    updateContact = (message, name, email) => this.setState(
        prevState => ({contact: {message: message, name: name, email: email}}))

    toggleProfileUpdated = (bool) => this.setState(prevState => ({
        profileUpdated: bool
    }))

    toggleContactRequested = (bool) => this.setState(prevState => ({contactRequested: bool}))

    updateUserProfile = (dob, phone, addrLine1, addrLine2, city, state, zipcode) => {
        this.setState(prevState => (
            {
                userProfile: {
                    ...prevState.userProfile,
                    phone: phone,
                    dob: dob,
                    addrLine1: addrLine1,
                    addrLine2: addrLine2,
                    city: city,
                    state: state,
                    zipcode: zipcode
                }
            }))
    }

    updateSelectedNavItem = (val) =>
        this.setState(prevState => ({
            isLoggedIn: prevState.isLoggedIn,
            userProfile: prevState.userProfile,
            searchProperty: prevState.searchProperty,
            selectedNavItem: val
        }));

    login = (userData) => {
        localStorage.setItem("userProfile", JSON.stringify(userData.user))
        this.setState({
                          isLoggedIn: true,
                          userProfile: userData.user,
                      });
    };

    logout = () => {
        this.setState({
                          isLoggedIn: false,
                          userProfile: {},
                      });
        localStorage.removeItem("userProfile")
    };

    navHelper() {
        let path = window.location.pathname;
        if (path.includes("home")) {
            this.setState({selectedNavItem: "Home"})
        } else if (path.includes("about")) {
            this.setState({selectedNavItem: "About"})
        } else if (path.includes("contact")) {
            this.setState({selectedNavItem: "Contact"})
        } else if (path.includes("profile")) {
            this.setState({selectedNavItem: "Profile"})
        } else if (path.includes("privacy")) {
            this.setState({selectedNavItem: "Privacy"})
        } else if (path.includes("help")) {
            this.setState({selectedNavItem: "Help"})
        } else if (path.includes("portal")) {
            this.setState({selectedNavItem: "Portal"})
        } else if (path.includes("favourites")) {
            this.setState({selectedNavItem: "Favourites"})
        } else if (path.includes("appointments")) {
            this.setState({selectedNavItem: "Favourites"})
        }
    }

    componentDidMount() {
        let userProfile = localStorage.getItem("userProfile")
        let userData = JSON.parse(localStorage.getItem("userProfile"))
        this.navHelper();
        if (userProfile) {
            this.setState({
                              isLoggedIn: true,
                              userProfile: userData
                          })
        }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path={["/", "/login", "/logout"]} exact
                           render={(props) =>
                               <HomeComponent state={this.state}
                                              login={this.login}
                                              logout={this.logout}
                                              updateSelectedNavItem={this.updateSelectedNavItem}
                                              toggleProfileUpdated={this.toggleProfileUpdated}
                                              toggleContactRequested={this.toggleContactRequested}
                                              updateContact={this.updateContact}
                                              updateSearchLocation={this.updateSearchLocation}
                                              {...props}
                               />
                           }
                    />
                    <Route path="/profile" exact>
                        <ProfileComponent state={this.state}
                                          login={this.login}
                                          logout={this.logout}
                                          updateSelectedNavItem={this.updateSelectedNavItem}
                                          updateUserProfile={this.updateUserProfile}
                                          toggleProfileUpdated={this.toggleProfileUpdated}
                                          toggleContactRequested={this.toggleContactRequested}
                                          updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path="/privacy" exact>
                        <PrivacyPolicyComponent state={this.state}
                                                login={this.login}
                                                logout={this.logout}
                                                updateSelectedNavItem={this.updateSelectedNavItem}
                                                toggleProfileUpdated={this.toggleProfileUpdated}
                                                toggleContactRequested={this.toggleContactRequested}
                                                updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path="/help" exact>
                        <HelpComponent state={this.state}
                                       login={this.login}
                                       logout={this.logout}
                                       updateSelectedNavItem={this.updateSelectedNavItem}
                                       toggleProfileUpdated={this.toggleProfileUpdated}
                                       toggleContactRequested={this.toggleContactRequested}
                                       updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path="/contact" exact>
                        <ContactComponent state={this.state}
                                          login={this.login}
                                          logout={this.logout}
                                          updateSelectedNavItem={this.updateSelectedNavItem}
                                          toggleProfileUpdated={this.toggleProfileUpdated}
                                          toggleContactRequested={this.toggleContactRequested}
                                          updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path="/about" exact>
                        <AboutComponent state={this.state}
                                        login={this.login}
                                        logout={this.logout}
                                        updateSelectedNavItem={this.updateSelectedNavItem}
                                        toggleProfileUpdated={this.toggleProfileUpdated}
                                        toggleContactRequested={this.toggleContactRequested}
                                        updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path={["/search/:location/page/:page"]} exact
                           render={(props) => (
                               <SearchResultComponent state={this.state}
                                                      login={this.login}
                                                      logout={this.logout}
                                                      updateSelectedNavItem={this.updateSelectedNavItem}
                                                      toggleProfileUpdated={this.toggleProfileUpdated}
                                                      toggleContactRequested={this.toggleContactRequested}
                                                      updateContact={this.updateContact}
                                                      updateSearchLocation={this.updateSearchLocation}
                                                      {...props}
                               />
                           )}>
                    </Route>
                    <Route path="/register" exact>
                        <RegisterComponent state={this.state}
                                           login={this.login}
                                           logout={this.logout}
                                           updateSelectedNavItem={this.updateSelectedNavItem}
                                           toggleProfileUpdated={this.toggleProfileUpdated}
                                           toggleContactRequested={this.toggleContactRequested}
                                           updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path={["/landlord/portal", "/landlord/portal/:landlordId/properties"]}
                           exact render={(props) =>
                        <LandlordPortal state={this.state}
                                        login={this.login}
                                        logout={this.logout}
                                        updateSelectedNavItem={this.updateSelectedNavItem}
                                        toggleProfileUpdated={this.toggleProfileUpdated}
                                        toggleContactRequested={this.toggleContactRequested}
                                        updateContact={this.updateContact}
                                        updateSearchLocation={this.updateSearchLocation}
                                        {...props}
                        />
                    }>
                    </Route>

                    <Route path={["/user/:userId/favourites"]}
                           exact render={(props) =>
                        <FavouritePropertyComponent state={this.state}
                                                    userId={this.state.userProfile.userId}
                                                    login={this.login}
                                                    logout={this.logout}
                                                    updateSelectedNavItem={this.updateSelectedNavItem}
                                                    toggleProfileUpdated={this.toggleProfileUpdated}
                                                    toggleContactRequested={this.toggleContactRequested}
                                                    updateContact={this.updateContact}
                                                    updateSearchLocation={this.updateSearchLocation}
                                                    {...props}
                        />
                    }>
                    </Route>

                    <Route path={["/user/:userId/appointments", "/properties/:zpid/appointments"]}
                           exact render={(props) =>
                        <VisitingAppointment state={this.state}
                                             userId={this.state.userProfile.userId}
                                             login={this.login}
                                             logout={this.logout}
                                             updateSelectedNavItem={this.updateSelectedNavItem}
                                             toggleProfileUpdated={this.toggleProfileUpdated}
                                             toggleContactRequested={this.toggleContactRequested}
                                             updateContact={this.updateContact}
                                             updateSearchLocation={this.updateSearchLocation}
                                             {...props}
                        />
                    }>
                    </Route>
                </BrowserRouter>
            </div>
        )
    }
}
