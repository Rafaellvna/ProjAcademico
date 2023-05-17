import Pagina from '@/components/Pagina'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function form() {

  const { register, handleSubmit } = useForm()

  function salvar(dados){
    console.log(dados)
  }

  return (
    <Pagina titulo="Formulário">

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label><strong>Nome: </strong></Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label><strong>Duração: </strong></Form.Label>
          <Form.Control type="text" {...register('duracao')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label><strong>Modalidade: </strong></Form.Label>
          <Form.Control type="text" {...register('modalidade')} />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit(salvar)}>Salvar</Button>
      </Form>

    </Pagina>
  )
}

export default form