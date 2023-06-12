import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'
import professoresValidator from '@/validators/professoresValidator'

function form() {

  const { push } = useRouter()
  const { register, handleSubmit, formState: {errors} } = useForm()

  function salvar(dados) {
    const professores = JSON.parse(window.localStorage.getItem('professores')) || []
    professores.push(dados)
    window.localStorage.setItem('professores', JSON.stringify(professores))
    push('/professores')
  }

  return (
    <Pagina titulo="Formulário">

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label><strong>Nome: </strong></Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', professoresValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label><strong>CPF: </strong></Form.Label>
          <Form.Control isInvalid={errors.cpf} type="text" {...register('cpf', professoresValidator.cpf)} />
          {
            errors.cpf &&
            <small>{errors.cpf.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label><strong>Matrícula: </strong></Form.Label>
          <Form.Control isInvalid={errors.matricula} type="text" {...register('matricula', professoresValidator.matricula)} />
          {
            errors.matricula &&
            <small>{errors.matricula.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="salario">
          <Form.Label><strong>Salário: </strong></Form.Label>
          <Form.Control isInvalid={errors.salario} type="text" {...register('salario', professoresValidator.salario)} />
          {
            errors.salario &&
            <small>{errors.salario.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="email">
          <Form.Label><strong>Email: </strong></Form.Label>
          <Form.Control isInvalid={errors.email} type="email" {...register('email', professoresValidator.email)} />
          {
            errors.email &&
            <small>{errors.email.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label><strong>Telefone: </strong></Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text" {...register('telefone', professoresValidator.telefone)} />
          {
            errors.telefone &&
            <small>{errors.telefone.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label><strong>CEP: </strong></Form.Label>
          <Form.Control isInvalid={errors.cep} type="text" {...register('cep', professoresValidator.cep)} />
          {
            errors.cep &&
            <small>{errors.cep.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label><strong>Logradouro: </strong></Form.Label>
          <Form.Control isInvalid={errors.logradouro} type="text" {...register('logradouro', professoresValidator.logradouro)} />
          {
            errors.logradouro &&
            <small>{errors.logradouro.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label><strong>Complemento: </strong></Form.Label>
          <Form.Control isInvalid={errors.complemento} type="text" {...register('complemento', professoresValidator.complemento)} />
          {
            errors.complemento &&
            <small>{errors.complemento.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label><strong>Número: </strong></Form.Label>
          <Form.Control isInvalid={errors.numero} type="number" {...register('numero', professoresValidator.numero)} />
          {
            errors.numero &&
            <small>{errors.numero.message}</small>
          }
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label><strong>Bairro: </strong></Form.Label>
          <Form.Control isInvalid={errors.bairro} type="text" {...register('bairro', professoresValidator.bairro)} />
          {
            errors.bairro &&
            <small>{errors.bairro.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Button variant="primary" onClick={handleSubmit(salvar)}><AiOutlineCheck className="me-1"/>Salvar</Button>
          <Link href={'/professores'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className="me-1"/>Voltar</Link>
        </div>
      </Form>

    </Pagina>
  )
}

export default form