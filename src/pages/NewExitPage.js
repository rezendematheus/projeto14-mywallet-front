import StyledContent from "../components/StyledContent";
import StyledForm from "../components/StyledForm";
import StyledHeader from "../components/StyledHeader";
import StyledInput from "../components/StyledInput";
import { useState } from "react";
import StyledButton from "../components/StyledButton";


export default function NewExitPage(){
    const [value, setValue] = useState()
    const [description, setDescription] = useState("")
    return(
        <StyledContent Justify="something">
            <StyledHeader marginBot="40px" marginTop="24px">
                Nova saída
            </StyledHeader>
            <StyledForm onSubmit>
                <StyledInput type="number" placeholder="Valor" onChange={(e)=> setValue(e.target.value)} value={value} />
                <StyledInput type="text" placeholder="Descrição" onChange={(e)=> setDescription(e.target.value)} value={description} />
                <StyledButton>
                    Salvar saída
                </StyledButton>
            </StyledForm>
        </StyledContent>
    )
}