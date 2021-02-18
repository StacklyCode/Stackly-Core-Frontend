import styled from "@emotion/styled";
import AtomContainer from "@Src/components/atoms/container";
import AtomInput from "@Src/components/atoms/input";
import TemplateMain from "@Src/components/templates";
import I18n from "@Src/i18n";
import { TFunction } from "next-i18next";
import { GetStaticProps } from "next";
import { useFormik } from "formik";
import * as Yup from "yup";
import AtomButton from "@Src/components/atoms/button";
import AtomIcon from "@Src/components/atoms/icon";
type PageLoginProps = {
  t?: TFunction;
};

const FormContainerStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormLoginContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.light};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: max-content;
  margin: 100px 0px;
  padding: 20px 50px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    margin: 10px 0px;
  }
  ${({ theme }) => theme.mediaquery.medium} {
  height: 500px;
    margin: 0px 0px;
    padding: 0px 0px;
    width: 80%;
    flex-direction: row;
  }
`;

const FormLoginStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 0px;
`;

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const PageLogin = ({ t }: PageLoginProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().required("Por favor, ingrese un Correo"),
      password: Yup.string().required("Por favor, ingrese un Password"),
    }),
    onSubmit: async (valores) => {
      console.log("submit");
    },
  });

  return (
      <AtomContainer>
        <FormContainerStyled>
          <FormLoginContainerStyled>
            <AtomIcon icon="stacklycodelogo" />
            <FormLoginStyled onSubmit={formik.handleSubmit}>
              <AtomInput id="email" name="Email" formik={formik}></AtomInput>
              <AtomInput
                id="password"
                type="password"
                name="Password"
                formik={formik}
              ></AtomInput>
              <AtomButton type="submit">Login</AtomButton>
            </FormLoginStyled>
          </FormLoginContainerStyled>
        </FormContainerStyled>
      </AtomContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ["common"],
    },
  };
};
export default I18n.withTranslation(["common"])(PageLogin);
