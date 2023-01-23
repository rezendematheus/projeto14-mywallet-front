import StyledContent from "../components/StyledContent";
import StyledForm from "../components/StyledForm";
import StyledHeader from "../components/StyledHeader";
import StyledInput from "../components/StyledInput";
import { useContext, useState } from "react";
import StyledButton from "../components/StyledButton";
import axios from "axios";
import dayjs from "dayjs";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const dateNow = dayjs().format('DD-MM').replace("-", "/")

export default function NewEntryPage(){
    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    const [value, setValue] = useState()
    const [description, setDescription] = useState("")
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    const saveIncome = async (e) => {
        e.preventDefault()
        try {
            
            await axios.post("http://localhost:5000/new-registry", {date: dateNow, value, description, type: "income"}, config)
            navigate("/home")
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <StyledContent Justify="something">
            <StyledHeader marginBot="40px" marginTop="24px">
                Nova entrada
            </StyledHeader>
            <StyledForm onSubmit={saveIncome}>
                <StyledInput type="number" placeholder="Valor" onChange={(e)=> setValue(e.target.value)} value={value} />
                <StyledInput type="text" placeholder="Descrição" onChange={(e)=> setDescription(e.target.value)} value={description} />
                <StyledButton>
                    Salvar entrada
                </StyledButton>
            </StyledForm>
        </StyledContent>
    )
}