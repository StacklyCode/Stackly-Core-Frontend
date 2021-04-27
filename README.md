<h1 id="title" align="center">
</h1><br/>

<div align="center">
<a href="https://discord.com/invite/37PHuNw" title="Fazt Community">
<img height="200px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1619492717/Stacklycode/Group_1501_mly6te.svg" alt="Fazt Community">
</a>
</div><br/><br/>


<div align="center">
<a href="https://github.com/faztcommunity" title="Github">
<img height="40px" 	src="https://res.cloudinary.com/design-code-mx/image/upload/v1596591162/ReadMeFaztCommunity/github_boz1st.svg" alt="Github">
</a>&nbsp;
<a href="https://discord.com/invite/37PHuNw" title="Discord">
<img height="40px"	src="https://res.cloudinary.com/design-code-mx/image/upload/v1596590975/ReadMeFaztCommunity/discord_ctzgwd.svg" alt="Discord">
</a>&nbsp;
<a href="https://twitter.com/FaztTech" title="Twitter">
<img height="40px"	src="https://res.cloudinary.com/design-code-mx/image/upload/v1596590975/ReadMeFaztCommunity/twitter_zgr4p0.svg" alt="Twitter">
</a>&nbsp;
<a href="https://www.youtube.com/channel/UCMn28O1sQGochG94HdlthbA" title="Youtube">
<img height="40px"	src="https://res.cloudinary.com/design-code-mx/image/upload/v1596590975/ReadMeFaztCommunity/youtube_t59c99.svg" alt="Youtube">
</a>&nbsp;
</div><br/>


</div>
<h1/>

<h2 id="" >
<b>
¿Quienes Somos?
</b>
</h2>

<span>
<b>
StacklyCode es una espacio donde se reúnen desarrolladores y diseñadores de habla
hispana. Un lugar donde puedes aprender, pasarla bien y mejorar tus habilidades.
</b>
</span>


<h1/>

<h2 id="" >
<b>
Estructura de Arbol
</b>
</h2>
<br/>
<img width="400px"	src="https://res.cloudinary.com/design-code-mx/image/upload/v1619492714/Stacklycode/Group_1520_k0k9it.svg" >
<h1/>
<h2 id="" >
<b>
Estructura del Folder
</b>
</h2>
<br/>
<img width="400px"	src="https://res.cloudinary.com/design-code-mx/image/upload/v1619492714/Stacklycode/Group_1520_k0k9it.svg" >
<h1/>

<h2 id="" >
<b>
Estructura de Archivos
</b>
</h2>
<h2 id="" >
index.tsx
</h2>

```js
import { FC } from 'react'
import { ButtonStyled } from './styled'
import { ButtonProps } from './types'

const AtomButton: FC<ButtonProps> = ({ color, children, outline}) => { 
    return (
      <ButtonStyled color={color} outline={outline}>
        {children || 'Default Text'}
      </ButtonStyled>
  ) 
}

export default AtomButton
```

<h1></h1>

<h2 id="" >
types.d.tsx
</h2> 

```js
export type ButtonProps = {
  color?: 'primary' | 'secondary'
  outline?: boolean
  link?: string
  href?: string
  type?: 'button' | 'reset' | 'submit'
  text?: string
}
```
<h1></h1>

<h2 id="" >
styled.tsx
</h2> 

```js
import styled from '@emotion/styled'
import { ButtonProps } from './types'

export const ButtonStyled = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  max-width: 250px;

  ${({ theme, color }) =>
    color === 'primary' && {
      border: `1px solid ${theme.colors.accent.green.base}`,
      backgroundColor: theme.colors.accent.green.base,
      ':hover': {
        backgroundColor: theme.colors.accent.green.dark,
        border: `1px solid ${theme.colors.accent.green.dark}`,
      },
    }}
    
  transition: all 0.3s ease-out;
`

export const Button2Styled = styled.button<ButtonProps>``

```

<h1></h1>

<h2 id="" >
Button.stories.tsx
</h2> 

```js
import { Story, Meta } from '@storybook/react'
import AtomButton from './index'
import { ButtonProps } from './types'

export default {
  title: 'Components/Atoms/AtomButton',
  component: AtomButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    outline: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <AtomButton {...args}>{args.text}</AtomButton>

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  outline: false,
  text: ' ',
}
```

<h1></h1>

