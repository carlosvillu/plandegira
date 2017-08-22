import React, {Component} from 'react'

import Header from '../Header'
import ChatBody from '../ChatBody'

import {
  Container
} from './styles'

export default class Chat extends Component {
  static displayName = 'Chat'

  render () {
    return (
      <Container>
        <Header />
        <ChatBody />
      </Container>
    )
  }
}
