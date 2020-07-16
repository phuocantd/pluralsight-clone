import React from 'react';
import _ from 'lodash';
import CoreLoading from './CoreLoading';

import {ThemeContext} from 'tools/context/theme';

export default function Loading() {
  const {colors} = React.useContext(ThemeContext);
  return (
    <CoreLoading
      backgroundColor={_.get(
        colors,
        'container.backgroundColor',
        'transparent',
      )}
    />
  );
}
