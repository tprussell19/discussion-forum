import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';

function Video(props) {
  return(
    <div className='container'>
    <Header title='Video' />
    <EntryList category="Video" entries={props.entries} />
    </div>
  )
}

Video.propTypes = {
  entries: PropTypes.array
}

export default Video;
