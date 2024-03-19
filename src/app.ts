import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';

const app = express();

// app.all('/graphql', createHandler({ schema }));

app.listen(8000, () => {
    console.log('listen...');
});