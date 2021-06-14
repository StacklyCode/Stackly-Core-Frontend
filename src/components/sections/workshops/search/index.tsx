import { FC } from 'react'
import Container from '@Src/components/atoms/container'
import Input from '@Src/components/atoms/input'
import { SearchBox, InputSearchBox } from './styled'

const Search: FC = () => (
  <SearchBox>
    <Container>
      <InputSearchBox>
        <Input type="text" />
      </InputSearchBox>
    </Container>
  </SearchBox>
)

export default Search
