import Head from 'next/head'
import { Theme } from '@/styles/Theme'

interface ISeo {
  title: string
  description: string
}

export default function SEO({ title, description }: ISeo): JSX.Element {
  const pageImage = 'assets/logo/logo.png'

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="image" content={pageImage} />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content={Theme.Black} />
      <meta name="msapplication-TileColor" content={Theme.White} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={String(512)} />
      <meta property="og:image:height" content={String(512)} />
    </Head>
  )
}
