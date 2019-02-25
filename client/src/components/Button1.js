import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilms } from '../action/FilmActions';
import { Button } from 'react-bootstrap';
import checkPic from './classes/checkPicture';

export class Button1 extends Component {
  
  render() {
    const films = this.props.films.map(film => (
        <ul key={film.imdbID}>
          <li><img src={checkPic(film.Poster)} className="rounded-circle" width="200" height="200" alt="" /></li>
          <li><h3>{film.Title}</h3></li>
          <li>{film.Year}</li>
        </ul>
    ));
    return (
      <div className="col-sm-4 col-md-4">
        <Button onClick={() => this.props.fetchFilms()} variant="primary" id="_token" value="{{ csrf_token() }}">View details</Button>
        { films }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  films: state.films.films
});

function matchDispatchToProps(dispatch){
  return bindActionCreators({ fetchFilms: fetchFilms }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Button1);