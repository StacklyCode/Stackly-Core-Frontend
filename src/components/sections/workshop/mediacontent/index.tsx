import { FC } from 'react'
import AtomTitle from '@Atoms/title'
import AtomBody from '@Atoms/body'
import AtomButton from '@Atoms/button'
import AtomIcon from '@Atoms/icon'
import Avatar from '@Atoms/avatar'
import { PlayerBox, InfoBox, HeadingInfoBox, BodyContentBox } from './styled'

const MediaContent: FC = () => (
  <section>
    <PlayerBox>{/* player here */}</PlayerBox>
    <InfoBox>
      <Avatar
        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="avatar-instructor"
        size="lg"
      />
      <div>
        <HeadingInfoBox>
          <div>
            <AtomTitle align="left" size="SubTitleLarge" bold>
              Taller de Diseño(FrontEnd)
            </AtomTitle>
            <ul>
              <li>
                <AtomBody size="BodySmall">Marco Vidal Astucuri</AtomBody>
              </li>
              <li>
                <AtomIcon name="schedule" variant="outlined" />
                <AtomBody size="BodySmall">20 June 2077</AtomBody>
              </li>
              <li>
                <AtomIcon name="clock" variant="outlined" />
                <AtomBody size="BodySmall">1.5 Hours</AtomBody>
              </li>
              <li>
                <AtomIcon name="heart" variant="outlined" />
                <AtomBody size="BodySmall">20k Views</AtomBody>
              </li>
            </ul>
          </div>
          <AtomButton>
            Seguir <span /> 29k
          </AtomButton>
        </HeadingInfoBox>
        <BodyContentBox>
          <div>
            <AtomBody size="BodyMedium" align="left">
              We will be in charge to bring your idea to life and give the best value for your
              users.We will be in charge to bring your idea to life and give the best value for your
              users.
            </AtomBody>
          </div>
          <ul>
            <li>
              <AtomIcon name="share" variant="outlined" />
              <AtomBody size="BodyMedium" bold>
                Compartir
              </AtomBody>
            </li>
            <li>
              <AtomIcon name="heart" variant="filled" />
              <AtomBody size="BodyMedium" bold>
                250
              </AtomBody>
            </li>
          </ul>
        </BodyContentBox>
      </div>
    </InfoBox>
  </section>
)

export default MediaContent
