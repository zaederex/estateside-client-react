import React from 'react';
import './css/topNavigatation.css'
import {Link} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import Tooltip from "@material-ui/core/Tooltip";

const TopNavigationComponent = ({
                                    state, login, logout, updateSelectedNavItem,
                                    toggleProfileUpdated, toggleContactRequested, props,
                                    updateContact, updateSearchLocation
                                }) => {
    return (
        <div className="topnav" id="topnav">
            <ul className="icons">
                <Tooltip title="Home">
                    <li><Link to="/" className={`${state.selectedNavItem === "Home" ? "active"
                                                                                    : ""} icon solid fa-home`}
                              onClick={() => {
                                  updateSelectedNavItem("Home")
                                  toggleProfileUpdated(false)
                                  toggleContactRequested(false)
                              }}/></li>
                </Tooltip>
                <Tooltip title="About">
                    <li><Link to="/about" className={`${state.selectedNavItem === "About" ? "active"
                                                                                          : ""} icon solid fa-info`}
                              onClick={() => {
                                  updateSelectedNavItem("About")
                                  toggleProfileUpdated(false)
                                  toggleContactRequested(false)
                              }}/></li>
                </Tooltip>
                <Tooltip title="Contact">
                    <li><Link to="/contact"
                              className={`${state.selectedNavItem === "Contact" ? "active"
                                                                                : ""} icon solid fa-envelope`}
                              onClick={() => {
                                  updateSelectedNavItem("Contact")
                                  toggleProfileUpdated(false)
                                  toggleContactRequested(false)
                              }}/></li>
                </Tooltip>
                {state.isLoggedIn &&
                 <Tooltip title="Profile">
                     <li><Link to="/profile"
                               className={`${state.selectedNavItem === "Profile" ? "active"
                                                                                 : ""} icon solid fa-user`}
                               onClick={() => {
                                   updateSelectedNavItem("Profile")
                                   toggleProfileUpdated(false)
                                   toggleContactRequested(false)
                               }}/></li>
                 </Tooltip>
                }
                <li>
                    <Tooltip title="Privacy Policy">
                        <Link to="/privacy" onClick={() => {
                            updateSelectedNavItem("Privacy")
                            toggleProfileUpdated(false)
                            toggleContactRequested(false)
                        }}
                              className={`${state.selectedNavItem === "Privacy" ? "active"
                                                                                : ""} icon solid fa-info-circle`}>
                        </Link>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Help">
                        <Link to="/help" className={`${state.selectedNavItem === "Help" ? "active"
                                                                                        : ""} icon solid fa-question`}
                              onClick={() => {
                                  updateSelectedNavItem("Help")
                                  toggleProfileUpdated(false)
                                  toggleContactRequested(false)
                              }}>
                            <span className="label">Help</span>
                        </Link>
                    </Tooltip>
                </li>
                {!state.isLoggedIn &&
                 <li>
                     <LoginComponent clientLogin={login}
                                     role="user"
                                     buttonText="Login"
                                     updateSelectedNavItem={updateSelectedNavItem}/>
                 </li>
                }
                {!state.isLoggedIn &&
                 <li>
                     <LoginComponent
                         clientLogin={login}
                         role="landlord"
                         buttonText="Landlord Login"
                         updateSelectedNavItem={updateSelectedNavItem}/>
                 </li>
                }

                {state.isLoggedIn && state.userProfile.role === 'landlord' &&
                 <Tooltip title="Portal">
                     <li><Link to="/landlord/portal"
                               className={`${state.selectedNavItem === "Portal" ? "active"
                                                                                : ""}`}
                               onClick={() => {
                                   updateSelectedNavItem("Portal")
                                   toggleProfileUpdated(false)
                                   toggleContactRequested(false)
                               }}>
                         Portal
                     </Link>
                     </li>
                 </Tooltip>
                }
                {state.isLoggedIn && state.userProfile.role === 'user' &&
                 <Tooltip title="UserFav">
                     <li><Link to={`/user/${state.userProfile.userId}/favourites`}
                               className={`${state.selectedNavItem === "UserFav" ? "active"
                                                                                    : ""}`}
                               onClick={() => {
                                   updateSelectedNavItem("UserFav")
                               }}>
                         Favourite Properties
                     </Link>
                     </li>
                 </Tooltip>
                }
                {state.isLoggedIn && state.userProfile.role === 'user' &&
                 <Tooltip title="UserFav">
                     <li><Link to={`/user/${state.userProfile.userId}/appointments`}
                               className={`${state.selectedNavItem === "UserAppointments" ? "active"
                                                                                 : ""}`}
                               onClick={() => {
                                   updateSelectedNavItem("UserAppointments")
                               }}>
                         Your appointments
                     </Link>
                     </li>
                 </Tooltip>
                }
                {state.isLoggedIn &&
                 <li>
                     <LogoutComponent logout={logout}
                                      updateSelectedNavItem={updateSelectedNavItem}
                                      toggleContactRequested={toggleContactRequested}
                                      toggleProfileUpdated={toggleProfileUpdated}/>
                 </li>
                }
            </ul>
        </div>
    )
}

export default TopNavigationComponent
