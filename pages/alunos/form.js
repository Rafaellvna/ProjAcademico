import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import alunosValidator from '@/validators/alunosValidator'

function form() {

  const { push } = useRouter()
  const { register, handleSubmit, formState: {errors} } = useForm()

  function salvar(dados) {
    const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
    alunos.push(dados)
    window.localStorage.setItem('alunos', JSON.stringify(alunos))
    push('/alunos')
  }

  return (
    <Pagina titulo="Formulário">

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label><strong>Nome: </strong></Form.Label>
          <Form.Control isInvalid={erros.nome} type="text" {...register('nome', alunosValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label><strong>CPF: </strong></Form.Label>
          <Form.Control isInvalid={erros.cpf} type="text" {...register('cpf', alunosValidator.cpf)} />
          {
            errors.cpf &&
            <small>{errors.cpf.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label><strong>Matrícula: </strong></Form.Label>
          <Form.Control isInvalid={erros.matricula} type="text" {...register('matricula', alunosValidator.matricula)} />
          {
            errors.matricula &&
            <small>{errors.matricula.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="email">
          <Form.Label><strong>Email: </strong></Form.Label>
          <Form.Control isInvalid={erros.email} type="email" {...register('email', alunosValidator.email)} />
          {
            errors.email &&
            <small>{errors.email.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label><strong>Telefone: </strong></Form.Label>
          <Form.Control isInvalid={erros.telefone} type="text" {...register('telefone', alunosValidator.telefone)} />
          {
            errors.telefone &&
            <small>{errors.telefone.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label><strong>CEP: </strong></Form.Label>
          <Form.Control isInvalid={erros.cep} type="text" {...register('cep', alunosValidator.cep)} />
          {
            errors.cep &&
            <small>{errors.cep.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label><strong>Logradouro: </strong></Form.Label>
          <Form.Control isInvalid={erros.logradouro} type="text" {...register('logradouro', alunosValidator.logradouro)} />
          {
            errors.logradouro &&
            <small>{errors.logradouro.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label><strong>Complemento: </strong></Form.Label>
          <Form.Control isInvalid={erros.complemento} type="text" {...register('complemento', alunosValidator.complemento)} />
          {
            errors.complemento &&
            <small>{errors.complemento.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label><strong>Número: </strong></Form.Label>
          <Form.Control isInvalid={erros.numero} type="number" {...register('numero', alunosValidator.numero)} />
          {
            errors.numero &&
            <small>{errors.numero.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label><strong>Bairro: </strong></Form.Label>
          <Form.Control isInvalid={erros.bairro} type="text" {...register('bairro', alunosValidator.bairro)} />
          {
            errors.bairro &&
            <small>{errors.bairro.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1" />Salvar</Button>
          <Link href={'/alunos'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1" />Voltar</Link>
        </div>
      </Form>

    </Pagina>
  )
}

export default form