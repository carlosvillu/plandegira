import React, {Component} from 'react'

import {
  Container
} from './styles'

import ChannelList from '../ChannelList'
import UserList from '../UserList'

export default class Aside extends Component {
  static displayName = 'Aside'

  render () {
    return (
      <Container>
        <ChannelList />
        <UserList />
      </Container>
    )
  }
}
