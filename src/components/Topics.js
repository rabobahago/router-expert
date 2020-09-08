import React from 'react'
import { Link, Route } from 'react-router-dom'
const Topic = ({ match }) => {
  //console.log('PROPS ', props)
  return <h2>{match.params.topicId}</h2>
}
const Topics = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with react</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-vs-state`}>Props vs State</Link>
        </li>
      </ul>
      <hr />
      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  )
}
export default Topics
