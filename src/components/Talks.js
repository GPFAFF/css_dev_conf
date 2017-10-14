import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import slug from 'slugify';

class Talks extends Component {

  render() {

    const {
      name,
      labels,
      id
    } = this.props.details;

    return (
      <div className="talks">
        <Link to={`/talks/${id}/${slug(name)}`}>
          <h2>{name}</h2>
          <img src="#" alt={`Label of ${name}`} />
        </Link>
      </div>
    );
  }
}

export default Talks;