import Aside from './component'

import {
  mapUIResponseToProps,
  mapUIServiceToProps,
  compose
} from '@s-ui/react-domain-connector'
import withHandlers from 'recompose/withHandlers'

export default compose(
  mapUIResponseToProps('modalAddBand', 'modalAddEvent'),
  mapUIServiceToProps('modalAddBand', 'modalAddEvent'),
  withHandlers({
    handlerRequestCloseModalAddBand: props => () =>
      props.setModalAddBandUI(false),
    handlerRequestCloseModalAddEvent: props => () =>
      props.setModalAddEventUI(false)
  })
)(Aside)
