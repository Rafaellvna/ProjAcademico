import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import semestresValidator from '@/validators/semestresValidator'
import { mask } from 'remask'

function form() {

  const { push } = useRouter()
  const { register, handleSubmit, formState: {errors}, setValue } = useForm()

  function salvar(dados) {
    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.push(dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push('/semestres')
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
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', semestresValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="dtinicio">
          <Form.Label><strong>Data Início: </strong></Form.Label>
          <Form.Control isInvalid={errors.dtinicio} type="date" mask="99/99/9999" {...register('dtinicio', semestresValidator.dtinicio)} onChange={handleChange} />
          {
            errors.dtinicio &&
            <small>{errors.dtinicio.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="dtfim">
          <Form.Label><strong>Data Fim: </strong></Form.Label>
          <Form.Control isInvalid={errors.dtfim} type="date" mask="99/99/9999" {...register('dtfim', semestresValidator.dtfim)} onChange={handleChange} />
          {
            errors.dtfim &&
            <small>{errors.dtfim.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1"/>Salvar</Button>
          <Link href={'/semestres'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1"/>Voltar</Link>
        </div>
      </Form>

    </Pagina>
  )
}

export default form