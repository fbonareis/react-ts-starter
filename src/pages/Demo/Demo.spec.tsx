import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Demo from './Demo';

describe('pages/Demo', () => {
  it('should render page heading', () => {
    render(<Demo />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /data to enrich your online business/i
    );
  });

  it('should render header navigation', () => {
    render(<Demo />);

    expect(
      screen.getByRole('navigation', { name: /global/i })
    ).toBeInTheDocument();
  });

  it('should render header navigation items', () => {
    render(<Demo />);

    expect(screen.getByRole('link', { name: /product/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /features/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /marketplace/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /log in/i })).toBeInTheDocument();
  });

  it('should render action buttons', () => {
    render(<Demo />);

    expect(
      screen.getByRole('link', { name: /get started/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /live demo/i })
    ).toBeInTheDocument();
  });
});
