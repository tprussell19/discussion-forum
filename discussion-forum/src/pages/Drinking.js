import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';

function Drinking(props) {
  return(
    <div className='container'>
      <Header title='Drinking' />
      <EntryList category="Drinking" entries={props.entries} />
    </div>
  )
}

Drinking.propTypes = {
  entries: PropTypes.array
}

export default Drinking;
