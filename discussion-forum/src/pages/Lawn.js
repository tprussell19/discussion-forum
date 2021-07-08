import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';

function Lawn(props) {
  return(
    <div className='container'>
      <Header title='Lawn' />
      <EntryList category="Lawn" entries={props.entries} />
    </div>
  )
}

Lawn.propTypes = {
  entries: PropTypes.array
}

export default Lawn;
