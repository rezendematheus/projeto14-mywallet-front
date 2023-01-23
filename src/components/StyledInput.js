import styled from 'styled-components'

const StyledInput = styled.input`
    display: flex;
    box-sizing: border-box;

    padding-left: 15px;

    width: 100%;
    height: 58px;

    border: none;
    border-radius: 5px;

    &::placeholder{

        font-family: 'sans-serif', Raleway;
        font-weight: 400px;
        font-size: 20px;

        color: ${props => props.equal ? "red": "#000000"};
    }
`

export default StyledInput