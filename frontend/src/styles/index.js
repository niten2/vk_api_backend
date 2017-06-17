import styled from 'styled-components'

export const Title = styled.h4`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

export const Button = styled.button`
	/* Adapt the colours based on primary prop */
	background: ${props => props.primary ? 'palevioletred' : 'white'};
	color: ${props => props.primary ? 'white' : 'palevioletred'};

	font-size: 1em;
	margin: auto;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;

`

export const Link = ({ className, children }) => (
	<a className={className}>
		{children}
	</a>
)

export const StyledLink = styled(Link)`
	color: palevioletred;
	font-weight: bold;
`

