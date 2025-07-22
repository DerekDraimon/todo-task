import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('debe mostrar el texto correctamente', () => {
    render(<Button>Hola</Button>);
    expect(screen.getByText('Hola')).toBeInTheDocument();
  });
});
