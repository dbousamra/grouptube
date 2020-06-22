import { Button, Heading, Pane } from 'evergreen-ui';
import React from 'react';

export const App = () => {
  return (
    <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>Left Aligned</Heading>
      </Pane>
      <Pane>
        <Button marginRight={16}>Button</Button>
        <Button appearance="primary">Primary Button</Button>
      </Pane>
    </Pane>
  );
};
