import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilms3 } from '../action/FilmActions';
import { Button } from 'react-bootstrap';
import checkPic from './classes/checkPicture';

export class Button3 extends Component {
 
  render() {
    const films = this.props.films3.map(film => (
        <ul key={film.imdbID}>
          <li><img src={checkPic(film.Poster)} className="rounded-circle" width="200" height="200" alt=""/></li>
          <li><h3>{film.Title}</h3></li>
          <li>{film.Year}</li>
        </ul>
    ));
    return (
      <div className="col-sm-4 col-md-4">
        <Button onClick={() => this.props.fetchFilms3()} variant="danger">View details</Button>
        { films }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  films3: state.films.films3
});

function matchDispatchToProps(dispatch){
  return bindActionCreators({ fetchFilms3: fetchFilms3 }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Button3);