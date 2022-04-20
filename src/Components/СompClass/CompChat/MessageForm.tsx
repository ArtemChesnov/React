import React, { Component } from 'react';
import { AutorInput } from './AutorInput';
import { MessageButton } from './MessageButton';
import { MessageInput } from './MessageInput';

interface FormProps {
  addMessage: (autorValue: string, messageValue: string) => void;
}
interface FormState {
  autorValue: string;
  messageValue: string;
}

export class MessageForm extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      autorValue: '',
      messageValue: '',
    };
  }
  clickSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.addMessage(this.state.messageValue, this.state.autorValue);
    this.setState({ messageValue: '' });
    this.setState({ autorValue: '' });
  };

  messageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ messageValue: event.target.value });
  };

  autorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ autorValue: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.clickSubmit}>
        <div className="mesageFromUser-form">
          <div className="message-form">
            <AutorInput
              autorValue={this.state.autorValue}
              autorChange={this.autorChange}
            />
            <MessageInput
              messageChange={this.messageChange}
              messageValue={this.state.messageValue}
            />
            <MessageButton
              disabled={!this.state.messageValue || !this.state.autorValue}
            />
          </div>
        </div>
      </form>
    );
  }
}
