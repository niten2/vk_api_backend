import React, { Component } from 'react'

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Button = styled.button`
	/* Adapt the colours based on primary prop */
	background: ${props => props.primary ? 'palevioletred' : 'white'};
	color: ${props => props.primary ? 'white' : 'palevioletred'};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

const Link = ({ className, children }) => (
	<a className={className}>
		{children}
	</a>
)

const StyledLink = styled(Link)`
	color: palevioletred;
	font-weight: bold;
`;


class App extends Component {
  render() {
    return (
      <div className="App">

        <Wrapper>
          <Title>Hello World, this is my first styled component!</Title>
        </Wrapper>

        <Button>Normal</Button>

        <Link>Unstyled, boring Link</Link>
          <br />
          <StyledLink>Styled, exciting Link</StyledLink>

      </div>

    );
  }
}

export default App

// const MyComponent = observer(class MyComponent extends React.Component {
//     render() {
//         // Warning: don't use {this.onButtonClick.bind(this)} or {() => this.onButtonClick} !
//         return <button onClick={this.onButtonClick}>Hi</button>
//     }

//     onButtonClick = (e) => {
//         // bound function
//     }
// })

