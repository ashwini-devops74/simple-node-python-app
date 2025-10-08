const express = require('express');

const client = require('prom-client');
 
const app = express();

const port = process.env.PORT || 3000;
 
// Create a Registry to register metrics

const register = new client.Registry();

client.collectDefaultMetrics({ register });
 
// Custom metric

const httpRequestDurationMicroseconds = new client.Histogram({

  name: 'http_request_duration_seconds',

  help: 'Duration of HTTP requests in seconds',

  labelNames: ['method', 'route', 'code'],

  buckets: [0.1, 0.5, 1, 2, 5, 10],

});

register.registerMetric(httpRequestDurationMicroseconds);
 
// Middleware to measure request durations

app.use((req, res, next) => {

  const end = httpRequestDurationMicroseconds.startTimer();

  res.on('finish', () => {

    end({ method: req.method, route: req.route ? req.route.path : req.path, code: res.statusCode });

  });

  next();

});
 
// Example endpoint

app.get('/', (req, res) => {

  res.send('Hello World!');

});
 
// Metrics endpoint

app.get('/metrics', async (req, res) => {

  res.set('Content-Type', register.contentType);

  res.end(await register.metrics());

});
 
app.listen(port, () => {

  console.log(`App running on port ${port}`);

});

// API endpoint to run Python script
app.get("/run-python", (req, res) => {
  exec("python script.py", (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send(`Error: ${error.message}`);
    }
    if (stderr) {
      return res.status(500).send(`Stderr: ${stderr}`);
    }
    res.send(`Python Output: ${stdout}`);
  });
});

 