import React from 'react';
import PropertyGridComponent from "./PropertyGridComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";

export default class FavouriteProperty extends React.Component {
    state = {
        userId: '',
        properties: [],
        hits: 0,
        propertySearchPage: 1
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

    removeFav = (userId, zpid) => {
        this.setState(prevState => ({
                properties: prevState.properties.filter(fav => fav.zpid !== zpid && fav.userId !== userId)
            }));
    };

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.setState({userId: userId});
        this.setState(() => {
            PropertyService.findFavouriteProperties(userId)
                .then(response => {
                    this.setState({
                                      properties: response,
                                      hits: response.total
                                  })
                });
        })
    }

    render() {
        return (
            <div>
                <div className="home-page-top">
                    <TopNavigationComponent state={this.props.state}
                                            login={this.props.login}
                                            logout={this.props.logout}
                                            updateSelectedNavItem={this.props.updateSelectedNavItem}
                                            toggleProfileUpdated={this.props.toggleProfileUpdated}
                                            toggleContactRequested={this.props.toggleContactRequested}
                                            updateContact={this.props.updateContact}
                    />
                </div>
                {this.state.userId && this.state.properties.length === 0 &&
                 <div className="no-result-div">
                     <span>
                         <i className="fa fa-exclamation-circle" aria-hidden="true"/>
                         &nbsp; There are no favourite properties.
                     </span>
                 </div>
                }
                {this.state.userId && this.state.properties.length > 0 &&
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
                                        submitAppointment={this.submitAppointment}
                                        updateAppointmentDate={this.updateAppointmentDate}
                                        updateAppointmentMessage={this.updateAppointmentMessage}
                                        removeFav={this.removeFav}
                                        showOptions={true}/>
                }

                <br/>
            </div>
        )
    }
}
