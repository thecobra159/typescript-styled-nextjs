import {
  BoilerplateTitle,
  BoilerplateWrapper,
} from '@/src/styles/components/Boilerplate/Boilertplate'

export function Boilerplate(): JSX.Element {
  return (
    <BoilerplateWrapper>
      <BoilerplateTitle>
        This is a Next.js boilerplate with Styled Components
      </BoilerplateTitle>
    </BoilerplateWrapper>
  )
}
