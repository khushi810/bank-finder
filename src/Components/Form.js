import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;


class Form extends React.Component {

  handleChange(value) {
    console.log(`selected ${value}`);
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
  }]

  render() {
    return (
      <div>
        <Select defaultValue="bangalore" style={{ width: 120 }} onChange={this.handleChange}>
          {this.CITIES.map((city) => <Option value={city.key}>{city.name}</Option>)}
        </Select>
      </div>
    )
  }
}

export default Form;