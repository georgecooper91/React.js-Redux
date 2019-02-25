import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilms2 } from '../action/FilmActions';
import { Button } from 'react-bootstrap';
import checkPic from './classes/checkPicture';

export class Button2 extends Component {
 
  render() {
    const films = this.props.films2.map(film => (
        <ul key={film.imdbID}>
          <li><img src={checkPic(film.Poster)} className="rounded-circle" width="200" height="200" alt=""/></li>
          <li><h3>{film.Title}</h3></li>
          <li>{film.Year}</li>
        </ul>
    ));
    return (
      <div className="col-sm-4 col-md-4">
        <Button onClick={() => this.props.fetchFilms2()} variant="success">View details</Button>
        { films }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  films2: state.films.films2
});

function matchDispatchToProps(dispatch){
  return bindActionCreators({ fetchFilms2: fetchFilms2 }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Button2);