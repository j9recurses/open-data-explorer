import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import ColumnList from '../components/ColumnList'
import ColumnFilter from '../components/ColumnFilter'
import ColumnSort from '../components/ColumnSort'
import { getUniqueColumnTypes } from '../reducers'
import { filterColumnList, sortColumnList } from '../actions'

const ColumnDetails = ({list, filters, items, onFilter, sort, onSort}) => (
  <Row>
    <Col md={8}>
      <ColumnFilter items={items} onFilter={onFilter} filters={filters} />
      <ColumnSort sort={sort} onSort={onSort} />
      <ColumnList list={list} filters={filters} sort={sort} />
    </Col>
  </Row>
)

const mapStateToProps = (state, ownProps) => {
  const { columnProps: { columns, typeFilters, sort } } = state
  return {
    list: columns || {},
    items: getUniqueColumnTypes(state),
    filters: typeFilters,
    sort: sort
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFilter: (item) => dispatch(filterColumnList('typeFilters', item)),
    onSort: (sort) => dispatch(sortColumnList(sort))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnDetails)
