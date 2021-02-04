import SearchPropertyNavigationComponent from "./SearchPropertyNavigationComponent";
import React from "react";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";
import PropertyGridComponent from "./PropertyGridComponent";

export default class LandlordPortal extends React.Component {
    state = {
        landlordId: '',
        properties: [],
        hits: 0,
        propertySearchPage: 1,
        newProperty: {
            zpid: '',
            street: '', city: '', house: '', state: '', zip: '',
            date: '',
            zestimate: '',
            userId: ''
        },
        temporaryProperty: {
            zpid: '',
            street: '', city: '', house: '', state: '', zip: '',
            date: '',
            zestimate: '',
            userId: ''
        }
    };

    componentDidMount() {
        if (this.props.match.params.landlordId) {
            this.setState(prevState => ({
                landlordId: this.props.match.params.landlordId
            }), () => {
                PropertyService.findHostedProperties(this.state.landlordId)
                    .then(response => {
                              this.setState(prevState => ({
                                  properties: response.bundle,
                                  hits: response.total
                              }))
                          }
                    )
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.landlordId !== this.props.match.params.landlordId) {
            this.setState(prevState => ({
                landlordId: this.props.match.params.landlordId
            }), () => {
                PropertyService.findHostedProperties(this.state.landlordId)
                    .then(response =>
                              this.setState(prevState => ({
                                  properties: response.bundle,
                                  hits: response.total
                              }))
                    )
            })
        }
    }

    createListing = () => {
        const fullAddress = this.generateFullAddress(this.state.newProperty);

        PropertyService.createProperty({
                                           zpid: Date.now(),
                                           address: {
                                               full: fullAddress,
                                               street: this.state.newProperty.street,
                                               city: this.state.newProperty.city,
                                               house: this.state.newProperty.house,
                                               state: this.state.newProperty.state,
                                               zip: this.state.newProperty.zip,
                                               zip4: this.state.newProperty.zip
                                           },
                                           date: this.state.newProperty.date,
                                           zestimate: this.state.newProperty.zestimate,
                                           rental: {zestimate: this.state.newProperty.zestimate},
                                           userId: this.props.state.userProfile.userId,
                                           coordinates: ["-71.105659", "42.332939"]
                                       })
            .then(newProperty => {
                PropertyService.findPropertyById(newProperty.zpid)
                    .then(property => {
                              this.setState(prevState => ({
                                  properties: [...this.state.properties, property],
                                  hits: this.state.hits + 1
                              }));
                              window.alert("Property added!");
                          }
                    );
            })
    };

    setTemporaryPropertyObject = (zpid) => {
        PropertyService.findPropertyById(zpid)
            .then(response => {
                this.setState(prevState => ({
                    newProperty: {
                        zpid: zpid,
                        street: response.address.street,
                        city: response.address.city,
                        house: response.address.house,
                        state: response.address.state,
                        zip: response.address.zip,
                        date: response.date,
                        zestimate: response.zestimate,
                        userId: this.props.state.userProfile.userId
                    }
                }))
            })
    };

    updateNewProperty = (newProperty) => this.setState(prevState => ({
        newProperty: newProperty
    }));

    deleteListing = (propertyId) => {
        PropertyService.deleteProperty(propertyId)
            .then(this.setState(prevState => ({
                properties: prevState.properties.filter(p => p.zpid !== propertyId)
            })));
    };

    startEditingProperty = (currentProperty) => {
        this.setState(prevState => ({
            temporaryProperty: {...currentProperty}
        }));
    }

    updateExistingProperty = (updatedProperty) => this.setState(prevState => ({
        temporaryProperty: {...updatedProperty}
    }));

    finishEditingProperty = () => {
        this.state.temporaryProperty.address.full =
            this.generateFullAddress(this.state.temporaryProperty.address);
        this.state.temporaryProperty.rental.zestimate = this.state.temporaryProperty.zestimate;
        PropertyService.updateProperty(this.state.temporaryProperty.zpid,
                                       this.state.temporaryProperty)
            .then(status => {
                this.setState(prevState => ({
                    properties:
                        prevState.properties.map(p => p.zpid === prevState.temporaryProperty.zpid ?
                                                      prevState.temporaryProperty : p)
                }), () => {
                })

            });
        window.alert("Property updated!");
    };

    handleNextClick = () => {
        PropertyService.findPropertiesForCity(this.state.location,
                                              (this.state.propertySearchPage)
                                              * 12)
            .then(response => {
                this.setState({
                                  properties: response.bundle,
                                  propertySearchPage: this.state.propertySearchPage + 1
                              });
                window.scrollTo(0, 0);
            });
    };

    handlePrevClick = () => {
        PropertyService.findPropertiesForCity(this.state.location,
                                              (this.state.propertySearchPage - 2)
                                              * 12)
            .then(response => {
                this.setState({
                                  properties: response.bundle,
                                  propertySearchPage: this.state.propertySearchPage - 1
                              });
                window.scrollTo(0, 0);
            });
    };

    generateFullAddress = (propertyAddress) => {
        let house = propertyAddress.house;
        let street = propertyAddress.street;
        let city = propertyAddress.city;
        let state = propertyAddress.state;
        let zip = propertyAddress.zip;

        if (house && house.replace(/ /g, "")) {
            house += ", "
        }
        if (street && street.replace(/ /g, "")) {
            street += ", "
        }
        if (city && city.replace(/ /g, "")) {
            city += ", "
        }
        if (state && state.replace(/ /g, "")) {
            state += " "
        }

        const fullAddress = house + street + city + state + zip;
        return fullAddress;
    }

    render() {
        return (
            <div>
                <TopNavigationComponent state={this.props.state}
                                        login={this.props.login}
                                        logout={this.props.logout}
                                        updateSelectedNavItem={this.props.updateSelectedNavItem}
                                        toggleProfileUpdated={this.props.toggleProfileUpdated}
                                        toggleContactRequested={this.props.toggleContactRequested}
                                        updateContact={this.props.updateContact}
                />
                <SearchPropertyNavigationComponent
                    landlordId={this.props.state.userProfile.userId}
                    createListing={this.createListing}
                    updateNewProperty={this.updateNewProperty}
                    state={this.state}/>
                {this.props.match.params.landlordId && this.state.properties.length === 0 &&
                 <div className="no-result-div">
                     <span>
                         <i className="fa fa-exclamation-circle" aria-hidden="true"/>
                         &nbsp; There are no listed properties.
                     </span>
                 </div>
                }
                {this.props.match.params.landlordId && this.state.properties.length > 0 &&
                 <PropertyGridComponent parentState={this.props.state}
                                        state={this.state}
                                        login={this.props.login}
                                        logout={this.props.logout}
                                        updateSelectedNavItem={this.props.updateSelectedNavItem}
                                        toggleProfileUpdated={this.props.toggleProfileUpdated}
                                        toggleContactRequested={this.props.toggleContactRequested}
                                        updateContact={this.props.updateContact}
                                        properties={this.state.properties}
                                        hits={this.state.hits}
                                        handleNextClick={this.handleNextClick}
                                        handlePrevClick={this.handlePrevClick}
                                        showOptions={true}
                                        // showOptions={false}
                                        setTemporaryPropertyObject={this.setTemporaryPropertyObject}
                                        deleteListing={this.deleteListing}
                                        startEditingProperty={this.startEditingProperty}
                                        updateExistingProperty={this.updateExistingProperty}
                                        finishEditingProperty={this.finishEditingProperty}
                 />
                }
            </div>
        )
    }
}
