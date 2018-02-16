import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Container.css';
import { withRouter } from 'react-router-dom';


export class Wrapper extends Component {
  markets = () => {
    console.log(this.props.markets)
    return this.props.markets.map((market, index)=> {
      return <li key={index}>{market.marketname}</li>;
  });
}
  render() {
    return (
      <div className='container'>
        <ol>
          {this.markets()}
        </ol>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  markets: store.markets
});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));

