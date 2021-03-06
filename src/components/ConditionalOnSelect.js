import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ConditionalOnSelect extends Component {
  render () {
    let { selectedColumn, displayBlank } = this.props
    let renderedContent = this.props.children
    if (!selectedColumn) {
      renderedContent = displayBlank || null
    }
    return (
      <div>
        {renderedContent}
      </div>
    )
  }
}

ConditionalOnSelect.propTypes = {
  selectedColumn: PropTypes.string,
  displayBlank: PropTypes.element
}

export default ConditionalOnSelect
