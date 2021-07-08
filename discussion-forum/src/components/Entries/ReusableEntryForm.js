import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ReusableEntryForm(props) {
  const [formShowing, toggleForm] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const formSubmissionHandler = event => {
    event.preventDefault()
    console.log(title, body, props.category)
    // get all the values, and then push them up
    props.formSubmissionHandler(title, body, props.category)
    setTitle("")
    setBody("")
  }

  return (
    <div className='flex flex-col'>
      <button onClick={() => toggleForm(!formShowing)}>{ formShowing ? "Cancel New Entry" : "Post New Entry" }</button>
      { formShowing ?
        <>
          <h4>Post new entry:</h4>
          <form onSubmit={event => formSubmissionHandler(event)} className='flex flex-col wide'>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              name='title'
              placeholder='Title' />
            <textarea
              value={body}
              onChange={e => setBody(e.target.value)}
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
  formSubmissionHandler: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired
};

export default ReusableEntryForm;
