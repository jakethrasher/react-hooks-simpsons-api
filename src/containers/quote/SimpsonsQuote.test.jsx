import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import SimpsonsQuote from './SimpsonsQuote';
import userEvent from '@testing-library/user-event';

describe('Simpsons container', ()=> {
    it('fetches a quote and displays it', async () => {
        render(<SimpsonsQuote/>)

        const button = screen.getByRole('button');
        userEvent.click = (button)

        
    })
})