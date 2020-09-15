import React from 'react'
import Layout from "./hoc/Layout/Layout"
import {Route} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from "./containers/QuizList/QuizList";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import Auth from "./containers/Auth/Auth";

function App() {
  return (
    <Layout >
        <Route path={'/auth'} component={Auth} />
        <Route path={'/quiz-creator'} component={QuizCreator} />
        <Route path={'/quiz/:id'} component={Quiz} />
        <Route path={'/'} component={QuizList} exact/>
    </Layout>
  );
}

export default App;
