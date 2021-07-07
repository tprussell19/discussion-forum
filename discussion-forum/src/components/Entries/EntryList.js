import React from 'react';
import PropTypes from 'prop-types';

import Entry from './Entry'

function EntryList(props) {
  return (
    <>
      { props.entries.length > 0 ?
        props.entries.map(entry => <Entry entry={entry} /> )
        : <div><h3>No entries found for {props.category} Games. :(</h3></div>
      }
    </>
  )
}

EntryList.propTypes = {
  category: PropTypes.string.isRequired,
  entries: PropTypes.array
}

export default EntryList;