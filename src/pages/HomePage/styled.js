import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
    color: white;
    height: 26px;
`

export const StyledRegistries = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.Justify};

    width: 326px;
    height: 446px;
    
    background-color: white;

    border-radius: 5px;

    position: relative;

    margin-bottom: 13px;
`

export const StyledNone = styled.div`
    width: 180px;
    height: 46px;

    font-size: 20px;
    color: #868686;
    text-align: center;
    font-family: Raleway;
`

export const Balance = styled.div` 
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Raleway;
    position: absolute;
    bottom: 10px;
    p{
        font-weight: 700;
        color: black;
    }
    span{
        color:${props => props.color};
    }
`

export const NewRegistriesContainer = styled.div`
    display: flex;
    width: 326px;
    justify-content: space-between;
`