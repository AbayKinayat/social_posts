import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  it('Render component', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('Should have a class "clear"', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('clear');
  });
});
