import SEO from '@/components/SEO/SEO'
import { Boilerplate } from '@/components/Boilerplate/Boilerplate'

export default function Home(): JSX.Element {
  return (
    <>
      <SEO
        title="Next.js boilerplate"
        description="Next.js boilerplate with Styled Components"
      />

      <Boilerplate />
    </>
  )
}
