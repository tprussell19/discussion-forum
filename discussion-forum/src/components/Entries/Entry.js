import React from 'react';
import PropTypes from 'prop-types';

function Entry(props) {
  return (
    <div className='single-entry-container'>
      <span>{props.votes}</span>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
}

export default Entry;
