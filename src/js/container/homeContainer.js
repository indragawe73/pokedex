import React, { Component, Fragment } from "react";
import { HeaderIn, CardIn } from 'indrafixui'
import 'indrafixui/dist/index.css'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { listGet, listAbilityGet } from './../../actions/homeAction';
import  Loading  from './../components/common/loading';
import  Filter  from './../components/home/filter';

import history from './../../history';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png`,
      isLoading: true,
      offset: 0,
      sortVal: 0,
      listHome: null,
      listAbility: null,
    };    
  }
  
  handleListAbility = () => {
    this.props.listAbilityGet();
  }

  handleTicket = (ability) => {
    let data = {}
    if(ability) {
      data = {
        'offset': this.state.offset, 
        'ability': ability, 
      }
    } else {
      data = {
        'offset': this.state.offset, 
        'ability': `https://pokeapi.co/api/v2/ability/1/`,
      }
    }
    this.props.listGet(data);
  }

  handleFilter = (event) => {
    const newVal = event.target.value
    this.setState({
        isLoading: true,
        sortVal: newVal
    })
    this.handleTicket(newVal)
  }

  goToDetail = (name, url) => {    
    history.push(`/detail/${name}`, {url: url})
  }

  componentDidMount() {
    this.handleTicket()
    this.handleListAbility()
  }


  async UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.home.home){
      await this.setState({
        listHome: nextProps.home.home,
        isLoading: false,
      }) 
    }
    if(nextProps.listAbility.listAbility){
      await this.setState({
        listAbility: nextProps.listAbility.listAbility,
        isLoading: false,
      }) 
    }
  }

  render() {

    const { logo, listHome, listAbility, sortVal, isLoading } = this.state;

    return(
        <Fragment>
          <div className="container-fluid">
            <div className="row">
              <HeaderIn logo={this.state.logo}/>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-9"></div>
              <div className="col-md-3 padBot30">
                <Filter listAbility={listAbility} handleFilter={this.handleFilter} sortVal={sortVal} />
              </div>
            </div>
            {isLoading ?
              <Loading />
              :
              <div className="row">
                  {listHome ?
                      listHome.pokemon.map((itm, index) =>
                      <div key={index} className="col-md-3">
                        <div className="WrapCard" onClick={() => this.goToDetail(itm.pokemon.name, itm.pokemon.url)}>
                          <CardIn 
                            name={itm.pokemon.name}   
                            imageUrl={logo}/>
                        </div>
                      </div>
                      )
                  :null}
                
              </div>
            }
            <div className="row padTop30 padBot30"></div>
            </div>
        </Fragment>
      )
  }
}

Home.propTypes = {
  listGet: PropTypes.func.isRequired,
  listAbilityGet: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  home: state.home,
  listAbility: state.listAbility,
});

export default connect(mapStateToProps, { listGet, listAbilityGet })(Home);