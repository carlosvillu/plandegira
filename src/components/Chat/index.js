import React, {Component} from 'react'

import ChatBody from '../ChatBody'

import {
  Container
} from './styles'

export default class Chat extends Component {
  static displayName = 'Chat'

  render () {
    return (
      <Container>
        <ChatBody />
      </Container>
    )
  }
}
