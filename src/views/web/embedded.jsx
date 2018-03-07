import Chat from './index.jsx'
import * as React from 'react'

export default class FullscreenChat extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <Chat fullscreen={false} {...this.props}/>
  }
}
