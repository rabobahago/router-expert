import React from 'react'
import { Link, Route } from 'react-router-dom'
const Topic = (props) => {
  console.log('PROPS ', props)
  return <h2>{props.match.params.topicId}</h2>
}
const Topics = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/topics/rendering">Rendering with react</Link>
        </li>
        <li>
          <Link to="/topics/components">Components</Link>
        </li>
        <li>
          <Link to="/topics/props-vs-state">Props vs State</Link>
        </li>
      </ul>
      <Route path="/topics/:topicId" component={Topic} />
    </div>
  )
}
export default Topics
