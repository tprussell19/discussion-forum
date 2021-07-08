import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';

function Mobile(props) {
  return(
    <div className='container'>
    <Header title='Mobile' />
    <EntryList category="Mobile" entries={props.entries} />
    </div>
  )
}

Mobile.propTypes = {
  entries: PropTypes.array
}

export default Mobile;
