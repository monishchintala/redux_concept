import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
  const show = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      {show ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
