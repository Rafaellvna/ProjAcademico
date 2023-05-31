import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

function index() {

    const [disciplinas, setDisciplinas] = useState([])

    

    useEffect(() => {
        axios.get('/api/disciplinas').then(resultado => {
            setDisciplinas(resultado.data)
        })
    }, [])

    return (
        <Pagina titulo="Disciplinas">

            <Link href={'/disciplinas/form'}><Button variant="primary" className='m-1'>Novo</Button></Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Cursos</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/disciplinas/' + i}>
                                    <BsFillPencilFill className="me-2 text-primary" />
                                </Link>
                                <AiOutlineDelete onClick={() => excluir(i)} />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.cursos}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Pagina>
    )
}

export default index