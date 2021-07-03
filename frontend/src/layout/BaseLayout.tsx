import Navigation from '../components/Navigation'

export interface BaseLayoutProps {
  children: JSX.Element
}

function BaseLayout(props: BaseLayoutProps) {
  const { children } = props;

  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default BaseLayout
