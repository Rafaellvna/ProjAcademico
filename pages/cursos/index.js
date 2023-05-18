import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'

function index() {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        setCursos(JSON.parse(window.localStorage.getItem('cursos')) || [])
    })

    return (
        <Pagina titulo="Cursos">

            <Link href={'/cursos/form'}><Button variant="primary" className='m-1'>Novo</Button></Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Duração</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map((item, i) => (
                        <tr>
                            <td><AiOutlineDelete /></td>
                            <td>{item.nome}</td>
                            <td>{item.duracao}</td>
                            <td>{item.modalidade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Pagina>
    )
}

export default index