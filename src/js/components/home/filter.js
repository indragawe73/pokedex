import React, { Component, Fragment } from "react";
// import { HeaderIn, CardIn } from 'indrafixui'
import 'indrafixui/dist/index.css'

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};    
  }

  componentDidMount() {
  }

  render() {
    const { sortVal, listAbility, handleFilter } = this.props

    return(
        <Fragment>
          <div className="wrap_sorting_array">
            <label className="label_sort">Filter by Ability:</label>
            <select className="sorting_array cursor_link" onChange={(val) => handleFilter(val)} value={sortVal}>
                {listAbility ?
                  listAbility.results.map((itm, index) =>
                    <option key={index} value={itm.url}>{itm.name}</option>
                  )
                :null}
            </select>
          </div>
        </Fragment>
      )
  }
}

export default Filter;