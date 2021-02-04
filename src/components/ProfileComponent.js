import React from "react";
import TopNavigationComponent from "./TopNavigationComponent";
import './css/ProfileComponent.css'
import {Link} from "react-router-dom";
import UserService from "../services/UserService";
import FooterComponent from "./FooterComponent";
import DateUtil from "../util/DateUtil";

const states = ['', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
                'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI',
                'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH',
                'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA',
                'WA', 'WV', 'WI', 'WY'];

const ProfileComponent = ({
                              state, login, logout, updateSelectedNavItem, updateUserProfile,
                              toggleProfileUpdated, toggleContactRequested, updateContact
                          }) => {
    return (
        <div>
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}
                                    updateSelectedNavItem={updateSelectedNavItem}
                                    toggleProfileUpdated={toggleProfileUpdated}
                                    toggleContactRequested={toggleContactRequested}
                                    updateContact={updateContact}
            />
            <header id="main-header">
                <h1>Profile</h1>
            </header>

            <div className="container">
                <div className={`${!state.profileUpdated ? "hidden"
                                                         : ""} form-group`}>
                    <label className="col-sm-3 wbdv-message"> Profile successfully saved! </label>
                </div>
                {
                    state && state.userProfile && state.userProfile.profilePic &&
                    <div className="profilePicture">
                        <img src={state.userProfile.profilePic}/>
                    </div>
                }
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-3 col-form-label"> Email </label>
                    <div className="col-sm-9">
                        <input className="textfield wbdv-field wbdv-email"
                               id="email" type="email" name="email"
                               placeholder="xyz@northeastern.edu"
                               value={state && state.userProfile ? state.userProfile.email : ''}
                               readOnly/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-3 col-form-label"> Phone </label>
                    <div className="col-sm-9">
                        <input className="textfield wbdv-field wbdv-phone"
                               value={state.userProfile.phone}
                               id="phone" type="text" name="phone" placeholder="6171231234"
                               onChange={(event) => {
                                   updateUserProfile(state.userProfile.dob, event.target.value,
                                                     state.userProfile.addrLine1,
                                                     state.userProfile.addrLine2,
                                                     state.userProfile.city,
                                                     state.userProfile.state,
                                                     state.userProfile.zipcode);
                               }}/>
                    </div>
                </div>


                <div className="form-group row">
                    <label htmlFor="dob" className="col-sm-3 col-form-label"> Date of Birth </label>
                    <div className="col-sm-9">
                        <input className="form-control"
                               id="dob" type="date" name="dateOfBirth"
                               value={DateUtil.convertToDate(state.userProfile.dob)}
                               onChange={(event) => {
                                   updateUserProfile(event.target.value,
                                                     state.userProfile.phone,
                                                     state.userProfile.addrLine1,
                                                     state.userProfile.addrLine2,
                                                     state.userProfile.city,
                                                     state.userProfile.state,
                                                     state.userProfile.zipcode)
                               }}/>
                    </div>
                </div>


                <div className="form-group row">
                    <label htmlFor="addr-line-1" className="col-sm-3 col-form-label"> Address Line
                        1 </label>
                    <div className="col-sm-9">
                        <input className="textfield wbdv-field wbdv-addr-line-1"
                               id="addr-line-1" type="text" name="addr-line-1"
                               placeholder="Address line 1"
                               value={state && state.userProfile ? state.userProfile.addrLine1 : ''}
                               onChange={(event) => {
                                   updateUserProfile(state.userProfile.dob, state.userProfile.phone,
                                                     event.target.value,
                                                     state.userProfile.addrLine2,
                                                     state.userProfile.city,
                                                     state.userProfile.state,
                                                     state.userProfile.zipcode)
                               }}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="addr-line-2" className="col-sm-3 col-form-label"> Address Line
                        2 </label>
                    <div className="col-sm-9">
                        <input className="textfield wbdv-field wbdv-addr-line-2"
                               id="addr-line-2" type="text" name="addr-line-2"
                               placeholder="Apt, Unit, Number, Etc."
                               value={state && state.userProfile ? state.userProfile.addrLine2 : ''}
                               onChange={(event) => {
                                   updateUserProfile(state.userProfile.dob, state.userProfile.phone,
                                                     state.userProfile.addrLine1,
                                                     event.target.value,
                                                     state.userProfile.city,
                                                     state.userProfile.state,
                                                     state.userProfile.zipcode)
                               }}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="city" className="col-sm-3 col-form-label"> City </label>
                    <div className="col-sm-9">
                        <input className="textfield wbdv-field wbdv-city"
                               id="city" type="text" name="city"
                               placeholder="City"
                               value={state && state.userProfile ? state.userProfile.city : ''}
                               onChange={(event) => {
                                   updateUserProfile(state.userProfile.dob, state.userProfile.phone,
                                                     state.userProfile.addrLine1,
                                                     state.userProfile.addrLine2,
                                                     event.target.value,
                                                     state.userProfile.state,
                                                     state.userProfile.zipcode)
                               }}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="state" className="col-sm-3 col-form-label"> State </label>
                    <div className="col-sm-9">
                        <select className="textfield wbdv-field wbdv-state"
                                id="state" name="state"
                                placeholder="State"
                                value={state && state.userProfile ? state.userProfile.state : ''}
                                onChange={(event) => {
                                    updateUserProfile(state.userProfile.dob,
                                                      state.userProfile.phone,
                                                      state.userProfile.addrLine1,
                                                      state.userProfile.addrLine2,
                                                      state.userProfile.city,
                                                      event.target.value,
                                                      state.userProfile.zipcode
                                    )
                                }}>
                            {states.map(x => {
                                return <option key={x} value={x}>{x}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="zip" className="col-sm-3 col-form-label"> Zipcode </label>
                    <div className="col-sm-9">
                        <input className="textfield wbdv-field wbdv-zip"
                               id="zip" type="text" name="zip"
                               placeholder="Zipcode"
                               value={state && state.userProfile ? state.userProfile.zipcode : ''}
                               onChange={(event) => {
                                   updateUserProfile(state.userProfile.dob, state.userProfile.phone,
                                                     state.userProfile.addrLine1,
                                                     state.userProfile.addrLine2,
                                                     state.userProfile.city,
                                                     state.userProfile.state,
                                                     event.target.value)
                               }}/>
                    </div>
                </div>


                <div className="form-group row update-row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-9">
                        <button id="updateBtn" className="btn btn-success btn-block wbdv-update"
                                onClick={() => {
                                    // if all are valid
                                    if (phoneNumberIsValid(state.userProfile.phone) &&
                                        zipCodeIsValid(state.userProfile.zipcode)) {
                                        UserService.updateUser(state.userProfile.userId,
                                                               state.userProfile);
                                        toggleProfileUpdated(true);

                                    }
                                    // if phone number is not valid or if zip code is not valid
                                    else {
                                        updateUserProfile(state.userProfile.dob, "",
                                                          state.userProfile.addrLine1,
                                                          state.userProfile.addrLine2,
                                                          state.userProfile.city,
                                                          state.userProfile.state,
                                                          "")
                                    }
                                }}>Update
                        </button>
                    </div>
                </div>

                <div className="form-group row logout-row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-9">
                        <Link to="/">
                            <button id="logoutBtn" className="btn btn-danger btn-block wbdv-logout">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}

const phoneNumberIsValid = (phoneNumber) => {
    // if the phone number entered is a number AND it's 10-digit long
    if (!phoneNumber || !phoneNumber.replace(/ /g, "") ||
        (!isNaN(phoneNumber) && phoneNumber.trim().length === 10 && !phoneNumber.includes("."))) {
        return true;
    } else {
        alert("Please enter a valid ten-digit phone number");
        return false;
    }
}

const zipCodeIsValid = (zipCode) => {
    // if the zip code entered is a number AND it's 5-digit long
    if (!zipCode || !zipCode.replace(/ /g, "") ||
        (!isNaN(zipCode) && zipCode.trim().length === 5 && !zipCode.includes("."))) {
        return true;
    } else {
        alert("Please enter a valid zip code");
        return false;
    }
}

export default ProfileComponent
