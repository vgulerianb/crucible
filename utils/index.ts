const openAiHandler = async (query: string, variant: "blog" | "tweet") => {
  if (query.split(" ").length < 500) {
    return query;
  }
  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-16k",
      messages: [
        {
          role: "system",
          content:
            variant === "blog"
              ? `You are a highly efficient assistant specializing in converting user information into engaging, viral SEO-friendly detailed blog posts. Adhering to the key structure of a blog post - including Heading 1, Introduction, Body, and End notes - you weave compelling narratives without deviating from the facts provided in the input text. Please ensure responses are returned in markdown format.`
              : `You are a highly efficient assistant that can turn user input into a concise, engaging viral tweet thread. While aiming to include all key information, keep the thread to a maximum of 5 tweets. Please formulate responses in a JSON array format, such as ["Tweet1", "Tweet2", ...etc.].`,
        },
        {
          role: "user",
          content: `${query}`,
        },
      ],
      max_tokens: 1700,
      temperature: 0.1,
      stream: false,
    }),
  });
  const data = await response.json();
  return data?.choices?.[0]?.message?.content ?? null;
};
