import ReactGA from 'react-ga'
import Chat from './index.jsx'
import * as React from 'react'

export default class FullscreenChat extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    ReactGA.initialize('UA-115208103-1', {
      'debug': true,
      'cookieDomain': 'auto'
    })
    ReactGA.event({ category: 'WebChat', action: 'Rendered Embedded Webchat', nonInteraction: true });
    console.log(ReactGA.ga())
    return <Chat fullscreen={false} {...this.props}/>
  }

}
