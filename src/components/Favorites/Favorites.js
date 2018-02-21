import React, { Component } from 'react';
import './Favorites.css';
import { connect } from 'react-redux';



export class Favorites extends Component {

  this.props.user.favorites.map((fav)=>{
    return (
      <article>
        <button onClick={}>Favorite</button>
        
      </article>
      
    )
  })
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
