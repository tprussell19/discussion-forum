import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';

function Tabletop(props) {
  return(
    <div className='container'>
      <Header title='Tabletop' />
      <EntryList category="Tabletop" entries={props.entries} />
    </div>
  )
}

Tabletop.propTypes = {
  entries: PropTypes.array
}

export default Tabletop;
