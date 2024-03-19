import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema, rootValue } from './resolvers'
import cors from 'cors';

const app = express();

// app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.all('/graphql', createHandler({ schema, rootValue }));

app.listen(8000, () => {
    console.log('listen...');
});