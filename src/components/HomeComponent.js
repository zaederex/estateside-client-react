import React from 'react';
import './css/HomeComponent.css'
import PropertySearchComponent from "./PropertySearchComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import FooterComponent from "./FooterComponent";

const HomeComponent = ({
                           state, login, logout, updateSelectedNavItem,
                           toggleProfileUpdated, toggleContactRequested, updateContact,
                           updateSearchLocation, props
                       }) => {
    return (
        <div className="home-page-components">
            {
                state.isLoggedIn &&
                <div className="float-right wbdv-hello-user-msg">
                    <h6>Welcome, {state.userProfile.name}!</h6>
                </div>
            }
            <div className="home-page-top">
                <TopNavigationComponent state={state}
                                        login={login}
                                        logout={logout}
                                        updateSelectedNavItem={updateSelectedNavItem}
                                        toggleProfileUpdated={toggleProfileUpdated}
                                        toggleContactRequested={toggleContactRequested}
                                        updateContact={updateContact}
                                        {...props}
                />
                <header id="home-header"><h1>Estateside</h1></header>
                <p className="find-home-title">Find your new home.</p>
            </div>
            <div className="home-page-search">
                <PropertySearchComponent state={state}
                                         login={login}
                                         logout={logout}
                                         updateSelectedNavItem={updateSelectedNavItem}
                                         toggleProfileUpdated={toggleProfileUpdated}
                                         toggleContactRequested={toggleContactRequested}
                                         updateContact={updateContact}
                                         updateSearchLocation={updateSearchLocation}
                />
            </div>
            <FooterComponent/>
        </div>
    )
}

export default HomeComponent
