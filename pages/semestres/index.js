import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

function index() {

    const [semestres, setSemestres] = useState([])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('semestres')) || []
    }

    useEffect(() => {
        setSemestres(getAll())
    }, [])

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const semestres = getAll()
            semestres.splice(id, 1)
            window.localStorage.setItem('semestres', JSON.stringify(semestres))
            setSemestres(semestres)
        }
    }

    return (
        <Pagina titulo="Semestres">

            <Link href={'/semestres/form'}><Button variant="primary" className='m-1'>Novo</Button></Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Data Início</th>
                        <th>Data Fim</th>
                    </tr>
                </thead>
                <tbody>
                    {semestres.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/semestres/' + i}>
                                    <BsFillPencilFill className="me-2 text-primary" />
                                </Link>
                                <AiOutlineDelete onClick={() => excluir(i)} />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.dtinicio}</td>
                            <td>{item.dtfim}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Pagina>
    )
}

export default index