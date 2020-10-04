// components/counter-button.js

import React, { useState } from "react"
import styled from "@emotion/styled"

// Button style with Emotion Styled
const Button = styled.button`
  padding: 0.7rem 2rem;
  border-radius: 0.6rem;
  font-size: 1.5rem;
`

// Component
const CounterButton = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  // Button component whith the style
  return <Button onClick={increment}>Counter: {counter}</Button>
}

export default CounterButton

