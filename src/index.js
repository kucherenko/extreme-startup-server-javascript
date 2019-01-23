const express = require('express');
const answers = require('../src/answers');

const app = express();

app.get('/', (request, response) => {
  const query = request.query.q;
  console.log('A request has arrived:');
  console.log(query);

  const answer = answers(query);
  console.log('The answer has delivered:');
  console.log(answer);
  response.end(answer);
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`JavaScript Extreme Startup Server running on port ${PORT}`);
});
