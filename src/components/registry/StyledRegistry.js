import {Container, StyledDate, StyledDescription, StyledValue} from './styled'


function StyledRegistry({ date, description, value, status }) {

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
            <StyledValue status={status === 'In' ? "green" : "red"}>
                {value}
            </StyledValue>
        </Container>
    )
}


export default  StyledRegistry