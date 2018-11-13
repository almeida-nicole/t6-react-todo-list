import React from 'react';
import Form from '../../form'

function Signup(){
    return(
        <Form.Container>
        <Form title='Faça Seu Cadastro' text='Preencha com Seus Dados'>
        <Form.Label htmlFor='nome'>Nome</Form.Label>
        <Form.Input id='nome' type='text' />
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Input id='email' type='text' />
        <Form.Label htmlFor='telefone'>Telefone:</Form.Label>
        <Form.Input id='telefone' type='number' />
        <Form.Label htmlFor='password'>Senha</Form.Label>
        <Form.Input id='password' type='password' />
        <Form.Button disabled>Enviar</Form.Button>
        <Form.Link href="#"> Fazer login</Form.Link>
        </Form>
        </Form.Container>
    )
}

export default Signup