
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StyledContent from "../components/StyledContent"
import StyledForm from "../components/StyledForm"
import StyledButton from "../components/StyledButton"
import StyledInput from "../components/StyledInput"
import StyledLink from "../components/StyledLink"
import StyledTitle from "../components/StyledTitle"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const LoginSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post("", { email, password })
            navigate("/home")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <StyledContent>
            <StyledTitle>MyWallet</StyledTitle>
            <StyledForm onSubmit={LoginSubmit}>
                <StyledInput onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='E-mail' disabled={false} />
                <StyledInput onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Senha' disabled={false} />
                <StyledButton type='submit'>
                    Entrar
                </StyledButton>
            </StyledForm>
            <StyledLink to="/cadastro">
                Primeira vez? Cadastre-se!
            </StyledLink>
        </StyledContent>
    )
}




