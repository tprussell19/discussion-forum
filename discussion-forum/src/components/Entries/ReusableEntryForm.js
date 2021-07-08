import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ReusableEntryForm(props) {
  const [formShowing, toggleForm] = useState(false);

  return (
    <div className='flex flex-col'>
      <button onClick={() => toggleForm(!formShowing)}>{ formShowing ? "Cancel New Entry" : "Post New Entry" }</button>
      { formShowing ?
        <>
          <h4>Post new entry:</h4>
          <form onSubmit={props.formSubmissionHandler} className='flex flex-col wide'>
            <input
              type='text'
              name='title'
              placeholder='Title' />
            <textarea
              name='body'
              placeholder='Content' />
            <button type='submit'>Post</button>
          </form>
        </>
        : null
      }
    </div>
  );
}

ReusableEntryForm.propTypes = {
  formSubmissionHandler: PropTypes.func.isRequired
};

export default ReusableEntryForm;
