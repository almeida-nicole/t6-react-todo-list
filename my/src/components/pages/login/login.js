import React from 'react';
import Form from '../../form'

function Login(){
    return(
        <Form.Container>
        <Form title='Login' text='Entre com Seu Email e Senha'>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Input id='email' type='text' />
        <Form.Label htmlFor='password'>Senha</Form.Label>
        <Form.Input id='password' type='password' />
        <Form.Button disabled>Enviar</Form.Button>
        <Form.Link href="#"> Criar uma conta</Form.Link>
        </Form>
        </Form.Container>
    )
}

export default Login