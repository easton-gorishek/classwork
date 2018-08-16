import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Article.css';
import logo from '../../assets/logo.png';

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { article } = this.props;
    const { name, url } = article;
    const split = url.split('/');
    const id = split[split.length - 2];

    return (
      <li className={styles.article}>
        <Link to={`/articles/${id}`}>
          {name}
        </Link>  
      </li>
    );
  }
}