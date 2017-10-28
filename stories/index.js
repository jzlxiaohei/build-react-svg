import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import SvgDemo from '../demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('SVG')} />);


storiesOf('SVG', module)
  .add('svg icons', () => <SvgDemo />);
