import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import DefaultListGroupItem from '../components/DefaultListGroupItem'
import DefaultListGroup from '../components/DefaultListGroup'
import FieldTypeButton from '../components/FieldTypeButton'
import FieldButton from '../components/FieldButton'
import FieldColumns from '../components/FieldColumns'
import MetadataCard from '../components/MetadataCard'
import { Panel, Row, Col, Button } from 'react-bootstrap'

storiesOf('DefaultListGroupItem', module)
  .add('', () => (
    <DefaultListGroupItem itemProps={{'className': 'myclass-active', 'label': 'some column or type'}} />
  ))
storiesOf('DefaultListGroup', module)
  .add('type filter list items', () => (
    <Panel collapsible defaultExpanded header='Narrow By'>
      <DefaultListGroup
        itemComponent={FieldTypeButton}
        className={'ColumnSelector-list-group'}
        items={
          [{'count': 10, 'label': 'text', 'isSelected': true, 'actionFxn': action('clicked')},
          {'label': 'number', 'isSelected': false, 'count': 3}, {'label': 'boolean', 'isSelected': true, 'count': 10},
          {'label': 'date', 'count': 5, 'isSelected': false} ]} />
    </Panel>
  ))
  .add('field items', () => (
    <Panel collapsible defaultExpanded header='Narrow By'>
      <DefaultListGroup
        itemComponent={FieldButton}
        className={'ColumnSelector-list-group'}
        items={
          [{'label': 'col1', 'isSelected': false, 'actionFxn': action('clicked'), 'type': 'text'},
          {'type': 'number', 'isSelected': false, 'label': 'col2', 'actionFxn': action('clicked')},
          {'type': 'boolean', 'isSelected': false, 'label': 'col3', 'actionFxn': action('clicked')},
          {'type': 'date', label: 'col4', 'isSelected': false, 'actionFxn': action('clicked')}]} />
    </Panel>
  ))
  .add('field items initialized', () => (
    <Panel collapsible defaultExpanded header='Narrow By'>
      <DefaultListGroup
        itemComponent={FieldButton}
        className={'ColumnSelector-list-group'}
        items={
          [{'label': 'col1', 'actionFxn': action('clicked'), 'type': 'text'},
          {'type': 'number', 'label': 'col2', 'actionFxn': action('clicked')},
          {'type': 'boolean', 'label': 'col3', 'actionFxn': action('clicked')},
          {'type': 'date', label: 'col4', 'actionFxn': action('clicked')}]} />
    </Panel>
  ))
