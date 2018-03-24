/* eslint react/no-multi-comp:0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

import { Container } from './styles'

export class NoHeader extends Component {
  static displayName = 'NoHeader'
  static propTypes = { currentUsersUseCase: PropTypes.func }
  componentDidMount () {
    this.props.currentUsersUseCase()
  }
  render () {
    return null
  }
}

export default class Header extends Component {
  static displayName = 'Header'
  static propTypes = {
    currentUsers: PropTypes.object,
    i18n: PropTypes.object
  }

  render () {
    const { currentUsers, i18n } = this.props

    return (
      <Container>
        <span>{currentUsers.name}|</span>
        <Link to='/logout'>{i18n.t('LOGOUT_LINK')}</Link>
      </Container>
    )
  }
}
