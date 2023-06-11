import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import salasValidator from '@/validators/salasValidator'

function form() {

  const { push } = useRouter()
  const { register, handleSubmit, formState: {errors} } = useForm()

  function salvar(dados) {
    const salas = JSON.parse(window.localStorage.getItem('salas')) || []
    salas.push(dados)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    push('/salas')
  }

  return (
    <Pagina titulo="Formulário">

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label><strong>Nome: </strong></Form.Label>
          <Form.Control isInvalid={erros.nome} type="text" {...register('nome', salasValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label><strong>Capacidade: </strong></Form.Label>
          <Form.Control isInvalid={erros.capacidade} type="number" {...register('capacidade', salasValidator.capacidade)} />
          {
            errors.capacidade &&
            <small>{errors.capacidade.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label><strong>Tipo: </strong></Form.Label>
          <Form.Control isInvalid={erros.tipo} type="text" {...register('tipo', salasValidator.tipo)} />
          {
            errors.tipo &&
            <small>{errors.tipo.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1"/>Salvar</Button>
          <Link href={'/salas'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1"/>Voltar</Link>
        </div>
      </Form>

    </Pagina>
  )
}

export default form