storiesOf('Metadata Container', module)
  .add('', () => (
    <FieldColumns
      fieldList={[
[
  {
    "count": "2107421",
    "cardinality": "10417",
    "id": "vw6y-z8j6_lat",
    "completeness": "0.8685",
    "distinctness": "0.00494",
    "is_primary_key_candidate": "false",
    "max": "37.88",
    "mean": "32.8",
    "min": "0",
    "missing_count": "319028",
    "mode": "0",
    "null": "0",
    "range": "37.88",
    "uniqueness": "0.00429",
    "global_field": false,
    "key": "lat",
    "description": "Latitude of the location, using the WGS84 projection",
    "format": "number",
    "field_documented": true,
    "type": "number",
    "name": "Latitude",
    "min_field_length": null,
    "avg_field_length": null,
    "max_field_length": null,
    "median": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "2107421",
    "cardinality": "1503",
    "id": "vw6y-z8j6_long",
    "completeness": "0.8685",
    "distinctness": "0.00071",
    "is_primary_key_candidate": "false",
    "max": "0",
    "mean": "-106.33",
    "min": "-141.22",
    "missing_count": "319028",
    "mode": "0",
    "null": "0",
    "range": "141.22",
    "uniqueness": "0.00062",
    "global_field": false,
    "key": "long",
    "description": "Longitude of the location, using the WGS84 projection",
    "format": "number",
    "field_documented": true,
    "type": "number",
    "name": "Longitude",
    "min_field_length": null,
    "avg_field_length": null,
    "max_field_length": null,
    "median": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "417053",
    "avg_field_length": "93.68",
    "cardinality": "413969",
    "id": "vw6y-z8j6_media_url",
    "completeness": "0.1719",
    "distinctness": "0.99261",
    "is_primary_key_candidate": "false",
    "max_field_length": "132",
    "min_field_length": "18",
    "missing_count": "0",
    "mode": "http://mobile311.sfgov.org/media/san_francisco/report/photos/56cb24c3df86c2b3bc9e8a5a/report.jpg",
    "null": "2009396",
    "uniqueness": "0.17061",
    "global_field": false,
    "key": "media_url",
    "description": "URL of related image where applicable. Note, certain categories will not contain images to protect the privacy of individuals.",
    "format": "url",
    "field_documented": true,
    "type": "text",
    "name": "Media URL",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "2009372",
    "avg_field_length": "13.24",
    "cardinality": "117",
    "id": "vw6y-z8j6_neighborhoods_sffind_boundaries",
    "completeness": "0.8281",
    "distinctness": "0.00006",
    "is_primary_key_candidate": "false",
    "max_field_length": "28",
    "min_field_length": "6",
    "missing_count": "0",
    "mode": "Mission",
    "null": "417077",
    "uniqueness": "0.00005",
    "global_field": true,
    "key": "neighborhoods_sffind_boundaries",
    "description": "San Francisco Neighborhood as defined in 'SF Find Neighborhoods'",
    "format": "text",
    "alias": "Neighborhood?",
    "field_documented": true,
    "type": "text",
    "name": "Neighborhood",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "field_type_flag": null,
    "globalDescription": null,
    "isCategory": true
  },
  {
    "count": "2105464",
    "cardinality": "150366",
    "id": "vw6y-z8j6_point",
    "completeness": "0.8677",
    "distinctness": "0.07142",
    "is_primary_key_candidate": "false",
    "missing_count": "0",
    "null": "320985",
    "uniqueness": "0.06197",
    "global_field": false,
    "key": "point",
    "description": "latitude and longitude using the (WGS84) projection.",
    "format": "location",
    "field_documented": true,
    "type": "geometry: point",
    "name": "Point",
    "min_field_length": null,
    "avg_field_length": null,
    "max_field_length": null,
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "mode": null,
    "range": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "2103667",
    "avg_field_length": "9.18",
    "cardinality": "11",
    "id": "vw6y-z8j6_police_district",
    "completeness": "0.867",
    "distinctness": "0.00001",
    "is_primary_key_candidate": "false",
    "max_field_length": "26",
    "min_field_length": "4",
    "missing_count": "0",
    "mode": "MISSION",
    "null": "322782",
    "uniqueness": "0",
    "global_field": false,
    "key": "police_district",
    "description": "San Francisco Police District as defined in 'Current Police Districts'",
    "format": "text",
    "field_documented": true,
    "type": "text",
    "name": "Police District",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null,
    "isCategory": true
  },
  {
    "count": "2426449",
    "avg_field_length": "23",
    "cardinality": "2411373",
    "id": "vw6y-z8j6_requested_datetime",
    "completeness": "1",
    "distinctness": "0.99379",
    "is_primary_key_candidate": "false",
    "max_field_length": "23",
    "max": "2017-05-30T00:57:40.000",
    "min_field_length": "23",
    "min": "2007-11-19T10:24:15.000",
    "missing_count": "0",
    "mode": "2012-03-13T12:31:08.000",
    "null": "0",
    "range": "3479",
    "uniqueness": "0.99379",
    "global_field": false,
    "key": "requested_datetime",
    "description": "The date and time when the service request was made",
    "format": "calendar_date",
    "field_documented": true,
    "type": "date",
    "name": "Opened",
    "mean": null,
    "median": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "2327432",
    "avg_field_length": "50.81",
    "cardinality": "106635",
    "id": "vw6y-z8j6_service_details",
    "completeness": "0.9592",
    "distinctness": "0.04582",
    "is_primary_key_candidate": "false",
    "max_field_length": "53",
    "min_field_length": "7",
    "missing_count": "30053",
    "mode": "Other Loose Garbage",
    "null": "68964",
    "uniqueness": "0.04395",
    "global_field": false,
    "key": "service_details",
    "description": "The human readable name of the service request details",
    "format": "text",
    "field_documented": true,
    "type": "text",
    "name": "Request Details",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "2426449",
    "avg_field_length": "27.4",
    "cardinality": "101",
    "id": "vw6y-z8j6_service_name",
    "completeness": "1",
    "distinctness": "0.00004",
    "is_primary_key_candidate": "false",
    "max_field_length": "53",
    "min_field_length": "8",
    "missing_count": "0",
    "mode": "Street and Sidewalk Cleaning",
    "null": "0",
    "uniqueness": "0.00004",
    "global_field": false,
    "key": "service_name",
    "description": "The human readable name of the service request type",
    "format": "text",
    "field_documented": true,
    "type": "text",
    "name": "Category",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null,
    "isCategory": true
  },
  {
    "count": "2426449",
    "cardinality": "2426449",
    "id": "vw6y-z8j6_service_request_id",
    "completeness": "1",
    "distinctness": "1",
    "is_primary_key_candidate": "true",
    "max": "10281200",
    "mean": "3458318.63",
    "min": "128267",
    "missing_count": "0",
    "mode": "128267",
    "null": "0",
    "range": "10152933",
    "uniqueness": "1",
    "global_field": false,
    "key": "service_request_id",
    "description": "The unique ID of the service request created.",
    "format": "number",
    "field_documented": true,
    "type": "number",
    "name": "CaseID",
    "min_field_length": null,
    "avg_field_length": null,
    "max_field_length": null,
    "median": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "2362176",
    "avg_field_length": "50.44",
    "cardinality": "1089",
    "id": "vw6y-z8j6_service_subtype",
    "completeness": "0.9735",
    "distinctness": "0.00046",
    "is_primary_key_candidate": "false",
    "max_field_length": "114",
    "min_field_length": "4",
    "missing_count": "40946",
    "mode": "General Cleaning",
    "null": "23327",
    "uniqueness": "0.00045",
    "global_field": false,
    "key": "service_subtype",
    "description": "The human readable name of the service request subtype",
    "format": "text",
    "field_documented": true,
    "type": "text",
    "name": "Request Type",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "2426449",
    "avg_field_length": "11.75",
    "cardinality": "8",
    "id": "vw6y-z8j6_source",
    "completeness": "1",
    "distinctness": "0",
    "is_primary_key_candidate": "false",
    "max_field_length": "17",
    "min_field_length": "7",
    "missing_count": "0",
    "mode": "Voice In",
    "null": "0",
    "uniqueness": "0",
    "global_field": false,
    "key": "source",
    "description": "how the service request was made",
    "format": "text",
    "field_documented": true,
    "type": "text",
    "name": "Source",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null,
    "isCategory": true
  },
  {
    "count": "2426449",
    "avg_field_length": "5",
    "cardinality": "2",
    "id": "vw6y-z8j6_status_description",
    "completeness": "1",
    "distinctness": "0",
    "is_primary_key_candidate": "false",
    "max_field_length": "6",
    "min_field_length": "4",
    "missing_count": "0",
    "mode": "Closed",
    "null": "0",
    "uniqueness": "0",
    "global_field": false,
    "key": "status_description",
    "description": "A single-word indicator of the current state of the service request. (Note: GeoReport V2 only permits ‘open’ and ‘closed’)",
    "format": "text",
    "field_documented": true,
    "type": "text",
    "name": "Status",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null,
    "isCategory": true
  },
  {
    "count": "2189014",
    "avg_field_length": "69.75",
    "cardinality": "459689",
    "id": "vw6y-z8j6_status_notes",
    "completeness": "0.9021",
    "distinctness": "0.21",
    "is_primary_key_candidate": "false",
    "max_field_length": "740",
    "min_field_length": "1",
    "missing_count": "236532",
    "mode": "See Notes tab for more details -",
    "null": "903",
    "uniqueness": "0.18945",
    "global_field": false,
    "key": "status_notes",
    "description": "Explanation of why status was changed to current state or more details on current status than conveyed with status alone",
    "format": "text",
    "field_documented": true,
    "type": "text",
    "name": "Status Notes",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "0",
    "cardinality": "0",
    "id": "vw6y-z8j6_case_id",
    "completeness": "0",
    "distinctness": "0",
    "is_primary_key_candidate": "false",
    "max": "0",
    "mean": "0",
    "min": "0",
    "missing_count": "0",
    "mode": "0",
    "null": "0",
    "range": "0",
    "uniqueness": "0",
    "min_field_length": null,
    "avg_field_length": null,
    "max_field_length": null,
    "median": null,
    "name": null,
    "alias": null,
    "description": null,
    "field_type_flag": null,
    "key": null,
    "field_documented": null,
    "global_field": null,
    "globalDescription": null
  },
  {
    "count": "0",
    "avg_field_length": "23",
    "cardinality": "0",
    "id": "vw6y-z8j6_opened",
    "completeness": "0",
    "distinctness": "0",
    "is_primary_key_candidate": "false",
    "max_field_length": "23",
    "max": "0",
    "min_field_length": "23",
    "min": "0",
    "missing_count": "0",
    "mode": "0",
    "null": "0",
    "range": "3315",
    "uniqueness": "0",
    "mean": null,
    "median": null,
    "name": null,
    "alias": null,
    "description": null,
    "field_type_flag": null,
    "key": null,
    "field_documented": null,
    "global_field": null,
    "globalDescription": null
  },
  {
    "count": "2424462",
    "avg_field_length": "40.89",
    "cardinality": "178209",
    "id": "vw6y-z8j6_address",
    "completeness": "0.9992",
    "distinctness": "0.0735",
    "is_primary_key_candidate": "false",
    "max_field_length": "54",
    "min_field_length": "36",
    "missing_count": "1973",
    "mode": "Not associated with a specific address",
    "null": "14",
    "uniqueness": "0.07344",
    "global_field": true,
    "key": "address",
    "description": "Human readable address or description of location",
    "format": "text",
    "alias": "Address",
    "field_documented": true,
    "type": "text",
    "globalDescription": "The full location of a record often including the street number, name and type; city; state; and zip code.",
    "name": "Address",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "field_type_flag": null
  },
  {
    "count": "2426316",
    "avg_field_length": "30.29",
    "cardinality": "400",
    "id": "vw6y-z8j6_agency_responsible",
    "completeness": "0.9999",
    "distinctness": "0.00016",
    "is_primary_key_candidate": "false",
    "max_field_length": "62",
    "min_field_length": "9",
    "missing_count": "133",
    "mode": "DPW Ops Queue",
    "null": "0",
    "uniqueness": "0.00016",
    "global_field": false,
    "key": "agency_responsible",
    "description": "The agency responsible for fulfilling or otherwise addressing the service request.",
    "format": "text",
    "field_documented": true,
    "type": "text",
    "name": "Responsible Agency",
    "min": null,
    "max": null,
    "mean": null,
    "median": null,
    "range": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "2356710",
    "avg_field_length": "23",
    "cardinality": "1907286",
    "id": "vw6y-z8j6_closed_date",
    "completeness": "0.9713",
    "distinctness": "0.8093",
    "is_primary_key_candidate": "false",
    "max_field_length": "23",
    "max": "2017-05-30T00:27:41.000",
    "min_field_length": "23",
    "min": "2008-07-01T06:10:23.000",
    "missing_count": "0",
    "mode": "2015-08-07T12:00:00.000",
    "null": "69739",
    "range": "3254",
    "uniqueness": "0.78604",
    "global_field": false,
    "key": "closed_date",
    "description": "The date and time when the service request was closed",
    "format": "calendar_date",
    "field_documented": true,
    "type": "date",
    "name": "Closed",
    "mean": null,
    "median": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  },
  {
    "count": "2105378",
    "cardinality": "12",
    "id": "vw6y-z8j6_supervisor_district",
    "completeness": "0.8677",
    "distinctness": "0.00001",
    "is_primary_key_candidate": "false",
    "max": "11",
    "mean": "6.3",
    "min": "-1",
    "missing_count": "0",
    "mode": "9",
    "null": "321071",
    "range": "12",
    "uniqueness": "0",
    "global_field": true,
    "key": "supervisor_district",
    "description": "San Francisco Supervisor District as defined in 'Supervisor Districts as of April 2012'",
    "format": "number",
    "alias": "Supervisor District",
    "field_documented": true,
    "type": "number",
    "globalDescription": "There are 11 members of the Board of Supervisors in San Francisco, each representing a geographic district. These are numbered 1 through 11. See the district boundaries here: https://data.sfgov.org/d/xz9b-wyfc",
    "name": "Supervisor District",
    "min_field_length": null,
    "avg_field_length": null,
    "max_field_length": null,
    "median": null,
    "field_type_flag": null,
    "isCategory": true
  },
  {
    "count": "2426449",
    "avg_field_length": "23",
    "cardinality": "1973686",
    "id": "vw6y-z8j6_updated_datetime",
    "completeness": "1",
    "distinctness": "0.81341",
    "is_primary_key_candidate": "false",
    "max_field_length": "23",
    "max": "2017-05-30T03:25:03.000",
    "min_field_length": "23",
    "min": "2008-07-01T06:10:23.000",
    "missing_count": "0",
    "mode": "2015-08-07T12:00:00.000",
    "null": "0",
    "range": "3254",
    "uniqueness": "0.81341",
    "global_field": false,
    "key": "updated_datetime",
    "description": "The date and time when the service request was last modified. For requests with status=closed, this will be the date the request was closed",
    "format": "calendar_date",
    "field_documented": true,
    "type": "date",
    "name": "Updated",
    "mean": null,
    "median": null,
    "alias": null,
    "field_type_flag": null,
    "globalDescription": null
  }]]}
    sortBy={'alpha'}
    />
  )) 

storiesOf('Metadata Card', module)
  .add('', () => (
    <MetadataCard
      name={'Eviction Id'}
      fieldFormat={'number'}
      description={'blah blah blah blah blah blah blah blah blah blah blah blah'}
      fieldMin={'12'}
      fieldMax= {'2'} />
  )) 