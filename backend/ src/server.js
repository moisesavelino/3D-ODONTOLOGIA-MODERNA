import express from 'express';
import cors from 'cors';
import auth from './routes/auth.js';
import patients from './routes/patients.js';
import appointments from './routes/appointments.js';
import finance from './routes/finance.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', auth);
app.use('/patients', patients);
app.use('/appointments', appointments);
app.use('/finance', finance);

app.listen(3333, ()=>console.log('3D Odontologia Moderna FINAL rodando'));
