const axios = require('axios');

class OpenAI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.openai.com/v1';
  }

  async getCompletion(prompt, maxTokens = 50, temperature = 0.7, topP = 1, frequencyPenalty = 0, presencePenalty = 0) {
    try {
      const response = await axios.post(`${this.baseUrl}/engines/text-davinci-002/completions`, {
        prompt,
        max_tokens: maxTokens,
        temperature,
        top_p: topP,
        frequency_penalty: frequencyPenalty,
        presence_penalty: presencePenalty
      }, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data.choices[0].text.trim();
    } catch (error) {
      throw new Error(`Error fetching completion: ${error.message}`);
    }
  }
}

module.exports = OpenAI;
