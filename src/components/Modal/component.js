import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Container, CloseContainer } from './styles'

export default class Modal extends PureComponent {
  static displayName = 'Modal'
  static defaultProps = {
    onRequestClose: () => {}
  }
  static propTypes = {
    children: PropTypes.element,
    onRequestClose: PropTypes.func
  }

  onRequestClose = () => {
    this.props.onRequestClose()
  }

  render () {
    const { children } = this.props

    return (
      <Container>
        <CloseContainer onClick={this.onRequestClose}>Close</CloseContainer>
        <div>{React.Children.only(children)}</div>
      </Container>
    )
  }
}
