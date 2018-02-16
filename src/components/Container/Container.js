import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Wrapper extends Component {
  markets = () => {
console.log(this.props.markets);

    // return this.props.markets.markets.map(({Marketname}, index)=> {
    //   return <p key={index}>marketName</p>
  // })
}
  render() {
    return (
      <div>
        {this.markets}
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  markets: store.markets
});

export const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);

