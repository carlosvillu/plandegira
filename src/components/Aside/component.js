import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

import AddBandForm from '../AddBandForm'
import AddEventForm from '../AddEventForm'
import Header from '../Header'
import BandList from '../BandList'
import EventList from '../EventList'
import Modal from '../Modal'

export default class Aside extends Component {
  static displayName = 'Aside'
  static propTypes = {
    handlerRequestCloseModalAddBand: PropTypes.func,
    handlerRequestCloseModalAddEvent: PropTypes.func,
    modalAddBandUI: PropTypes.bool,
    modalAddEventUI: PropTypes.bool
  }

  render () {
    const {
      handlerRequestCloseModalAddBand,
      handlerRequestCloseModalAddEvent,
      modalAddBandUI,
      modalAddEventUI
    } = this.props

    return (
      <Container>
        <Header />
        <BandList />
        <EventList />
        <Modal
          show={modalAddBandUI}
          onRequestClose={handlerRequestCloseModalAddBand}
        >
          <AddBandForm />
        </Modal>
        <Modal
          show={modalAddEventUI}
          onRequestClose={handlerRequestCloseModalAddEvent}
        >
          <AddEventForm />
        </Modal>
      </Container>
    )
  }
}
