import React from 'react';
import PropTypes from 'prop-types';

import Entry from './Entry'

function EntryList(props) {
  return (
    <div className='grid entry_list'>
      { props.entries.length > 0 ?
        props.entries.map(e => <Entry key={e.id} title={e.title} body={e.body} votes={e.votes} /> )
        : <div><h3>No entries found for {props.category} Games. :(</h3></div>
      }
    </div>
  )
}

EntryList.propTypes = {
  category: PropTypes.string.isRequired,
  entries: PropTypes.array
}

export default EntryList;
