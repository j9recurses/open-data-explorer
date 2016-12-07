
require('react-select/dist/react-select.css')
import React, { Component } from 'react'
import './_Query.scss'
import { Button, ButtonGroup } from 'react-bootstrap'
class DateToggle extends Component {

  isDateCol(selectedColumnDef){
    if(selectedColumnDef.type === 'date'){
      return true
    }
    return false
  }

  render () {
    let {dateBy, changeDateBy, selectedColumnDef} = this.props
    let isRenderToggle = this.isDateCol(selectedColumnDef)
    console.log(this.props)
    let monthActive = dateBy === 'month' ? 'active' : ''
    let yearActive = dateBy === 'year' ? 'active' : ''
    return (
      <div>
        <Choose>
          <When condition={isRenderToggle}>
            <ButtonGroup className='ChartCanvasToggleTime'>
              <Button
                bsStyle='success'
                bsSize='small'
                onClick={() => { changeDateBy('month') }}
                className={monthActive}>
                Month
              </Button>
              <Button
                bsStyle='success'
                bsSize='small'
                onClick={() => { changeDateBy('year') }}
                className={yearActive}>
                Year
              </Button>
            </ButtonGroup>
          </When>
          <Otherwise>
            <div></div>
          </Otherwise>
        </Choose>
      </div>
      )
  }
}

export default DateToggle
