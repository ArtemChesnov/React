import React, { Component, RefObject } from 'react';
import { MessageStart } from './Message';
import { MessageList } from './CompChat/MessageList';
import { MessageForm } from './CompChat/MessageForm';
import { nanoid } from 'nanoid';
import '../../App';

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
  toChat: RefObject<HTMLElement>;
}

export class AppClass extends Component<FormProps, State> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      messages: [],
      toChat: React.createRef(),
    };
  }

  srollBtn = () => {
    if (this.state.toChat && this.state.toChat.current) {
      this.state.toChat.current.scrollIntoView({ behavior: 'smooth' });
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
      setTimeout(this.bot, 1500);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" data-testid="header">
          <MessageStart name={'Артём Чеснов'} />
          <button className="scroll-btn" onClick={this.srollBtn}>
            Далее
          </button>
        </header>
        <main className="App-main">
          <section ref={this.state.toChat} className="messageList">
            <MessageList messages={this.state.messages} />
            <MessageForm addMessage={this.addMessage} />
          </section>
        </main>
      </div>
    );
  }
}
