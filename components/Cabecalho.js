import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Cabecalho() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/cursos">Acadêmico</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/cursos">Cursos</Nav.Link>
                        <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
                        <Nav.Link href="/alunos">Alunos</Nav.Link>
                        <Nav.Link href="/professores">Professores</Nav.Link>
                        <Nav.Link href="/salas">Salas</Nav.Link>
                        <Nav.Link href="/semestres">Semestres</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Cabecalho