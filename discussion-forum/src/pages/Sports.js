import { GiBowlingPropulsion } from 'react-icons/gi'
import Header from './../components/Header';
import React from 'react';
import PropTypes from 'prop-types';
import EntryList from '../components/Entries/EntryList';


function Sports(props) {
  return(
    <div className='container'>
    <Header title='Sports' />
    <EntryList category='Sports' entries={props.entries} />
    </div>
  )
}

Sports.propTypes = {
  entries: PropTypes.array
}

export default Sports;
