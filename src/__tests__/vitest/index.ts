import '@testing-library/jest-dom'
import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";
import { render, cleanup, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';


expect.extend(matchers);

afterEach(() => {
  cleanup();
});

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
