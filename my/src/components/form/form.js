import React from 'react'
import './form.css'
import Button from './button'
import Input from './input';
import Label from './label';
import Link from './link';

function Form(props){
  return(
      <form className='form'>
      <h1
      className='form__title'>{props.title}
      </h1>
      <p className='form__text'>{props.text}</p>
      {props.children}
      </form>
  )
}

Form.Input = Input
Form.Button = Button
Form.Label = Label
Form.Link = Link
export default Form