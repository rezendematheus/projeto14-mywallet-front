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
    const [equalPasswords, setEqualPasswords] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [repeat_password, setRepeat_password] = useState("")
    const navigate = useNavigate()

    const handleSingUp = async (event) => {
        event.preventDefault()
        if (password !== repeat_password){
            setRepeat_password("")
            return setEqualPasswords(false)
        }
    
        try {
            await axios.post("http://localhost:5000/sign-up", { name, email, password, repeat_password })
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <StyledContent>

            <StyledTitle>MyWallet</StyledTitle>

            <StyledForm onSubmit={handleSingUp}>

                <StyledInput onChange={(e) => {setName(e.target.value); console.log(name.length+1)}} value={name}  type="text" placeholder='Nome' required/>
                <StyledInput onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='E-mail' required/>
                <StyledInput onChange={(e) => setPassword(e.target.value)} value={password} minlength="6" type="password" placeholder='Senha' required/>
                <StyledInput onChange={(e) => setRepeat_password(e.target.value)} value={repeat_password} minlength="6" type="password" placeholder={equalPasswords ? 'Confirme a senha' : 'As senhas devem ser iguais'} equal={!equalPasswords} required/>

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
