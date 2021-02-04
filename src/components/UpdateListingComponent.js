import React from "react";
import DateUtil from "../util/DateUtil";

const states = ['', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
                'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI',
                'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH',
                'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA',
                'WA', 'WV', 'WI', 'WY'];

export const UpdateListingComponent = ({property, updateExistingProperty, finishEditingProperty, state, toggleModal}) => {
    return (
        <div>
            <p style={{color: "white"}}>Update details of the property</p>

            <div className="form-group row">
                <label htmlFor="street" className="col-sm-3 col-form-label"> Address Line 1 </label>
                <div className="col-sm-9">
                    <input className="textfield"
                           id="street" type="text" name="street" placeholder="Enter street"
                           defaultValue={state.temporaryProperty.address.street}
                           onChange={(event) => updateExistingProperty({
                                                                      ...state.temporaryProperty, address: {
                                                                          ...state.temporaryProperty.address,
                                                                            street: event.target.value}})}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="house" className="col-sm-3 col-form-label"> Address line 2 </label>
                <div className="col-sm-9">
                    <input className="textfield"
                           id="house" type="text" name="house"
                           placeholder="Apartment/House #"
                           defaultValue={state.temporaryProperty.address.house}
                           onChange={(event) => updateExistingProperty({
                                                                           ...state.temporaryProperty, address: {
                                   ...state.temporaryProperty.address,
                                   house: event.target.value}})}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="city" className="col-sm-3 col-form-label"> City </label>
                <div className="col-sm-9">
                    <input className="textfield"
                           id="city" type="text" name="city" placeholder="Enter city"
                           defaultValue={state.temporaryProperty.address.city}
                           onChange={(event) => updateExistingProperty({
                                                                           ...state.temporaryProperty, address: {
                                   ...state.temporaryProperty.address,
                                   city: event.target.value}})}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="state" className="col-sm-3 col-form-label"> State </label>
                <div className="col-sm-9">
                    <select className="textfield wbdv-field wbdv-state"
                            id="state" name="state"
                            placeholder="State"
                            defaultValue={state.temporaryProperty.address.state}
                            onChange={(event) => updateExistingProperty({
                                                                            ...state.temporaryProperty, address: {
                                    ...state.temporaryProperty.address,
                                    state: event.target.value}})}>
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
                           defaultValue={state.temporaryProperty.address.zip}
                           onChange={(event) => updateExistingProperty({
                                                                           ...state.temporaryProperty, address: {
                                   ...state.temporaryProperty.address,
                                   zip: event.target.value}})}/>

                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="rent" className="col-sm-3 col-form-label"> Rent </label>
                <div className="col-sm-9">
                    <input className="textfield"
                           id="rent" type="text" name="rent" placeholder="Enter monthly rent"
                           defaultValue={state.temporaryProperty.zestimate}
                           onChange={(event) => {
                               updateExistingProperty({
                                                          ...state.temporaryProperty,
                                                          zestimate: event.target.value
                                                      })
                           }}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="dob" className="col-sm-3 col-form-label"> Date Available </label>
                <div className="col-sm-9">
                    <input className="form-control"
                           id="dob" type="date" name="dateOfBirth"
                           defaultValue={DateUtil.convertToDate(state.temporaryProperty.date)}
                           onChange={(event) => {
                                                    updateExistingProperty({
                                                     ...state.temporaryProperty,
                                                     date: event.target.value
                                                 })
                           }}/>
                </div>
            </div>


            <button className="btn-success btn btn-block" onClick={() => {
                finishEditingProperty();
                toggleModal()
            }}>
                Update
            </button>
            <br/>
        </div>
    )
};
