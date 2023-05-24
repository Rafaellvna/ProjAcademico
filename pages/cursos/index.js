import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

function index() {

    const [cursos, setCursos] = useState([])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('cursos')) || []
    }

    useEffect(() => {
        setCursos(getAll())
    }, [])

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const cursos = getAll()
            cursos.splice(id, 1)
            window.localStorage.setItem('cursos', JSON.stringify(cursos))
            setCursos(cursos)
        }
    }

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
                        <tr key={i}>
                            <td>
                                <Link href={'/cursos' + i}>
                                    <BsFillPencilFill className="me-2 text-primary" />
                                </Link>
                                <AiOutlineDelete onClick={() => excluir(i)} />
                            </td>
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