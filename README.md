# Smart Product Bot & Inventory Workflow

[![Awesome Badges Go Here - Consider things like build status, tech stack, etc.](https://img.shields.io/badge/Awesome-Badge-brightgreen)](https://shields.io/)

An AI-powered assistant that helps users discover smartphone products and notifies them when out-of-stock items become available again. Built with React for the frontend, n8n for backend workflows, Supabase for data storage, and SerpAPI for product data.

## 🔗 Live Demo

You can see a live demo of the Smart Product Bot at: [https://smartphoneaichatbot.netlify.app/](https://smartphoneaichatbot.netlify.app/)


## ✨ Features

* **🔍 Smart Product Search:** Ask the AI chatbot about smartphones and get relevant information.
* **🛒 Walmart Data:** Scrapes comprehensive smartphone data directly from Walmart.
* **🤖 AI Chatbot:** Answers your product-related questions intelligently.
* **📧 Out-of-Stock Alerts:** Receive email notifications when your desired products are back in stock.
* **💾 Data Storage & Sync:** Utilizes Supabase for efficient data storage and real-time synchronization.
* **⚛️ React Frontend:** A user-friendly and responsive interface built with React.

## 🛠️ Setup Instructions

Follow these steps to get the Smart Product Bot up and running on your local machine:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/AmmarShams/ai_chatbot.git](https://github.com/AmmarShams/ai_chatbot.git)
    cd ai_chatbot
    ```

2.  **Set Up the Backend Workflows in n8n:**
    * Install n8n locally following the official [n8n installation guide](https://docs.n8n.io/getting-started/). Alternatively, you can use [n8n Cloud](https://n8n.cloud/).
    * Import the `.json` workflow files located in the `n8n_workflows/` directory into your n8n instance. The following workflows are included:
        * `Product Scraper Flow`: Responsible for fetching smartphone data from Walmart.
        * `LLM Chatbot Logic`: Contains the AI logic for answering product queries.
        * `Smart Product Alert System`: Manages the out-of-stock notification process.
    * **Update Credentials in n8n:** You'll need to configure the following credentials within your n8n workflows:
        * **SerpAPI Key:** Required for accessing the SerpAPI service.
        * **Supabase URL and API Key:** Necessary for connecting to your Supabase project.

3.  **Configure SerpAPI for Product Scraping:**
    * Sign up for an account at [SerpAPI](https://serpapi.com/).
    * In your n8n "Product Scraper Flow," ensure you are using the following endpoint and replace `YOUR_SERPAPI_KEY` with your actual API key:
        ```
        [https://serpapi.com/search.json?q=smartphones&api_key=YOUR_SERPAPI_KEY](https://serpapi.com/search.json?q=smartphones&api_key=YOUR_SERPAPI_KEY)
        ```

4.  **Set Up Supabase for Database Storage:**
    * Create a new project on [Supabase](https://supabase.com/).
    * Within your Supabase project, create two tables:
        * `products`: This table will store the scraped smartphone data. Define columns relevant to product information (e.g., name, price, availability, URL).
        * `alerts`: This table will store user alert requests, including the product they are interested in and their email address.
    * Obtain your Supabase **URL** and **API Key** from your project settings in the Supabase dashboard.
    * Update these credentials in the corresponding Supabase nodes within your n8n workflows.

5.  **Set Up the React Frontend:**
    * Navigate to the `client` directory:
        ```bash
        cd client
        ```
    * Install the necessary dependencies:
        ```bash
        npm install
        ```
    * Create a `.env` file in the `client` directory and add your n8n webhook endpoint:
        ```
        REACT_APP_N8N_ENDPOINT=[https://your-n8n-domain.com/webhook](https://your-n8n-domain.com/webhook)
        ```
        **Note:** Replace `https://your-n8n-domain.com/webhook` with the actual webhook URL from your n8n "LLM Chatbot Logic" workflow.
    * Start the React development server:
        ```bash
        npm start
        ```

6.  **Deploy the App (Optional):**
    * **Frontend:** For production deployment of the React frontend, consider using platforms like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
    * **Backend (n8n):** You can deploy your n8n instance using services like [Railway](https://railway.app/) or [Render](https://render.com/).

7.  **Test the Flow:**
    * Open the frontend in your browser (usually at `http://localhost:3000`).
    * Interact with the AI chatbot by asking product-related questions.
    * Try requesting alerts for out-of-stock items to ensure the notification system is working (note the current limitation about mocked emails).

## ⚙️ Tool Choices and Reasons

* **n8n:** Chosen for its powerful workflow automation capabilities, making it ideal for scraping data, implementing chatbot logic, and managing alerts in a visual and code-friendly environment.
* **SerpAPI:** Selected for its ease of use and reliable scraping of product data from Walmart. It simplifies the process of extracting the necessary information without needing to build a custom scraper from scratch.
* **Supabase:** Opted for its real-time capabilities and comprehensive backend-as-a-service features, providing a scalable and efficient solution for storing and synchronizing product and user data.
* **React:** Preferred for building the frontend chatbot UI due to its component-based architecture, large community, and ability to create interactive and dynamic user experiences.
* **Netlify/Vercel:** Recommended for their ease of deployment and excellent performance in hosting static frontend applications.
* **Railway/Render:** Suggested for their streamlined deployment processes for containerized or Node.js applications, making it easy to host the n8n backend.

## ⚠️ Known Limitations

* **Scraping Limited to Walmart:** The current implementation only scrapes product data from Walmart via the SerpAPI.
* **Product Refresh Schedule:** The frequency of product data updates depends on the scheduling configured within the n8n workflows.
* **Frontend Optimization:** The frontend may require further optimization for performance and user experience in a production environment.

## 🗣️ Prompt Examples

Here are some example queries you can try with the AI chatbot:

* "What's the best smartphone under $500?"
* "Do you have information on the latest iPhone models?"
* "Compare the specifications of the Samsung Galaxy S21 and OnePlus 9."
* "Is the iPhone 13 currently available?"
* "Can you find me an iPhone priced under $1000?"
