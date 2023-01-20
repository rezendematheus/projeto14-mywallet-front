import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function StyledRegistryButton({icon, text}){
    return(
        <RegistryButton to={text === "Nova entrada" ? "/nova-entrada" : "/nova-saida"}>
            <icon>
                {icon}
            </icon>
            <div>
                {text}
            </div>
        </RegistryButton>
    )
}

const RegistryButton = styled(Link)`

    box-sizing: border-box;
    background-color: #A328D6;

    width: 155px;
    height: 114px;
    padding: 10px;

    font-family: Raleway;
    font-weight: 700;
    font-size: 17px;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    icon{
        color:white;
        svg{
            width: 22px;
            height: 22px;
        }
    }
    div{
        width: 64px;
        height: 40px;
        font-size: 17px;
        font-weight: 700;
        color: white;
    }
`