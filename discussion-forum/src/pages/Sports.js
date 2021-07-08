import React from 'react';
import PropTypes from 'prop-types';
import { GiBowlingPropulsion } from 'react-icons/gi'

import Header from './../components/Header';
import EntryList from '../components/Entries/EntryList';
import ReusableEntryForm from './../components/Entries/ReusableEntryForm';

function Sports(props) {
  return(
    <div className='container'>
    <Header title='Sports' />
    <div className='flex flex-row new-entry-container'>
        <ReusableEntryForm formSubmissionHandler={props.addOrEditEntry} category="sports" />
      </div>
    <EntryList category='Sports' entries={props.entries} />
    </div>
  )
}

Sports.propTypes = {
  entries: PropTypes.array,
  addOrEditEntry: PropTypes.func.isRequired
}

export default Sports;
