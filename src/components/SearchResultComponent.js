import React from 'react';
import PropertyGridComponent from "./PropertyGridComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";

export default class SearchResultComponent extends React.Component {
    state = {
        location: '',
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
    };

    componentDidMount() {
        const location = this.props.match.params.location ? this.props.match.params.location
                                                          : "Boston";
        this.setState({location: location});
        let page = null
        if (this.props.match.params.page) {
            page = parseInt(this.props.match.params.page)
        }
        this.setState({propertySearchPage: parseInt(this.props.match.params.page)}, () => {
            PropertyService.findPropertiesForCity(location,
                                                  (this.state.propertySearchPage - 1)
                                                  * 12)
                .then(response => {
                    this.setState({
                                      properties: response.bundle,
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
                {this.state.properties.length > 0 &&
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
                                        removeFav={this.removeFav}
                                        showOptions={true}
                                        showPagination={true}/>
                }

                <br/>
            </div>
        )
    }
}
