import React from 'react';
import NProgress from 'nprogress';
import Router from "next/router";
import PropTypes from 'prop-types';

class NextNProgress extends React.Component {
  static defaultProps = {
    color: 'white',
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3,
    showOnShallow: true,
  };

  timer = null;

  routeChangeStart = (_, { shallow }) => {
    if (!shallow || this.props.showOnShallow) {
      NProgress.set(this.props.startPosition);
      NProgress.start();
    }
  };

  routeChangeEnd = (_, { shallow }) => {
    if (!shallow || this.props.showOnShallow) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        NProgress.done(true);
      }, this.props.stopDelayMs);
    }
  };

  render() {
    const { color, height } = this.props;
    return (
      <style jsx global>{`
        #nprogress .bar {
          background: white;
          position: fixed;
          z-index: 9999999;
          top: 0;
          left: 0;
          width: 100%;
          height: ${height}px;
        }
      `}</style>);
  }

  componentDidMount() {
    const { options } = this.props;

    if (options) {
      NProgress.configure(options);
    }

    Router.events.on('routeChangeStart', this.routeChangeStart);
    Router.events.on('routeChangeComplete', this.routeChangeEnd);
    Router.events.on('routeChangeError', this.routeChangeEnd);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.routeChangeStart);
    Router.events.off('routeChangeComplete', this.routeChangeEnd);
    Router.events.off('routeChangeError', this.routeChangeEnd);
  }
}

NextNProgress.propTypes = {
  color: PropTypes.string,
  startPosition: PropTypes.number,
  stopDelayMs: PropTypes.number,
  height: PropTypes.number,
  showOnShallow: PropTypes.bool,
  options: PropTypes.object,
};

export default NextNProgress;