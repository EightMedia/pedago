import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Component } from 'react';
import { io } from 'socket.io-client';

class Game extends Component {
  constructor(props:any) {
    super(props);

    this.state = {
      hello: '',
    }
  }

  componentDidMount() {
    this.socket = io("http://192.168.68.106:8000");
    this.socket.on('now', data => {
      this.setState({
        hello: data.message
      });
    })
  }

  render() {
    return(
      <h1>{this.state.hello}</h1>
    )
  }
}

export default Game;