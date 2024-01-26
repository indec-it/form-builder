import React from 'react';

import Message from './Message';

export default {
  title: 'Message',
  component: Message,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

function Template() {
  return <Message message="Test message" />;
}

export const Basic = Template.bind({});
