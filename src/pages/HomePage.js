import StyledContent from "../components/StyledContent";
import StyledHeader from "../components/StyledHeader"
import styled from "styled-components";
import { BiExit } from "react-icons/bi"
import { Link } from "react-router-dom";


export default function HomePage(){

    return(
        <StyledContent>
            <StyledHeader Justify = "space-between">
                Olá, Fulano
                <StyledLink>
                    <BiExit />
                </StyledLink>
            </StyledHeader>
        </StyledContent>
    )
}

const StyledLink = styled(Link)`
    color: white;
    height: 26px;
`