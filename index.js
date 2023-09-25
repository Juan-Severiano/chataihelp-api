const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000);

const cors = require('cors');
app.use(cors())
app.options('*', cors())

const OpenAI = require('openai')

const openai = new OpenAI({ apiKey: '' });

async function main() {
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: "Say this is a test.",
    max_tokens: 7,
    temperature: 0,
  });

  console.log(completion);
}
main();