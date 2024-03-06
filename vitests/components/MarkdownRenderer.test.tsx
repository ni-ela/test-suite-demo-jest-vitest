import React from 'react'
import { render, screen } from '@testing-library/react'
import { MarkdownRenderer } from '@/components/MarkownRenderer'

describe('MarkdownRenderer', () => {
    it('Deve renderizar MarkdownRenderer', () => {
        const markdown = '# Heading\n\nThis is some **bold** and *italic* text.'
        render(<MarkdownRenderer>{markdown}</MarkdownRenderer>)

        const headingElement = screen.getByRole('heading', { level: 1 })
        const boldElement = screen.getByText('bold')
        const italicElement = screen.getByText('italic')

        expect(headingElement).toBeInTheDocument()
        expect(boldElement).toBeInTheDocument()
        expect(italicElement).toBeInTheDocument()
    })

    it('Deve renderizar blocos de código com realce de sintaxe', () => {
        const markdownText = '```javascript\nconst saudacao = "Olá, mundo!"\nconsole.log(saudacao)\n```'

        const { getByText } = render(<MarkdownRenderer>{markdownText}</MarkdownRenderer>)
        const codeBlock = getByText('"Olá, mundo!"')
        
        expect(codeBlock).toBeDefined()
        expect(codeBlock?.parentElement?.tagName).toBe('CODE')
        expect(codeBlock).toHaveStyle('color: rgb(33, 145, 97);')
        expect(codeBlock.parentElement).toHaveAttribute('class', 'language-javascript')
    })

    it('Deve renderizar código inline corretamente', () => {
        const markdownText = 'Este é um exemplo de `código inline`.'
        const { getByText } = render(<MarkdownRenderer>{markdownText}</MarkdownRenderer>)
        const inlineCode = getByText('código inline')
        expect(inlineCode).toBeInTheDocument()
        expect(inlineCode.tagName).toBe('CODE')
    })
})