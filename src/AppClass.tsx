import React, { Component } from 'react';
import { MessageStart } from './Components/СompClass/Message';
import { MessageList } from './Components/СompClass/CompChat/MessageList';
import { MessageForm } from './Components/СompClass/CompChat/MessageForm';
import { nanoid } from 'nanoid';
import './App';

interface FormProps {
  autorValue: string;
  messageValue: string;
}

interface Message {
  id: string;
  autor: string;
  value: string;
  now: string;
}

interface State {
  messages: Message[];
}

export class AppClass extends Component<FormProps, State> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toChat: any;
  interval!: NodeJS.Timeout;

  constructor(props: FormProps) {
    super(props);
    this.toChat = React.createRef();
    this.state = {
      messages: [],
    };
  }

  srollBtn = () => {
    if (this.toChat && this.toChat.current) {
      this.toChat.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  addMessage = (messageValue: string, autorValue: string) => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          id: nanoid(),
          autor: autorValue,
          value: messageValue,
          now: new Date().toLocaleTimeString().slice(0, -3),
        },
      ],
    });
  };

  bot = () => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          id: nanoid(),
          autor: 'Душнила',
          value: `Привет ${
            this.state.messages[this.state.messages.length - 1].autor
          }, ты скучный.`,
          now: new Date().toLocaleTimeString().slice(0, -3),
        },
      ],
    });
  };

  componentDidUpdate() {
    if (
      this.state.messages.length > 0 &&
      this.state.messages[this.state.messages.length - 1].autor !== 'Душнила'
    ) {
      this.interval = setTimeout(this.bot, 1500);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header" data-testid="header">
          <MessageStart name={'Артём Чеснов'} />
          <button className="scroll-btn" onClick={this.srollBtn}>
            Далее
          </button>
        </header>
        <main className="App-main">
          <section ref={this.toChat} className="messageList">
            <MessageList messages={this.state.messages} />
            <MessageForm addMessage={this.addMessage} />
          </section>
        </main>
      </div>
    );
  }
}
