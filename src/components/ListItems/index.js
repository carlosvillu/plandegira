import ListItems, { NoItems } from './component'

import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'
import compose from 'recompose/compose'

export default compose(
  branch(props => props.items.length === 0, renderComponent(NoItems))
)(ListItems)
