/* eslint-disable react/prop-types */
import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'
import { InputStyled } from './styles/Input.styled'

export const Input = ({ type, id, placeholder, validation, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputError = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputError)

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <InputStyled id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      </AnimatePresence>
      {
        isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}

          />
        )
      }
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className='error'
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}