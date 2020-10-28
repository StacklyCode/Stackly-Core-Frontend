import styled from '@Styles/styled';
import Button from '@Atoms/button';
import Title from '@Atoms/title';
import Input from '@Atoms/input';
import Icon from '@Atoms/icon';
import Body from '@Atoms/body';

type TextProps = {
  color: string;
};

const Text = styled.div<TextProps>`
  ${({ color, theme }) => ({
    color: color || '#000000',
    fontSize: '40px',
    fontFamily: theme.texts.Button.FontFamily
  })}
`;

const Background = styled.main`
  background: ${({ theme }) => theme.colors.primary.light};
  min-height: 100vh;
  width: 100%;
`;

const TestPage: React.FC = () => {
  return (
    <Background>
      <Title bold>We create the right solution for your business.</Title>
      <Title size="TitleMedium" color="gray">
        We create the right solution for your business.
      </Title>
      <Title size="TitleSmall" color="black" bold>
        We create the right solution for your business.
      </Title>
      <Title size="SubTitleLarge" color="white">
        We create the right solution for your business.
      </Title>
      <Title size="SubTitleMedium" color="gray" bold>
        We create the right solution for your business.
      </Title>
      <Title size="SubTitleSmall" color="black">
        We create the right solution for your business.
      </Title>

      <br />

      <Body bold color="green">
        We will be in charge to bring your idea to life and give the best value for your users.
      </Body>
      <Body color="black">
        We will be in charge to bring your idea to life and give the best value for your users.
      </Body>
      <Body size="BodyLarge" color="gray">
        We will be in charge to bring your idea to life and give the best value for your users.
      </Body>
      <Body size="BodyLarge" color="green">
        We will be in charge to bring your idea to life and give the best value for your users.
      </Body>
      <Body size="BodyMedium" color="black" bold>
        We will be in charge to bring your idea to life and give the best value for your users.
      </Body>
      <Body size="BodyMedium" color="green" bold>
        We will be in charge to bring your idea to life and give the best value for your users.
      </Body>
      <Body size="BodySmall" color="white">
        We will be in charge to bring your idea to life and give the best value for your users.
      </Body>
      <Body size="BodySmall" color="green">
        We will be in charge to bring your idea to life and give the best value for your users.
      </Body>
      <Body size="BodyExtraSmall" color="gray" bold>
        We will be in charge to bring your idea to life and give the best value for your users.
      </Body>
      <Body size="BodyExtraSmall" color="green" bold>
        We will be in charge to bring your idea to life and give the best value for your users.
      </Body>
      <Button>Let’s start a project</Button>
      <Button color="primary">Let’s start a project</Button>
      <Button outline>Let’s start a project</Button>
      <Text color="blue">StyledCode</Text>

      <Icon icon="facebook" size="100px" color="dark" />
      <Icon icon="facebook" size="50px" color="light" />
      <Icon icon="facebook" size="20px" color="grey" />

      <Input id="checkbox" type="checkbox" color="dark" />
      <Input id="password" type="password" color="dark" placeholder="Password" icon="lock" />
      <Input type="email" icon="facebook" />
      <Input type="text" />
      <Input type="search" />
      <Input type="number" />
      <Input />
      <Input />
      <Input id="customInput" />
    </Background>
  );
};

export default TestPage;
