import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Starting from './Starting/Starting';
import QuizContainer from './QuizContainer/QuizContainer';
import Navbar from './Navbar/NavBar';
import Feedback from './Feedback/Feedback';
import Question from './Question/Question';
import Result from './Result/Result';
import AnimatedText from './AnimatedDonut/AnimatedText';
import TestCheating from './CheatingAlert/TestCheating';

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Starting} />
        <Route exact path='/quiz' component={QuizContainer} />
        <Route
          exact
          path='/test'
          render={() =>
            <Question
              correct_answer='50'
              incorrect_answers={['59', '60', '25']}
              index={0}
              question='How many Hz does the video standard PAL support?'
              key='55110140-5e7c-4d8b-b130-2ec9d5310809'
              total={10}
            />
          }
        />
        <Route exact path='/feedback' component={Feedback} />
        <Route exact path='/result' component={Result} />
        <Route exact path='/text' component={AnimatedText} />
        <Route exact path='/alert' component={TestCheating} />
      </Switch>
    </>
  )
}
