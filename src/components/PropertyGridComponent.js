import React from "react";
import PropertyCardComponent from "./PropertyCardComponent";
import FooterComponent from "./FooterComponent";
import "./css/PropertyGridComponent.css"
import PaginationComponent from "./PaginationComponent";

const PropertyGridComponent = ({
                                   parentState, state, login, logout, updateSelectedNavItem, toggleProfileUpdated,
                                   toggleContactRequested, updateContact, properties, hits,
                                   handleNextClick, handlePrevClick, removeFav, showPagination = false,
                                   submitAppointment, updateAppointmentDate, updateAppointmentMessage, showOptions, deleteListing,
                                   startEditingProperty, updateExistingProperty, finishEditingProperty,
                                   setTemporaryPropertyObject
                               }) => {

    return (
        <div className="wbdv-property">
            <div className="container">
                {showPagination &&
                 <PaginationComponent handlePrevClick={handlePrevClick}
                                      handleNextClick={handleNextClick} state={state}
                                      hits={hits}/>
                }
                <div className="form-group row property-body">
                    {
                        properties.map(property =>
                                           <PropertyCardComponent property={property}
                                                                  login={login}
                                                                  state={state}
                                                                  parentState={parentState}
                                                                  showOptions={showOptions}
                                                                  deleteListing={deleteListing}
                                                                  removeFav={removeFav}
                                                                  startEditingProperty={startEditingProperty}
                                                                  updateExistingProperty={updateExistingProperty}
                                                                  finishEditingProperty={finishEditingProperty}
                                                                  setTemporaryPropertyObject={setTemporaryPropertyObject}
                                           />)
                    }
                </div>
                {showPagination &&
                 <PaginationComponent handlePrevClick={handlePrevClick}
                                      handleNextClick={handleNextClick} state={state}
                                      hits={hits}/>
                }
            </div>
            <FooterComponent/>
        </div>
    )
};

export default PropertyGridComponent;
