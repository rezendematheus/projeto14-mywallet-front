import {Container, StyledDate, StyledDescription, StyledValue} from './styled'


function StyledRegistry({ date, description, value, type }) {

    return (
        <Container>
            <div>
                <StyledDate>
                    {date}
                </StyledDate>
                <StyledDescription>
                    {description}
                </StyledDescription>
            </div>
            <StyledValue status={type === 'income' ? "green" : "red"}>
                {value}
            </StyledValue>
        </Container>
    )
}


export default  StyledRegistry