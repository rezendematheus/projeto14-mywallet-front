import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StyledContent from "../components/StyledContent"
import StyledForm from "../components/StyledForm"
import StyledButton from "../components/StyledButton"
import StyledInput from "../components/StyledInput"
import StyledLink from "../components/StyledLink"
import StyledTitle from "../components/StyledTitle"

export default function SingUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const navigate = useNavigate()

    const LoginSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post("", { name, email, password, passwordConfirm })
            navigate("/home")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <StyledContent>
            <StyledTitle>MyWallet</StyledTitle>
            <StyledForm onSubmit={LoginSubmit}>
                <StyledInput onChange={(e) => setName(e.target.value)} value={name} type="string" placeholder='Nome' disabled={false} />
                <StyledInput onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='E-mail' disabled={false} />
                <StyledInput onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Senha' disabled={false} />
                <StyledInput onChange={(e) => setPasswordConfirm(e.target.value)} value={passwordConfirm} type="password" placeholder='Confirme a senha' disabled={false} />
                <StyledButton type='submit'>
                    Entrar
                </StyledButton>
            </StyledForm>
            <StyledLink to="/">
                Já tem uma conta? Entre agora!
            </StyledLink>
        </StyledContent>
    )
}
