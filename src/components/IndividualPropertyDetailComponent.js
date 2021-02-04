import React from "react";
import "./css/PropertyGridComponent.css"
import PropertyService from "../services/PropertyService";
import MapComponent from "./MapComponent";

class IndividualPropertyDetailComponent extends React.Component {
    state = {
        property: {}
    };

    componentDidMount() {
        const propertyId = this.props.property.zpid
        this.setState(() => {
            PropertyService.findPropertyById(propertyId)
                .then(response => {
                    this.setState({
                                      property: response
                                  })
                });
        })
    }

    render() {
        return (
            <div id="booking" className="section">
                <div className="section-center">
                    <div className="container">
                        <div>
                            <div className="property-detail">
                                <h1>Details</h1>
                                <table className="textfield">
                                    <tr>
                                        <td>
                                            <h6>Address</h6>
                                        </td>
                                        <td>
                                            &nbsp;
                                        </td>
                                        <td>
                                            {this.state.property.address
                                             && !this.state.property.address.full
                                             && this.state.property.address}
                                            {this.state.property.address
                                             && this.state.property.address.full
                                             && this.state.property.address.full}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6>Owners</h6>
                                        </td>
                                        <td>

                                            &nbsp;
                                        </td>
                                        <td>
                                            {this.state.property.ownerName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6>Coordinates</h6>
                                        </td>
                                        <td>
                                            &nbsp;
                                        </td>
                                        <td>
                                            {this.state.property.coordinates &&
                                             this.state.property.coordinates[1]},
                                            {this.state.property.coordinates &&
                                             this.state.property.coordinates[0]}

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h6>ZPID</h6>
                                        </td>
                                        <td>
                                            &nbsp; &nbsp; &nbsp;
                                        </td>
                                        <td>
                                            {this.state.property.zpid}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div>
                            <div className="booking-form">
                                {
                                    this.state.property.coordinates &&
                                    <MapComponent
                                        latitude={parseFloat(this.state.property.coordinates[1])}
                                        longitude={parseFloat(this.state.property.coordinates[0])
                                        }/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndividualPropertyDetailComponent
