import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';

function Drinking(props) {
  return(
    <div style={{ minHeight: '50vh' }}>
      <Header title='Drinking' />
      <EntryList category="Drinking" entries={props} />
    </div>
  )
}

Drinking.propTypes = {
  entries: PropTypes.array
}

export default Drinking;
