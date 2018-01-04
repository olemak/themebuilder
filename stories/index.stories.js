import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import TextColor from './TextColor';
import ThemeColors from './ThemeColors';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Color', module)
  .add('Palette', () => <ThemeColors />)

storiesOf('Typography', module)
  .add('Basic Text', () => <div className="basic">Basic Typography</div>)
  .add('Text Color', () => <TextColor />)