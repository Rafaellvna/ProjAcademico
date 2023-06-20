import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import salasValidator from '@/validators/salasValidator'
import { mask } from 'remask'

function form() {

  const { push } = useRouter()
  const { register, handleSubmit, formState: {errors}, setValue } = useForm()

  function salvar(dados) {
    const salas = JSON.parse(window.localStorage.getItem('salas')) || []
    salas.push(dados)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    push('/salas')
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(value, mascara))
  }

  return (
    <Pagina titulo="Formulário">

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label><strong>Nome: </strong></Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', salasValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label><strong>Capacidade: </strong></Form.Label>
          <Form.Control isInvalid={errors.capacidade} type="number" mask="999" {...register('capacidade', salasValidator.capacidade)} onChange={handleChange} />
          {
            errors.capacidade &&
            <small>{errors.capacidade.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label><strong>Tipo: </strong></Form.Label>
          <Form.Control isInvalid={errors.tipo} type="text" {...register('tipo', salasValidator.tipo)} />
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