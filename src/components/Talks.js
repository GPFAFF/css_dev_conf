import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import slug from 'slugify';

class Talks extends Component {

  static PropTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    picture: PropTypes.string
  }

  render() {

    const {
      name,
      id,
      picture
    } = this.props.details;

    return (
      <div className="cards">
        <Link to={`/talks/${id}/${slug(name)}`}>
          <h2 className="card_title">{name}</h2>
          <img className="card_image" src={picture} alt={`Label of ${name}`} />
        </Link>
      </div>
    );
  }
}

export default Talks;