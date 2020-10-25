import React from 'react';
import Layout from './components/layout/Layout';
import './App.css';
import Scroll from './components/organisms/scroll/Scroll';
import ScrollToTop from 'react-scroll-up';


// const sideBarIsOpen = null;
const scrollToTopStyles = {
			transitionDuration: '0.2s',
			transitionTimingFunction: 'linear',
			transitionDelay: '0s',
		};

const App = props => {
  return (
    <div>
      <Layout />
      <Scroll>
        <ScrollToTop showUnder={ 100 } style={ scrollToTopStyles }>
          <span>To Top</span>
        </ScrollToTop>
      </Scroll>
    </div>
  );
}

export default App;
