import express, { Express, Request, Response } from 'express';

const app: Express = express();
const messages: string[] = []; // Store messages in memory for this example
app.use(express.json());

app.get('/messages', (req: Request, res: Response) => {
    res.status(200).json({ messages });
});

app.post('/messages', (req: Request, res: Response) => {
    try {
        const { message } = req.body;
        if (!message) {
            throw new Error('No message provided');
        }
        messages.push(message);
        res.status(201).json({ message: 'Message received' });
    } catch (e) {
        res.status(400).json({ error: 'Invalid request' });
    }
});

export default app;