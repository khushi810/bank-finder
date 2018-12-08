import React from 'react';
import { Select, Table, Input, Button, Row, Col, Layout } from 'antd';
import { fetchBanks } from '../actions/api'
import _ from 'lodash'
const Option = Select.Option;
const Search = Input.Search;
const { Content } = Layout;

class BankFinder extends React.Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      defaultCity: 'bangalore',
      banks: [],
      filterApplied: false,
      filteredBanks: [],
    };
  }

  // List of cities
  CITIES = [{
    key: 'bangalore',
    name: 'Bangalore'
  }, {
    key: 'mumbai',
    name: 'Mumbai'
  }, {
    key: 'delhi',
    name: 'Delhi'
  }, {
    key: 'chennai',
    name: 'Chennai'
  }, {
    key: 'surat',
    name: 'Surat'
  }]

  // Column definitions for antd table
  BANK_COLUMS = [{
    title: 'Bank ID',
    dataIndex: 'bank_id',
    key: 'bank_id'
  }, {
    title: 'Bank Name',
    dataIndex: 'bank_name',
    key: 'bank_name'
  }, {
    title: 'IFSC',
    dataIndex: 'ifsc',
    key: 'ifsc'
  }, {
    title: 'Branch',
    dataIndex: 'branch',
    key: 'branch'
  }, {
    title: 'State',
    dataIndex: 'state',
    key: 'state'
  }, {
    title: 'District',
    dataIndex: 'district',
    key: 'district'
  }, {
    title: 'City',
    dataIndex: 'city',
    key: 'city'
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }]

  componentDidMount = () => {
    const { defaultCity } = this.state
    // Fetch the list of banks for default city
    this.fetchBanks(defaultCity)
  }

  // Fetch the list of banks for the selected city
  handleChange = value => {
    this.fetchBanks(value);
  }

  // Fetch the list of banks via API
  fetchBanks = (value) => {
    let bankRequest = fetchBanks(value);
    // Resolve promise returned by fetchBanks
    bankRequest.then(response => {
      this.setState({
        banks: response.data
      })
    })
  }

  // Show the list of banks according to the word typed in search area
  searchRecord = (value) => {
    let { banks } = this.state;
    let filterValue = _.toLower(value);
    console.log(filterValue)
    // Filter the list of banks according to the word typed in in search area
    let filteredBanks = banks.filter(e => {
      return (
        _.toLower(e.address).indexOf(filterValue) > -1 ||
        _.toLower(e.city).indexOf(filterValue) > -1 ||
        _.toLower(e.district).indexOf(filterValue) > -1 ||
        _.toLower(e.state).indexOf(filterValue) > -1 ||
        _.toLower(e.branch).indexOf(filterValue) > -1 ||
        _.toLower(e.bank_name).indexOf(filterValue) > -1 ||

        // No partial match for IFSC & bank id
        _.toLower(e.ifsc) === filterValue ||
        _.toString(e.bank_id) === filterValue
      )
    })

    console.log(filteredBanks)
    // Updates the value of filteredBanks
    this.setState({
      filteredBanks: filteredBanks,
      filterApplied: true
    })
  }

  // Clear the list of banks which is shown after the search(keyword)
  clearSearch = () => {
    this.searchedText.value = '';
    this.setState({
      filterApplied: false,
      filteredBanks: []
    })
  }

  render() {
    const { 
      filterApplied, filteredBanks, banks, defaultCity
    } = this.state;
    return (
      <div>
        <Content style={{ padding: '0 50px' }}>
          <Row>
            <Col span={6}>
              <Select defaultValue={defaultCity} style={{ width: 120 }} onChange={this.handleChange}>
                {
                  this.CITIES.map((city) => {
                    return (<Option key={city.key} value={city.key}>{city.name}</Option>)
                  })}
              </Select>
            </Col>
            <Col span={12}>
              <Search
                placeholder="input search text. Press Enter to apply filter"
                onSearch={this.searchRecord}
                style={{ width: 500 }}
                ref={ref => this.searchedText = ref}
              />
            </Col>
            <Col>
            <Button type="primary" onClick={this.clearSearch}>Clear Search</Button>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Table rowKey={record => record.ifsc} dataSource={filterApplied ? filteredBanks : banks} columns={this.BANK_COLUMS}/>
          </Row>
        </Content>
      </div>
    ) 
  }
}

export default BankFinder;