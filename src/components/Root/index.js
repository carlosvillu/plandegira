import React, {Component} from 'react'

import {
  Container
} from './styles'

export default class Root extends Component {
  static displayName = 'Root'
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    const {children} = this.props
    return <Container>{children}</Container>
  }
}
