import React from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from 'utils/PureRender';

import { goTo } from 'actions/index';
import config from 'config';

export class Header extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    location: React.PropTypes.object.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  @autobind
  onClickLink(e) {
    e.preventDefault();

    this.props.dispatch(goTo(e.currentTarget.getAttribute('href')));
  }

  render() {
    const props = this.props;

    return (
      <header className="app__header">
        <div className="app__container">
          <h1>{config.name}</h1>
          <div className="menu clearfix">
            <ul className="nav navbar-nav">
              <li className={props.location.pathname.indexOf('/artists') > -1 ? 'active' : ''}>
                <a href="/artists" onClick={this.onClickLink}>
                  <span className="fa fa-music" />
                  <span>Artists</span>
                </a>
              </li>
              <li className={props.location.pathname.indexOf('/popular') > -1 ? 'active' : ''}>
                <a href="/popular" onClick={this.onClickLink}>
                  <span className="fa fa-fire" />
                  <span>Popular</span>
                </a>
              </li>
              <li className={props.location.pathname.indexOf('/lastweek') > -1 ? 'active' : ''}>
                <a href="/lastweek" onClick={this.onClickLink}>
                  <span className="fa fa-calendar" />
                  <span>Last Week</span>
                </a>
              </li>
              <li className={props.location.pathname.indexOf('/about') > -1 ? 'active' : ''}>
                <a href="/about" onClick={this.onClickLink} >
                  <span className="fa fa-info-circle" />
                  <span>About</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="https://github.com/gilbarbara/react-redux" className="github-ribbon">
          <img src={require('../../media/github-fork.png')} alt="Github Fork" />
        </a>
      </header>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Header);
