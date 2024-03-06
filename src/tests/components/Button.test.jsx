import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonHeader, PageButton } from '@/components/Button';

jest.mock('next/router', () => ({
    useRouter: () => ({
        pathname: '/example',
    }),
}));

describe('PageButton', () => {
    it('renderiza o botão corretamente', () => {
        render(<PageButton href="/example">Exemplo</PageButton>);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Exemplo');
    });

    it('chama a função onClick ao clicar no botão', () => {
        const mockOnClick = jest.fn();
        render(<PageButton href="/example" onClick={mockOnClick}>Exemplo</PageButton>);

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});

describe('ButtonHeader', () => {
    it('renderiza o botão de cabeçalho corretamente', () => {
        render(<ButtonHeader href="/example">Exemplo</ButtonHeader>);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Exemplo');
    });

    it('chama a função onClick ao clicar no botão de cabeçalho', () => {
        const mockOnClick = jest.fn();
        render(<ButtonHeader href="/example" onClick={mockOnClick}>Exemplo</ButtonHeader>);

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
