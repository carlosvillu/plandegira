import React, {Component} from 'react'

import Aside from '../../components/Aside'
import Chat from '../../components/Chat'

import {
  Container
} from './styles'

export default class HomePage extends Component {
  static displayName = 'HomePage'

  render () {
    return (
      <Container>
        <Aside />
        <Chat />
      </Container>
    )
  }
}
