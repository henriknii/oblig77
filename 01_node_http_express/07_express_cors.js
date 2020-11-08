// add express package
import express from 'express';
import cors from 'cors';

const PORT = 5000;
const corsOptionsAllowAll = {
  origin: '*',
};

/*
Origin: Hvem skal slippe gjennom? ‘*’ = alle
Methods: Hvilke metoder skal tillates?
allowedHeaders: Hvilke headers kan sendes med i requesten?
preflightContinue: Brukes for å håndtere f.eks "delete" forespørsel som er en complex CORS
*/
const corsOptionsAllowUrl = {
  origin: 'http://localhost:3000',
  methods: ['PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
};

// initialize express
const app = express();

// use cors middleware
app.use(cors(corsOptionsAllowUrl));

// basic route using GET method and route
app.get('/api/route-no-cors', (req, res) => {
  res.json({ msg: 'Not working in browser' });
});

// basic route using GET method and route => single cors allow all
app.get('/api/route-cors', cors(), (req, res) => {
  res.json({ msg: 'Working in browser' });
});

// basic route using GET method and route => global cors
app.get('/api/route-cors', (req, res) => {
  res.json({ msg: 'Working in browser' });
});

// create server
app.listen(PORT, console.log(`Server running on port ${PORT}`));
