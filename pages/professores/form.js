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
  const { register, handleSubmit } = useForm()

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
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label><strong>CPF: </strong></Form.Label>
          <Form.Control type="text" {...register('cpf')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label><strong>Matrícula: </strong></Form.Label>
          <Form.Control type="text" {...register('matricula')} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="salario">
          <Form.Label><strong>Salário: </strong></Form.Label>
          <Form.Control type="text" {...register('salario')} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="email">
          <Form.Label><strong>Email: </strong></Form.Label>
          <Form.Control type="email" {...register('email')} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label><strong>Telefone: </strong></Form.Label>
          <Form.Control type="text" {...register('telefone')} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label><strong>CEP: </strong></Form.Label>
          <Form.Control type="text" {...register('cep')} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label><strong>Logradouro: </strong></Form.Label>
          <Form.Control type="text" {...register('logradouro')} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label><strong>Complemento: </strong></Form.Label>
          <Form.Control type="text" {...register('complemento')} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label><strong>Número: </strong></Form.Label>
          <Form.Control type="number" {...register('numero')} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label><strong>Bairro: </strong></Form.Label>
          <Form.Control type="text" {...register('bairro')} />
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