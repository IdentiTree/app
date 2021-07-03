import Navigation from '../components/Navigation'

export interface BaseLayoutProps {
  children: JSX.Element[]
}

function BaseLayout(props: BaseLayoutProps) {
  const { children } = props;

  return (
    <div>
      {children}
      <Navigation />
    </div>
  )
}

export default BaseLayout
