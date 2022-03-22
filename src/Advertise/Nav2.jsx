import React from 'react';
import TweenOne from 'rc-tween-one';
import { Link } from 'rc-scroll-anim';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   phoneOpen: false,
    // };
  }


  render() {
    const { dataSource, isMobile, ...props } = this.props;

 
    const { LinkMenu } = dataSource;
    const navData = LinkMenu.children;
    const navChildren = Object.keys(navData).map((key, i) => {
      const item = navData[key];
      let tag = Link;
      const tagProps = {};
      if (item.to && item.to.match(/\//g)) {
        tagProps.href = item.to;
        tag = 'a';
        delete item.to;
      }
      // console.log(item)
      return React.createElement(
        tag,
        { ...item, ...tagProps, key: i.toString() },
        navData[key].children
      );
    });
  //   const handleClick = (e) => {
  //     props.history.push(e.key === 'login' ? {
  //         pathname: '/login'
  //     } : {
  //         pathname: `/home/${e.key}`
  //     })
  // }
  
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}`}//${phoneOpen ? ' open' : ''}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </TweenOne>
          <TweenOne
            {...LinkMenu}
            // reverse={!!phoneOpen}
          >
            {navChildren}
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
