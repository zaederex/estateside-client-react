import React from 'react';
import './css/HomeComponent.css'
import {Link} from "react-router-dom";

const PropertySearchComponent = ({state, login, logout, updateSelectedNavItem, updateSearchLocation}) => {
    return (
        <div>
            <div id="signup-form">
                <input className="textfield" type="text" name="search" id="search"
                       onChange={(event) => updateSearchLocation(event.target.value)}
                       placeholder="Search for City"/>
                <Link
                    to={`/search/${state.searchLocation === '' ? 'Boston'
                                                               : state.searchLocation}/page/1`}>
                    <button className="btn-primary btn">
                        Search
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PropertySearchComponent
