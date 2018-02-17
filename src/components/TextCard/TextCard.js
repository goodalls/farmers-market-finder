import React, { Component } from 'react';
import './TextCard.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';



export class TextCard extends Component {

  renderCheck = () => {
    // const id = this.props.history.id
    // this.props.markets.find(market=> market.id === id)
  }
  render() {
    return (
      <div className='text-card'>
        {this.renderCheck}
      </div>
    )
  }
}

export const mapStateToProps = state => ({ markets: state.markets });

export const mapDispatchToProps = dispatch => ({
  
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TextCard));
