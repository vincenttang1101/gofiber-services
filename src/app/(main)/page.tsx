import { Fragment, ReactNode } from 'react'

type HomePageProps = {
  children: ReactNode
}

export default async function HomePage({ children }: HomePageProps) {
  return <Fragment>{children}</Fragment>
}
