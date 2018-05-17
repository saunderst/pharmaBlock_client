
import React, { Component } from "react";
import { Table, TableBody, TableFooter,TableHeader, TableHeaderColumn,TableRow,TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Resource from '../models/resource'

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};


class PharmaCompleted extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: true,
        height: '600px',
        contracts: [],
    }
    }
    handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  componentWillMount() { 
    Resource('pharmacos', this.props.userId).getContracts()
    .then((response) => 
    { console.log(response)
      let completedContracts =[];
      let dateToday = Math.trunc((new Date()).getTime()/1000)
      response.forEach((contract) => {
        if (contract.contractStatus === "filled" && dateToday > contract.end_date) {
          completedContracts.push(contract);
        }
      })
       this.setState(...this.state,{ contracts: completedContracts})})
   
    .catch(e => console.log('Error'))
   }

    render() {
      return (
    <div className="pharma-completed-container">
    <h2 className="page-headers">Completed Prescriptions</h2>
    <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
      
            <TableRow>
            <TableHeaderColumn tooltip="The ID">Contract ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="Drug Name">Generic Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Drug Name">Brand Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Doses">Number of Doses</TableHeaderColumn>
              <TableHeaderColumn tooltip="Cost">Cost of Contract</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.state.contracts.map( (contract) => (
              <TableRow key={contract.cId}>
                <TableRowColumn>{contract.cId}</TableRowColumn>
                <TableRowColumn>{contract.name}</TableRowColumn>
                <TableRowColumn>{contract.brand_name}</TableRowColumn>
                <TableRowColumn>{contract.numberOfDoses}</TableRowColumn>
                <TableRowColumn>${contract.costPerDose *contract.numberOfDoses}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
   
        </Table>

      
      </div>

    </div>

      );
    }
  }
  
  export default PharmaCompleted;