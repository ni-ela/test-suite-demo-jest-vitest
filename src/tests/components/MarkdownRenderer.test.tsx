import { render } from '@testing-library/react';
import { MarkdownRenderer } from '../../components/MarkownRenderer';

describe('MarkdownRenderer', () => {
  it('renders markdown correctly', () => {
    const markdown = '# Heading\n\nThis is some **bold** and *italic* text.';
    const { getByText } = render(<MarkdownRenderer>{markdown}</MarkdownRenderer>);
    
    expect(getByText('Heading')).toBeInTheDocument();
    expect(getByText('This is some bold and italic text.')).toBeInTheDocument();
  });
});