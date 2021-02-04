import React from "react";
import DateUtil from "../util/DateUtil";

const states = ['', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
                'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI',
                'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH',
                'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA',
                'WA', 'WV', 'WI', 'WY'];

export const NewListingComponent = ({createListing, updateNewProperty, state, toggleModal}) => {
    return (
        <div>
            <p style={{color: "white"}}>Enter details of the property</p>
            <div className="form-group row">
                <label htmlFor="street" className="col-sm-3 col-form-label"> Address Line 1 </label>
                <div className="col-sm-9">
                    <input className="textfield"
                           id="street" type="text" name="street" placeholder="Enter street"
                           value={state.newProperty.street}
                           onChange={(event) => updateNewProperty({
                                                                      ...state.newProperty,
                                                                      street: event.target.value
                                                                  })}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="house" className="col-sm-3 col-form-label"> Address line 2 </label>
                <div className="col-sm-9">
                    <input className="textfield"
                           id="house" type="text" name="house"
                           placeholder="Apartment/House #"
                           value={state.newProperty.house}
                           onChange={(event) => updateNewProperty({
                                                                      ...state.newProperty,
                                                                      house: event.target.value
                                                                  })}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="city" className="col-sm-3 col-form-label"> City </label>
                <div className="col-sm-9">
                    <input className="textfield"
                           id="city" type="text" name="city" placeholder="Enter city"
                           value={state.newProperty.city}
                           onChange={(event) => updateNewProperty({
                                                                      ...state.newProperty,
                                                                      city: event.target.value
                                                                  })}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="state" className="col-sm-3 col-form-label"> State </label>
                <div className="col-sm-9">
                    <select className="textfield wbdv-field wbdv-state"
                            id="state" name="state"
                            placeholder="State"
                            value={state.newProperty.state}
                            onChange={(event) => updateNewProperty({
                                                                       ...state.newProperty,
                                                                       state: event.target.value
                                                                   })}>
                        {states.map(x => {
                            return <option key={x} value={x}>{x}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="zip" className="col-sm-3 col-form-label"> Zip </label>
                <div className="col-sm-9">
                    <input className="textfield"
                           id="zip" type="text" name="zip" placeholder="Enter zip"
                           value={state.newProperty.zip}
                           onChange={(event) => updateNewProperty({
                                                                      ...state.newProperty,
                                                                      zip: event.target.value
                                                                  })}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="rent" className="col-sm-3 col-form-label"> Rent </label>
                <div className="col-sm-9">
                    <input className="textfield"
                           value={state.newProperty.zestimate}
                           onChange={(event) => updateNewProperty({
                                                                      ...state.newProperty,
                                                                      zestimate: event.target.value
                                                                  })}
                           id="rent" type="text" name="rent" placeholder="Enter monthly rent"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="dob" className="col-sm-3 col-form-label"> Date Available </label>
                <div className="col-sm-9">
                    <input className="form-control"
                           id="dob" type="date" name="dateOfBirth"
                           value={DateUtil.convertToDate(state.newProperty.date)}
                           onChange={(event) => {
                               updateNewProperty({
                                                     ...state.newProperty,
                                                     date: event.target.value
                                                 })
                           }}/>
                </div>
            </div>

            {/*

            <div className="form-group row">
                <label htmlFor="area" className="col-sm-3 col-form-label"> Area </label>
                <div className="col-sm-9">
                    <input className="textfield"
                           id="area" type="text" name="area" placeholder="Enter area in sqft"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="vehicle1" className="col-sm-3 col-form-label"> Mark the amenities
                    included</label>
                <div className="col-sm-9">
                    <input type="checkbox" id="amenity1" name="amenity1" value="ac"/>
                    <label htmlFor="amenity1"> A.C.</label>
                    <input type="checkbox" id="amenity2" name="amenity2" value="heater"/>
                    <label htmlFor="amenity2"> Heater</label>
                    <input type="checkbox" id="amenity3" name="amenity3" value="laundry"/>
                    <label htmlFor="amenity3"> Laundry</label>
                    <input type="checkbox" id="amenity4" name="amenity4"
                           value="management-services"/>
                    <label htmlFor="amenity4"> Management Services</label>
                </div>
            </div>
*/}

            <button className="btn-success btn btn-block" onClick={() => {
                createListing();
                toggleModal()
            }}>
                Save
            </button>
            <br/>
        </div>
    )
};
