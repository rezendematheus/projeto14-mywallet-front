import styled from 'styled-components'

const StyledHeader = styled.header`
    width: 326px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 700;
    font-size: 26px;   
    color: white;
    font-family: Raleway;

    margin-bottom: ${props => props.marginBot};
    margin-top: ${props => props.marginTop};
`

export default StyledHeader