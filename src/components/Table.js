import React, { Component } from 'react';
import '../css/Table.css';

class Table extends Component {
  render() {
    const headers = this.props.data.shift()
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {headers.map((text, index) => {
                return <th key={index}>{text}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((row, index) => {
              return (<tr key={index}>
                {row.map((text, index) => {
                  return <td key={index}>{text}</td>
                })}
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
