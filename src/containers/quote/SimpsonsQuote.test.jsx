import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import SimpsonsQuote from './SimpsonsQuote';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
      return res(ctx.json([
        {
          "quote": "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
          "character": "Homer Simpson",
          "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
          "characterDirection": "Right"
        }
      ]))
    }),
  )
describe('Simpsons container', ()=> {
    beforeAll(()=>server.listen());
    afterAll(()=>server.close());

    it('fetches a quote and displays it', async () => {
        render(<SimpsonsQuote/>)

        const button = screen.getByRole('button');
        userEvent.click(button)
        const alt = await screen.findByAltText('- Homer Simpson')
        
        return waitFor(()=>{
            screen.getByText('All I\'m gonna use this bed for is sleeping, eating and maybe building a little fort.')
        })
    })
})