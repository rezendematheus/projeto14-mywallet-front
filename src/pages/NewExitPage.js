import StyledContent from "../components/StyledContent";
import StyledForm from "../components/StyledForm";
import StyledHeader from "../components/StyledHeader";
import StyledInput from "../components/StyledInput";
import { useContext, useState } from "react";
import StyledButton from "../components/StyledButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import dayjs from "dayjs";

const dateNow = dayjs().format('DD-MM').replace("-", "/")

export default function NewExitPage() {
    const navigate = useNavigate()

    const {user} = useContext(UserContext)
    const [value, setValue] = useState()
    const [description, setDescription] = useState("")
    
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    const saveExpediture = async (e) => {
        e.preventDefault()
        try {

            await axios.post("http://localhost:5000/new-registry", {date: dateNow, value, description, type: "outgoing"}, config)
            navigate("/home")

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <StyledContent Justify="something">
            <StyledHeader marginBot="40px" marginTop="24px">
                Nova saída
            </StyledHeader>
            <StyledForm onSubmit={saveExpediture}>
                <StyledInput type="number" placeholder="Valor" onChange={(e) => setValue(e.target.value)} value={value} />
                <StyledInput type="text" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} value={description} />
                <StyledButton>
                    Salvar saída
                </StyledButton>
            </StyledForm>
        </StyledContent>
    )
}