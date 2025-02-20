import express from 'express';
import ApiRouter from './router/api';
const app = express()
const port = 4929
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', ApiRouter);

app.listen(port, () => console.log(`app listening on port ${port}!`))