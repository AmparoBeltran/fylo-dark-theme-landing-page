
import { FormProvider, useForm } from 'react-hook-form'
import { email_validation } from '../utils/inputValidations'
import { useState } from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { Input } from './input'
import { FormStyled } from './styles/Form.styled'

export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      <FormStyled
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
      >



        <Input {...email_validation} />


        <div>
          <button onClick={onSubmit}>Get Started For Free</button>
          {success && (
            <p>
              <BsFillCheckSquareFill /> Email submitted successfully
            </p>
          )}
        </div>

      </FormStyled>
    </FormProvider>
  )
}