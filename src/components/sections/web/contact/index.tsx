import { FC } from 'react'
import styled from '@emotion/styled'
import AtomContainer from '@Atoms/container'
import AtomTitle from '@Atoms/title'
import AtomBody from '@Atoms/body'
import AtomButton from '@Atoms/button'
import AtomInput from '@Atoms/input'
import useTranslation from 'next-translate/useTranslation'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation, gql } from '@apollo/client'

const Contact = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
`

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 60%;
  }
  h2 {
    margin-bottom: 20px;
  }
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  margin-top: 10px;
  justify-content: center;

  div {
    width: 100%;
    label {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
  button {
    align-self: center;
    padding: 18px 50px;
    ${({ theme }) => theme.mediaquery.small} {
    }
    margin-top: 15px;
  }
`
const FormLeftContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.extrasmall} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      label {
        min-width: max-content;
      }
    }
  }
  width: 100%;
  div {
    width: 100%;

    ${({ theme }) => theme.mediaquery.extrasmall} {
      width: 48%;
    }
    label {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`

type IContact = {
  idScroll?: string
}

interface FormValues {
  name: string
  subject: string
  email: string
  message: string
}

const initialValues: FormValues = {
  name: '',
  subject: '',
  email: '',
  message: '',
}

const NEW_CONTACT = gql`
  mutation($input: ContactInput) {
    newContact(input: $input)
  }
`

const OrganismContact: FC<IContact> = ({ idScroll }) => {
  const { t } = useTranslation('common')
  const [newUser] = useMutation(NEW_CONTACT)

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Por favor, ingrese un Nombre.'),
      subject: Yup.string().required('Por favor, ingrese un Sujeto.'),
      email: Yup.string()
        .email('Debe ingresar un correo válido')
        .required('Por favor, ingrese un correo.'),
      message: Yup.string().required('Por favor, ingrese un Mensage.'),
    }),
    onSubmit: async (valores) => {
      await newUser({
        variables: {
          input: valores,
        },
      })
        .catch((error) => {
          throw new Error(error.message)
        })
        .then(() => {
          location.href = '/'
        })
    },
  })
  return (
    <Contact id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="center">
        <TextContainer>
          <AtomTitle align="center" bold size="TitleMedium">
            {t('contact-title')}
          </AtomTitle>
          <AtomBody align="center" size="BodyLarge" color="light">
            {t('contact-desc')}
          </AtomBody>

          <FormContainer onSubmit={formik.handleSubmit}>
            <FormLeftContainer>
              <AtomInput
                id="name"
                margin={['5px', '0px']}
                name={t('contact-input-name')}
                placeholder="My Name is ..."
                formik={formik}
              />
              <AtomInput
                id="subject"
                margin={['5px', '0px']}
                name={t('contact-input-subject')}
                placeholder="Is Important"
                formik={formik}
              />
            </FormLeftContainer>
            <AtomInput
              id="email"
              type="email"
              margin={['5px', '0px']}
              name={t('contact-input-email')}
              placeholder="email@gmail.com"
              formik={formik}
            />

            <AtomInput
              id="message"
              margin={['5px', '0px']}
              name={t('contact-input-message')}
              type="textbox"
              formik={formik}
            />
            <AtomButton type="submit">{t('contact-input-send')}</AtomButton>
          </FormContainer>
        </TextContainer>
      </AtomContainer>
    </Contact>
  )
}

export default OrganismContact
