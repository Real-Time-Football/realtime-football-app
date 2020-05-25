import styled, { keyframes } from 'styled-components'

const dualRingRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
        content: ' ';
        display: block;
        width: 32px;
        height: 32px;
        margin: 10px;
        border-radius: 50%;
        border: 3px solid #6495ed;
        border-color: #6495ed transparent #6495ed transparent;
        animation: ${dualRingRotate} 1.2s linear infinite;
    }
`

export default Loading
