import React from 'react';
import Grid from '@material-ui/core/Grid';

import { IComponentProps } from '@/typings/common';
import ThemeProvidersWrapper from '@/components/ThemeProvidersWrapper';

const style: React.CSSProperties = {
  padding: '2rem',
};

const StorybookWrapper: React.FC<IComponentProps> = ({
  className,
  children,
}) => (
  <ThemeProvidersWrapper>
    <Grid
      className={className}
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={style}
    >
      {children}
    </Grid>
  </ThemeProvidersWrapper>
);

export default StorybookWrapper;
