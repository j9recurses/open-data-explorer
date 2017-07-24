import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InstantSearch } from 'react-instantsearch/dom'
import Search from '../components/Catalog'
import isEqual from 'lodash/isEqual'
import {withRouter} from 'react-router'
import qs from 'qs'
import { updateSearch, clearSearch } from '../actions'

class Catalog extends Component {

  constructor(props) {
    super(props);
    this.state = { searchState: { ...qs.parse(props.router.location.query) } };
  }

  componentWillReceiveProps() {
    this.setState({ searchState: qs.parse(this.props.router.location.query) });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.state.searchState, nextState.searchState);
  }

  onSearchStateChange(nextSearchState) {
    const THRESHOLD = 700;
    const newPush = Date.now();
    this.setState({ lastPush: newPush, searchState: nextSearchState });
    if (this.state.lastPush && newPush - this.state.lastPush <= THRESHOLD) {
      this.props.router.replace(
        nextSearchState ? `${this.props.location.pathname}?${qs.stringify(nextSearchState)}` : ''
      );
    } else {
      this.props.router.push(
        nextSearchState ? `${this.props.location.pathname}?${qs.stringify(nextSearchState)}` : ''
      );
    }
  }

  createURL = state => `${this.props.location.pathname}?${qs.stringify(state)}`;

  render () {
    return (
      <InstantSearch
        appId='N6IVMSP2S4'
        apiKey='3bd0fc517f80911bf21045747262a1bd'
        indexName='dev_dataset_search'
        searchState={this.state.searchState}
        onSearchStateChange={this.onSearchStateChange.bind(this)}
        createURL={state => this.createURL.bind(this)}
      >
        <Search clearSearch={this.props.clearSearch} />
      </InstantSearch>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    searchState: state.search.searchState,
    lastPush: state.search.lastPush
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearchStateChange: (searchState) => dispatch(updateSearch(searchState)),
    clearSearch: () => dispatch(clearSearch())
  }
}

const ConnectedCatalog = connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog)

export default withRouter(ConnectedCatalog)
