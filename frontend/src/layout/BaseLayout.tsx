import Header from '../components/Header';
import Navigation from '../components/Navigation'

export interface BaseLayoutProps {
  children: JSX.Element[] | React.Component | any
}

function BaseLayout(props: BaseLayoutProps) {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
      <Navigation />
    </div>
  )
}

export default BaseLayout
