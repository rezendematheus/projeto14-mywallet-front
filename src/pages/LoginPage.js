import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StyledContent from "../components/StyledContent"
import StyledForm from "../components/StyledForm"
import StyledButton from "../components/StyledButton"
import StyledInput from "../components/StyledInput"
import StyledLink from "../components/StyledLink"
import StyledTitle from "../components/StyledTitle"
import { UserContext } from '../contexts/userContext'

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)
 
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const promise = await axios.post("http://localhost:5000/sign-in", { email, password })
            const user = promise.data
            setUser(user)
            localStorage.setItem("user", JSON.stringify(user))
            navigate("/home")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <StyledContent>
            <StyledTitle>MyWallet</StyledTitle>
            <StyledForm onSubmit={handleLogin}>
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




