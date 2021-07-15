import React, { useState } from 'react'
import { Button, Form, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './starting.css';

export default function Starting() {
  const [acceptCondition, setAcceptCondition] = useState(false);
  return (
    <>
      <Jumbotron>
        <h1>Welcome to Trivia App</h1>
        <p>
          Please Read the following rules before starting the Trivia
          Else you may be disqualified and need to re-attempt the trivia:
        </p>
        <ol>
          <li>Do not open a new tab during the whole Trivia</li>
          <li>Do not minimize the window</li>
          <li>Stay on the content of page; do not open any menus or developer tools or what-so-ever</li>
          <li>Do not resize the window.</li>
        </ol>
        <Form.Check
          type="checkbox"
          aria-label="option 1"
          label="I accept the above conditions"
          checked={acceptCondition}
          onChange={(e) => setAcceptCondition(e.target.checked)}
          className="pb-3"
        />
        <p>
          <Link to='/quiz'>
            <Button
              variant="success"
              disabled={!acceptCondition}

            >{acceptCondition ? "Accept and Start" : "Accept Conditions"}</Button>
          </Link>
        </p>
      </Jumbotron>
    </>
  )
}
