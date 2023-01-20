import styled from 'styled-components'

const StyledContent = styled.div`
    height: 667px;
    
    background-color: #8C11BE;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.Justify ? "" : "center"} ;
`
export default StyledContent