import { FC, useState } from 'react'
import styled from '@emotion/styled'
import Icon from '@Atoms/icon'
import { FormikValues } from 'formik'

type InputProps = {
  type?: 'password' | 'checkbox' | 'email' | 'text' | 'search' | 'number' | 'textbox'
  color?: 'dark' | 'light'
  placeholder?: string
  id?: string
  icon?: string
  iconVariant?: 'outlined' | 'filled'
  margin?: [string, string]
  name?: string
  formik?: FormikValues
}

const InputStyled = styled.div<InputProps>`
  width: fit-content;
  margin: ${({ margin }) => (margin ? `${margin[0]} ${margin[1]}` : '0px')};
  display: flex;
  align-items: center;
  label {
    display: flex;
    position: relative;
    flex-direction: column;
    min-width: 300px;
    margin-bottom: 5px;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.base};
    input {
      border: none;
      min-width: ${({ type }) => (type === 'checkbox' ? '15px' : '180px')};
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      margin-top: 10px;
      font-size: 13px;
      line-height: 20px;
      padding-left: ${({ icon }) => (icon ? '43px' : '15px')};

      :hover {
        cursor: pointer;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      }
      ::placeholder {
        color: ${({ theme }) => theme.colors.primary.light};
      }

      ${({ color, theme }) =>
        (color === 'dark' && {
          backgroundColor: theme.colors.primary.dark,
          color: theme.colors.white,
          height: '40px',
          borderRadius: '2px',
          border: `solid 2px ${theme.colors.primary.dark}`,
          '::placeholder': {
            color: theme.colors.white,
          },
          ':hover': {
            backgroundColor: theme.colors.primary.base,
          },
        }) ||
        (color === 'light' && {
          backgroundColor: theme.colors.secondary.light,
          height: '40px',
          borderRadius: '2px',
          border: `solid 2px ${theme.colors.gray[100]}`,
          boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.1)',
          '::placeholder': {
            color: theme.colors.primary.base,
          },
          ':hover': {
            backgroundColor: theme.colors.gray[100],
            '::placeholder': {
              color: theme.colors.primary.base,
            },
          },
          ':focus': {
            border: `solid 2px ${theme.colors.primary.base}`,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          },
        })}
      transition: all 0.3s ease;
    }
    textarea {
      border: none;
      width: 100%;
      min-height: 200px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      margin-top: 10px;
      font-size: 13px;
      line-height: 20px;
      padding-left: ${({ icon }) => (icon ? '43px' : '15px')};

      :hover {
        cursor: pointer;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      }
      ::placeholder {
      }

      ${({ color, theme }) =>
        (color === 'dark' && {
          backgroundColor: theme.colors.primary.dark,
          color: theme.colors.white,
          height: '40px',
          borderRadius: '2px',
          border: `solid 2px ${theme.colors.primary.dark}`,
          '::placeholder': {
            color: theme.colors.white,
          },
          ':hover': {
            backgroundColor: theme.colors.primary.base,
          },
        }) ||
        (color === 'light' && {
          backgroundColor: theme.colors.secondary.light,
          height: '40px',
          borderRadius: '2px',
          border: `solid 2px ${theme.colors.gray[100]}`,
          boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.1)',
          '::placeholder': {
            color: theme.colors.primary.base,
          },
          ':hover': {
            backgroundColor: theme.colors.gray[100],
            '::placeholder': {
              color: theme.colors.primary.base,
            },
          },
          ':focus': {
            border: `solid 2px ${theme.colors.primary.base}`,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          },
        })}
      transition: all 0.3s ease;
    }
  }
`

const PasswordContainerStyled = styled.div<InputProps>`
  position: absolute;
  right: 20px;
  top: 16px;
  display: flex;
  padding: 3px;
  border-radius: 2px;
  cursor: pointer;
  svg {
    width: 16px;
    path {
      fill: ${({ theme }) => theme.colors.primary.light};
    }
  }
`

const IconContainerStyled = styled.div<InputProps>`
  position: absolute;
  left: 15px;
  width: 20px;
  border-radius: 2px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    svg {
      width: 18px;
      height: 18px;
      path {
        ${({ theme }) => theme && { fill: theme.colors.gray[400] }}
        ${({ color, theme }) => color === 'dark' && { fill: theme.colors.secondary.base }}
      }
    }
  }
`

const StyledInputError = styled.span`
  margin-top: 20px;
  font-family: ${({ theme }) => theme.texts.BodyLarge.FontFamily};
  max-width: 312px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #ff295f;
`

const AtomInput: FC<InputProps> = ({
  type,
  color,
  placeholder,
  id,
  icon,
  iconVariant,
  margin,
  formik,
  name,
}) => {
  const [eye, seteye] = useState(false)
  return (
    <InputStyled type={type || 'text'} color={color || `light`} icon={icon} margin={margin}>
      {icon && (
        <IconContainerStyled color={color}>
          <Icon name={icon} variant={iconVariant} />
        </IconContainerStyled>
      )}
      <label htmlFor={id}>
        {name}
        {type === 'textbox' ? (
          <textarea
            id={id}
            value={formik?.values[`${id}`]}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
          />
        ) : (
          <input
            id={id}
            type={(eye ? 'text' : type) || 'text'}
            value={formik?.values[`${id}`]}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            placeholder={placeholder}
          />
        )}
        {(formik?.values[`${id}`] !== '' || formik?.touched[`${id}`]) && formik?.errors[`${id}`] ? (
          <StyledInputError>{formik?.errors[`${id}`]}</StyledInputError>
        ) : null}
        {type === 'password' && (
          <PasswordContainerStyled
            onClick={() => {
              seteye(!eye)
            }}
          >
            {eye ? (
              <Icon name="eye-close" variant="outlined" />
            ) : (
              <Icon name="eye-open" variant="outlined" />
            )}
          </PasswordContainerStyled>
        )}
      </label>
    </InputStyled>
  )
}

export default AtomInput
