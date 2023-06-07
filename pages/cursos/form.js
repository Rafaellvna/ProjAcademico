import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'

function form() {

  const { push } = useRouter()
  const { register, handleSubmit, formState: {errors} } = useForm()

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }

  const validatorNome = {
    required: 'O campo é obrigatório',
    minLength: {
      value: 3,
      message: 'A quantidade de caracteres mínima é 3'
    },
    maxLength: {
      value: 10,
      message: 'A quantidade de caracteres máxima é 10'
    }
  }

  return (
    <Pagina titulo="Formulário">

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label><strong>Nome: </strong></Form.Label>
          <Form.Control type="text" {...register('nome', validatorNome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label><strong>Duração: </strong></Form.Label>
          <Form.Control type="text" {...register('duracao', {required: true})} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label><strong>Modalidade: </strong></Form.Label>
          <Form.Control type="text" {...register('modalidade')} />
        </Form.Group>

        <div className='text-center'>
          <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1"/>Salvar</Button>
          <Link href={'/cursos'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1"/>Voltar</Link>
        </div>
      </Form>

    </Pagina>
  )
}

export default form