import React, { Component, Fragment } from "react";
import { ButtonIn, HeaderIn, CardIn } from 'indrafixui'
import 'indrafixui/dist/index.css'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { detailHomeGet } from './../../actions/homeAction';
import  Loading  from './../components/common/loading';

import history from './../../history';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png`,
      listDetailHome: null,
      isLoading: true,
    };    
  }
  
  handleTicket = () => {
    const state = this.props.location.state
    this.props.detailHomeGet(state.url);
  }

  goToHome = () => {    
    history.push('/')
  }

  componentDidMount() {
    this.handleTicket()
  }


  async UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.detailHome.detailHome){
      this.setState({
        listDetailHome: nextProps.detailHome.detailHome,
        isLoading: false,
      })
    }
  }

  render() {
    const { listDetailHome, isLoading } = this.state;

    return(
        <Fragment>
          <div className="container-fluid">
            <div className="row">
              <HeaderIn logo={this.state.logo}/>
            </div>
          </div>
          {isLoading ?
            <Loading />
            :
            <div className="container">
              <div className="row">
                  {listDetailHome ?
                      <div className="col-md-12">
                        <div className="WrapCard">
                          <CardIn 
                            name={listDetailHome.name}   
                            textTwo={`abilities: ${listDetailHome.abilities[0].ability.name}`}
                            textTree={`tall: ${listDetailHome.height}`}
                            imageUrl={listDetailHome.sprites.front_default}/>
                        </div>
                      </div>
                  :null}
              </div>
              <div className="row padTop30">
                <div className="col-md-4"></div>
                <div className="col-md-4" onClick={()=> this.goToHome()}>
                  <ButtonIn buttonName="Back to home" group="medium" />
                </div>
              </div>
            </div>
          }
        </Fragment>
      )
  }
}

Detail.propTypes = {
  detailHomeGet: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  detailHome: state.detailHome,
});

export default connect(mapStateToProps, { detailHomeGet })(Detail);