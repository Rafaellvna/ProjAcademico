import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import disciplinasValidator from '@/validators/disciplinasValidator'

function form() {

  const { push } = useRouter()
  const { register, handleSubmit, formState: {errors} } = useForm()

  function salvar(dados) {
    axios.post('/api/disciplinas', dados)
    push('/disciplinas')
  }

  return (
    <Pagina titulo="Formulário">

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label><strong>Nome: </strong></Form.Label>
          <Form.Control isInvalid={erros.nome} type="text" {...register('nome', disciplinasValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="cursos">
          <Form.Label><strong>Cursos: </strong></Form.Label>
          <Form.Control isInvalid={erros.cursos} type="text" {...register('cursos', disciplinasValidator.cursos)} />
          {
            errors.cursos &&
            <small>{errors.cursos.message}</small>
          }
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