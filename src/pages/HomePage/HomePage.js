import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader"

import { BiExit } from "react-icons/bi"
import axios from "axios";
import StyledRegistry from "../../components/registry/StyledRegistry";
import { useContext, useEffect, useState } from "react";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"
import StyledRegistryButton from "../../components/StyledRegistryButton";
import {StyledRegistries, StyledNone, Balance, NewRegistriesContainer} from "./styled"
import { UserContext } from "../../contexts/userContext";
import StyledIcon from "../../components/StyledIcon";
import { useNavigate } from "react-router-dom";


export default function HomePage() {

    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [registries, setRegistries] = useState(undefined)

    const [balance, setBalance] = useState(0)
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    function getRegistries(){
        axios.get("http://localhost:5000/registries", config)
            .then(res => {setRegistries(res.data); finalBalance(res.data)})
            .catch(error => console.log(error))
    }
    function finalBalance(itens){
        let sum = 0;
        itens.forEach(item => item.type === "income" ? sum += Number(item.value) : sum -= Number(item.value))
        setBalance(sum)
    }
    useEffect(()=>{
        getRegistries()
    }, [])
    return (
        <StyledContent>
            <StyledHeader Justify="space-between" marginBot="22px">
                Olá, {user.name}
                <StyledIcon onClick={()=>{localStorage.removeItem("user"); navigate("/")}}>
                    <BiExit />
                </StyledIcon>
            </StyledHeader>
            <StyledRegistries Justify={registries ? "" : "center"}>
                {registries ? (
                    registries.map(registry => (
                        <StyledRegistry
                            date={registry.date}
                            description={registry.description}
                            value={registry.value}
                            type={registry.type}
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

