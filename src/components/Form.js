import React from 'react';
import { Select, Table, Input } from 'antd';
import { fetchBanks } from '../actions/api'
const Option = Select.Option;
const Search = Input.Search;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

  handleChange = value => {
    this.fetchBanks(value);
  }

  fetchBanks = (value) => {
    let bankRequest = fetchBanks(value);
    bankRequest.then(response => {
      this.setState({
        banks: response.data
      })
      console.log(this.state)
    })
  }

  searchRecord = (value) => {
    let { banks } = this.state;
    let filteredBanks = banks.filter(e => {
      return (
        e.address.indexOf(value) > -1 ||
        e.city.indexOf(value) > -1 ||
        e.district.indexOf(value) > -1 ||
        e.state.indexOf(value) > -1 ||
        e.branch.indexOf(value) > -1 ||
        e.ifsc.indexOf(value) > -1 ||
        e.bank_name.indexOf(value) > -1 ||
        e.bank_id === value
      )
    })

    this.setState({
      banks: filteredBanks
    })
  }

  render() {
    return (
      <div>
        <Select style={{ width: 120 }} onChange={this.handleChange}>
          {
            this.CITIES.map((city) => {
              return (<Option key={city.key} value={city.key}>{city.name}</Option>)
            })}
        </Select>
        <Search
          placeholder="input search text"
          onSearch={this.searchRecord}
          style={{ width: 200 }}
        />
        <Table rowKey={record => record.ifsc} dataSource={this.state.banks} columns={this.BANK_COLUMS}/>
      </div>
    ) 
  }
}

export default Form;