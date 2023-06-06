import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'

function form() {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  function getAll() {
    return JSON.parse(window.localStorage.getItem('semestres')) || []
  }

  useEffect(() => {

    if (query.id) {
      const semestres = getAll()
      const semestre = semestres[query.id]

      for(let atributo in semestre){
        setValue(atributo, semestre[atributo])
      }
    }

  }, [query.id])

  function salvar(dados) {
    const semestres = getAll()
    //semestres.push(dados)
    semestres.splice(query.id, 1, dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push('/semestres')
  }

  return (
    <Pagina titulo="Formulário">

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label><strong>Nome: </strong></Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dtinicio">
          <Form.Label><strong>Data Início: </strong></Form.Label>
          <Form.Control type="date" {...register('dtinicio')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dtfim">
          <Form.Label><strong>Data Fim: </strong></Form.Label>
          <Form.Control type="date" {...register('dtfim')} />
        </Form.Group>

        <div className='text-center'>
          <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1" />Salvar</Button>
          <Link href={'/semestres'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1" />Voltar</Link>
        </div>
      </Form>

    </Pagina>
  )
}

export default form