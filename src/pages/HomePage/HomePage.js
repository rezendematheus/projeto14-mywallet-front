import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader"
import styled from "styled-components";
import { BiExit } from "react-icons/bi"
import { Link } from "react-router-dom";
import axios from "axios";
import StyledRegistry from "../../components/registry/StyledRegistry";
import { useState } from "react";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"
import StyledRegistryButton from "../../components/StyledRegistryButton";
import {StyledLink, StyledRegistries, StyledNone, Balance, NewRegistriesContainer} from "./styled"


export default function HomePage() {
    //Receber token do context
    let registries = undefined/* [{
        date: '30/01',
        description: 'Roupas',
        value: 'R$300',
        status: 'Out'
    }] */
    const [balance, setBalance] = useState(0)
    const token = ""
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    /* axios.get("", config)
        .then(res => registries = res.data) */


    return (
        <StyledContent>
            <StyledHeader Justify="space-between" marginBot="22px">
                Olá, Fulano
                <StyledLink>
                    <BiExit />
                </StyledLink>
            </StyledHeader>
            <StyledRegistries Justify={registries ? "" : "center"}>
                {registries ? (
                    registries.map(registry => (
                        <StyledRegistry
                            date={registry.date}
                            description={registry.description}
                            value={registry.value}
                            status={registry.status}
                        />
                    ))
                ) : <StyledNone>Não há registros de entrada ou saída</StyledNone>}
                {registries &&
                    <Balance color={balance >= 0 ? "green" : "red"}>
                        <p>
                            SALDO
                        </p>
                        <span>
                            {balance}
                        </span>
                    </Balance>
                }
            </StyledRegistries>
            <NewRegistriesContainer>
                <StyledRegistryButton icon={<AiOutlinePlusCircle />} text={"Nova entrada"}/>
                <StyledRegistryButton icon={<AiOutlineMinusCircle />} text={'Nova saída'}/>
            </NewRegistriesContainer>
        </StyledContent>
    )
}

