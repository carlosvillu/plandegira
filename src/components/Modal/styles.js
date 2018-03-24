import {styled} from 'styletron-react'

export const Container = styled('div', props => ({
  alignItems: 'center',
  backgroundColor: '#fff',
  color: '#ccc',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100vw',
  zIndex: 2
}))

export const CloseContainer = styled('div', {
  cursor: 'pointer'
})
