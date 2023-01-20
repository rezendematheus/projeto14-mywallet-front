import styled from 'styled-components'


export const Container = styled.div`
    margin-top: 23px;
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: Raleway;
    font-size: 16px;

    div{
        display: flex;
        align-items: center;
    }
`
export const StyledDate = styled.div`
    color: #C6C6C6;
    margin-right: 6px;
`

export const StyledDescription = styled.div`
    color: black;
`

export const StyledValue = styled.div`
    color: ${props => props.status};

`

