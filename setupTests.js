import '@testing-library/jest-dom' // para reconhecer funções como toBeInTheDocument
import { vi } from 'vitest';

// Mocks globais para substituir next/router
vi.mock('next/router', () => ({
    useRouter: () => ({
        pathname: '/example',
    }),
}));