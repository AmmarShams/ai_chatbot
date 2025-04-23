Smart Product Bot & Inventory Workflow
This project implements an interactive AI assistant designed to help users find products (such as smartphones) and get notified when out-of-stock items are available again. The system is composed of three main workflows: Product Data Flow, Conversational Bot with AI & Logic, and Smart Product Alert System.

💡 Project Overview
Part 1 – Product Data Flow (Scraper + DB Sync)
Scrapes smartphone product data from Walmart using SerpAPI.

Extracts key product details such as name, price, availability, rating, and product URL.

Stores this data in a Supabase database.

Ensures the product list is updated regularly (via automation in n8n).

Part 2 – Conversational Bot with AI & Logic
A React-based web UI where users can interact with a conversational bot.

The bot uses an LLM API to answer product-related queries, like "What's the best smartphone under $500?" or "Do you have the latest iPhone?"

The bot accesses the Supabase database to provide accurate and up-to-date responses.

Part 3 – Smart Product Alert System
Monitors the availability of products in the Supabase database.

Sends email notifications to users if a product they previously requested becomes available.

Updates the database to mark users as "notified" once the alert is sent.

🚀 Setup Instructions
Prerequisites:
n8n: Automation platform for building workflows.

SerpAPI: API for scraping product data from e-commerce websites.

Supabase: Cloud database for storing product and user data.

React: Frontend framework for building the conversational chatbot UI.

Steps to Run the Project Locally:
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/AmmarShams/ai_chatbot.git
cd ai_chatbot
Set Up n8n Workflow:

Ensure n8n is installed locally or use the cloud version.

Import the workflow file (.json) containing the product scraper, alert system, and LLM flow into n8n.

Set Up SerpAPI:

Sign up for SerpAPI and obtain an API key.

Configure the API key in the n8n workflow for scraping product data.

Set Up Supabase:

Create a Supabase account and a new project.

Set up tables to store product data and user information (name, email, requested product).

Configure your Supabase credentials in the n8n workflow.

React Web UI:

Install the required dependencies in the React project:

nginx
Copy
Edit
npm install
Replace API endpoints with your live n8n flow endpoints (for scraping and alerting).

Run the app locally:

sql
Copy
Edit
npm start
Deploy the Website:

Deploy the React app to Netlify using their CLI or Git integration.

Deploy your n8n workflows using Railway or any other platform.

Testing the Flow:

Test the entire flow by scraping data, submitting queries via the React UI, and receiving alerts when products become available.

🛠️ Tool Choices and Reasons
n8n: Chosen for its powerful workflow automation and ease of integrating different APIs and services.

SerpAPI: Chosen for its ease of use in scraping product data from Walmart and other e-commerce platforms.

Supabase: Used as a managed database with great support for real-time updates, which is perfect for tracking product availability.

React: Chosen for building a highly interactive and dynamic frontend that can seamlessly integrate with the backend workflows.

Netlify: Used for quick and easy deployment of the React frontend.

⚠️ Known Limitations
Limited Scraping Source: Currently, the scraper is set to fetch product data only from Walmart via SerpAPI. This can be extended to other platforms like Amazon or BestBuy by modifying the API parameters.

Email Alerts: The email alert system is only mocked for now. To send real emails, a service like SendGrid or AWS SES would need to be integrated.

Real-Time Product Data: The product data refresh rate is limited to the automation schedule in n8n, which may not be ideal for high-frequency updates.

React App Not Fully Optimized: The frontend is still in the early stages and may require optimization for performance and scalability.

💬 Prompt Examples (For Chatbot)
Here are some example prompts for the conversational bot that the users can use to interact with the assistant:

What’s the best smartphone under $500?

Do you have the latest iPhone?

Compare Samsung Galaxy S21 vs OnePlus 9.

Is the iPhone 13 available?

What’s the price of the Samsung Galaxy S21?

Tell me more about the Google Pixel 6.

Can I get an iPhone under $1000?

🔗 Deployed Website
You can test the chatbot and the entire workflow through the deployed website:
Smart Product Bot
