import React from 'react';
import './css/ProfileComponent.css'
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";

const AboutComponent = ({state, login, logout, updateSelectedNavItem, toggleProfileUpdated, toggleContactRequested, updateContact}) =>
    <div className="wbdv-about-us">
        <div className="home-page-top">
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}
                                    updateSelectedNavItem={updateSelectedNavItem}
                                    toggleProfileUpdated={toggleProfileUpdated}
                                    toggleContactRequested={toggleContactRequested}
                                    updateContact={updateContact}
            />
            <header id="wbdv-about-heading">
                <h1>About Estateside</h1>
            </header>
        </div>
        <div className="container about-body">
            <h3>General Information</h3>
            <p>
                This project is made as a part of the course CS5610 Web Development at Northeastern
                University.
            </p>
            <p>
                The objective of the project is to make a property rental application
                that would allow users to interactively search properties in the selected area,
                inspect the different aspects associated with a property like the property type,
                amenities, parking etc. as well as express their interest in a particular property
                by contacting the associated property advertiser.
            </p>
            <p>
                The application is powered by data provided by Bridge Interactive's data, which
                powers popular property rental/purchase platforms such as Zillow. Zillow has
                a variety of apartment options to buy, sell and rent. The Web API endpoints return
                JSON metadata about the apartments located in a particular location based on REST
                principles. We use the REST API to provide search details based on the requested
                location and also retrieve information about a specific property from the API.
            </p>
            <h3>Built using: </h3>
            <p> Database: MongoDB </p>
            <p> Back End: NodeJS, Express </p>
            <p> Front End: React </p>
            <p> Host environment: Heroku</p>
            <p>
                Built by Prajakta Dharme, Japher Su, Nicholas Galinski, Zoheb Nawaz
            </p>
        </div>
        <FooterComponent/>
    </div>

export default AboutComponent;
