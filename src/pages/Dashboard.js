import React, { Component } from "react";
// import { Button, Card, Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import IdleTimer, { IdleTimerProvider } from "react-idle-timer";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content'

function Home() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mt-3 mb-4">2301929530 - Armaningtyas Utami</h1>
      </div>
    </div>
  );
}


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.idleTimer = null;
    this.handleOnIdle = this.handleOnIdle.bind(this);
  }

  render() {
    return (
      <div>
        <IdleTimerProvider
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          timeout={1000 * 30}
          onIdle={this.handleOnIdle}
          debounce={250}
        />
        <Home />
      </div>
    );
  }

  handleOnIdle(event) {
    Swal.fire(
        'Peringatan',
        'Tidak ada kegiatan selama 30 detik, silahkan login kembali',
        'question'
      ).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.open('/', '_self').focus();
        } 
      })
  }
}
