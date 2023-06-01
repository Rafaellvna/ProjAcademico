import Pagina from '@/components/Pagina'
import axios from 'axios'
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
    return JSON.parse(window.localStorage.getItem('disciplinas')) || []
  }

  useEffect(() => {

    if (query.id) {
      axios.get('/api/disciplinas/' + query.id).then(resultado => {
        const disciplinas = resultado.data

        for(let atributo in disciplinas){
          setValue(atributo, disciplinas[atributo])
        }
      })
    }

  }, [query.id])

  function salvar(dados) {
    axios.put('/api/disciplinas/' + dados.id, dados)
    push('/disciplinas')
  }

  return (
    <Pagina titulo="Formulário">

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label><strong>Nome: </strong></Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cursos">
          <Form.Label><strong>Duração: </strong></Form.Label>
          <Form.Control type="text" {...register('cursos')} />
        </Form.Group>

        <div className='text-center'>
          <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1" />Salvar</Button>
          <Link href={'/disciplinas'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1" />Voltar</Link>
        </div>
      </Form>

    </Pagina>
  )
}

export default form