# AI-Summarizer

![image](https://github.com/MariusTanase/AI-Summarizer/assets/86925685/59fd7ac1-0df3-4677-a21f-09c67d7d3e99)

AI-Summarizer is an application that utilizes the power of OpenAI's machine learning model to summarize articles. With this application, you can simply input the URL of an article, and it will generate a concise summary for you.

## How to Use

1. Clone the repository:

```bash
git clone https://github.com/MariusTanase/AI-Summarizer.git
```

2. Install the required dependencies:

```bash
cd AI-Summarizer
npm install
```

3. Get the API Key:

   - Go to [https://rapidapi.com/restyler/api/article-extractor-and-summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer) and create an account if you don't have one already.

   - After logging in, navigate to the "Pricing" tab and select a suitable plan to obtain an API key.

4. Set up environment variables:

   - Create a `.env` file in the `src/` folder of the project.

   - Inside the `.env` file, add the following line:

     ```
     VITE_RAPID_API_ARTICLE_KEY=YOUR_API_KEY
     ```

     Replace `YOUR_API_KEY` with the API key you obtained from the RapidAPI website.

5. Run the application:

```bash
npm run dev
```

6. Open your web browser and go to `http://localhost:5173`.

7. Enter the URL of the article you want to summarize into the provided input field.

8. Click on the "Summarize" button.

9. The application will process the article and display the summary on the screen.

## Technologies Used

The AI-Summarizer application is written in ReactJS using Vite, a fast development build tool for modern web applications. It leverages the following technologies:

- ReactJS: A popular JavaScript library for building user interfaces. React allows for efficient and modular development of UI components.

- Vite: A fast and opinionated build tool that enables quick setup and instant hot module replacement (HMR) during development. It provides a smooth development experience.

- OpenAI: The application leverages OpenAI's machine learning model, which is trained on a vast amount of data to generate accurate and coherent summaries.

- RapidAPI: The application integrates with the Article Extractor and Summarizer API from RapidAPI, which provides the article summarization functionality.

## Contributing

Contributions to AI-Summarizer are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them.

4. Push your changes to your forked repository:

```bash
git push origin feature/your-feature-name
```

5. Create a pull request describing your changes and why they should be merged.

Thank you for your contributions!
