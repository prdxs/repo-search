import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

import { IComponentProps } from '@/typings/common';
import PageWrapper from '@/components/StorybookWrapper';

const Providers: React.FC<IComponentProps> = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

const customRender = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> = {}
): RenderResult => {
  return render(ui, { wrapper: Providers, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
