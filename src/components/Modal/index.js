import Modal from './component'

import compose from 'recompose/compose'
import branch from 'recompose/branch'
import renderNothing from 'recompose/renderNothing'

export default compose(
  branch(
    props => !props.show,
    renderNothing
  )
)(Modal)
