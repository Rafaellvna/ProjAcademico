import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import cursoValidator from '@/validators/cursoValidator'
import { mask } from 'remask'

function form() {

  const { push } = useRouter()
  const { register, handleSubmit, formState: {errors}, setValue } = useForm()

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
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
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label><strong>Duração: </strong></Form.Label>
          <Form.Control isInvalid={errors.duracao} type="text" mask="99" {...register('duracao', cursoValidator.duracao)} onChange={handleChange} />
          {
            errors.duracao &&
            <small>{errors.duracao.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label><strong>Modalidade: </strong></Form.Label>
          <Form.Control isInvalid={errors.modalidade} type="text" mask="AAAAAAAAAA" {...register('modalidade', cursoValidator.modalidade)} onChange={handleChange} />
          {
            errors.modalidade &&
            <small>{errors.modalidade.message}</small>
          }
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