# Smart Product Bot & Inventory Workflow

[![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![n8n](https://img.shields.io/badge/n8n-%23005AFF.svg?style=for-the-badge&logo=n8n&logoColor=white)](https://n8n.io/)
[![Supabase](https://img.shields.io/badge/Supabase-%233ECF8E.svg?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![SerpAPI](https://img.shields.io/badge/SerpAPI-%23FF6F00.svg?style=for-the-badge&logoColor=white)](https://serpapi.com/)
[![Netlify](https://img.shields.io/badge/Netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

**🚀 Fully functional and deployed live on Netlify!**

**Check out the live demo:** [https://smartphoneaichatbot.netlify.app/](https://smartphoneaichatbot.netlify.app/)

An AI-powered assistant designed to help users discover smartphone products and receive timely notifications when out-of-stock items are available again. Built with React for the frontend, n8n for backend workflows, Supabase for data storage, and SerpAPI for product data.
## ✨ Key Features

* **Intelligent Product Discovery:** Engage with an AI chatbot to find detailed information about smartphones.
* **Real-time Walmart Data:** Efficiently scrapes and utilizes smartphone data directly from Walmart.
* **AI-Powered Chatbot:** Provides intelligent answers to user inquiries regarding product specifications and availability.
* **Automated Restock Alerts:** Receive prompt email notifications when previously unavailable products come back in stock.
* **Scalable Data Management:** Leverages Supabase for robust and real-time storage and synchronization of product and user data.
* **Responsive React UI:** Offers a user-friendly and interactive frontend experience built with React.

## 🛠️ Technologies Used

* **Frontend:** [React](https://react.dev/)
* **Backend Automation:** [n8n](https://n8n.io/)
* **Backend Database:** [Supabase](https://supabase.com/)
* **Product Data API:** [SerpAPI](https://serpapi.com/)
* **Deployment:** [Netlify](https://www.netlify.com/)

## 🚀 Live Demo

Experience the Smart Product Bot in action: [https://smartphoneaichatbot.netlify.app/](https://smartphoneaichatbot.netlify.app/)

## ⚙️ Setup Instructions

Follow these detailed steps to get the Smart Product Bot running on your local machine:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/AmmarShams/ai_chatbot.git](https://github.com/AmmarShams/ai_chatbot.git)
    cd ai_chatbot
    ```

2.  **Set Up the Backend Workflows in n8n:**
    * Install n8n locally following the official [n8n installation guide](https://docs.n8n.io/getting-started/). Alternatively, utilize [n8n Cloud](https://n8n.cloud/).
    * Import the `.json` workflow files from the `n8n_workflows/` directory into your n8n instance. These include:
        * `Product Scraper Flow`: Automates the retrieval of smartphone data from Walmart.
        * `LLM Chatbot Logic`: Implements the AI-driven logic for handling product-related queries.
        * `Smart Product Alert System`: Manages the process of notifying users about product restocks.
    * **Configure Credentials in n8n:** Update the following credentials within your n8n workflows:
        * **SerpAPI Key:** Essential for accessing the SerpAPI service to fetch product data.
        * **Supabase URL and API Key:** Required for establishing a secure connection to your Supabase project.

3.  **Configure SerpAPI for Product Scraping:**
    * Sign up for an account on [SerpAPI](https://serpapi.com/).
    * In your n8n "Product Scraper Flow," ensure the following endpoint is used, replacing `YOUR_SERPAPI_KEY` with your unique API key:
        ```
        [https://serpapi.com/search.json?q=smartphones&api_key=YOUR_SERPAPI_KEY](https://serpapi.com/search.json?q=smartphones&api_key=YOUR_SERPAPI_KEY)
        ```

4.  **Set Up Supabase for Database Storage:**
    * Create a new project on [Supabase](https://supabase.com/).
    * Within your Supabase project, create the following tables with relevant columns:
        * `products`: Stores detailed information about scraped smartphone products (e.g., name, price, availability, URL).
        * `alerts`: Records user requests for restock notifications, including the specific product and the user's email address.
    * Retrieve your Supabase **URL** and **API Key** from your project settings in the Supabase dashboard.
    * Integrate these credentials into the corresponding Supabase nodes within your n8n workflows.

5.  **Set Up the React Frontend:**
    * Navigate to the `client` directory:
        ```bash
        cd client
        ```
    * Install the necessary project dependencies:
        ```bash
        npm install
        ```
    * Create a `.env` file in the `client` directory and define your n8n webhook endpoint:
        ```
        REACT_APP_N8N_ENDPOINT=[https://your-n8n-domain.com/webhook](https://your-n8n-domain.com/webhook)
        ```
        **Note:** Ensure you replace `https://your-n8n-domain.com/webhook` with the actual webhook URL from your n8n "LLM Chatbot Logic" workflow.
    * Start the React development server:
        ```bash
        npm start
        ```

6.  **Deploy the App (Optional):**
    * **Frontend:** For production deployment, consider utilizing platforms like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) for their ease of use and performance.
    * **Backend (n8n):** Deploy your n8n instance using services such as [Railway](https://railway.app/) or [Render](https://render.com/) for streamlined hosting.

7.  **Test the Flow:**
    * Access the frontend in your web browser (typically at `http://localhost:3000`).
    * Interact with the AI chatbot by posing various product-related questions.
    * Test the out-of-stock alert functionality to verify the notification system (keeping in mind the current simulated email alerts).

## ⚙️ Tool Choices and Rationale

* **n8n:** Selected for its robust workflow automation capabilities, enabling efficient scraping, intelligent chatbot logic implementation, and seamless alert management within a visual and developer-friendly interface.
* **SerpAPI:** Chosen for its reliable and straightforward method of extracting product data from Walmart, simplifying the data acquisition process without the need for complex custom scraping solutions.
* **Supabase:** Opted for its real-time database features and comprehensive backend-as-a-service offering, providing a scalable and efficient solution for managing and synchronizing product and user-related data.
* **React:** Preferred for building the interactive frontend due to its component-based architecture, extensive community support, and ability to create dynamic and engaging user interfaces.
* **Netlify:** Utilized for its ease of deployment and excellent performance in hosting static web applications, ensuring reliable and accessible deployment of the frontend demo.
* **Vercel/Railway/Render:** Recommended as efficient deployment platforms for the frontend and backend components, respectively, offering streamlined processes for bringing the application online.

## ⚠️ Known Limitations and Future Enhancements

* **Current Data Source:** Product data is presently limited to Walmart via the SerpAPI. Future development may include integration with additional major retailers to broaden product coverage.
* **Email Alert Simulation:** Email alerts are currently simulated for demonstration purposes. Integration with a dedicated email service like SendGrid or AWS SES is planned for production deployment to ensure reliable and effective notifications.
* **Product Data Refresh:** The frequency of product data updates is governed by the n8n workflow schedule. Optimization for near real-time updates is a potential future enhancement.
* **Frontend Optimization:** Further performance tuning and user experience enhancements for the React frontend are planned for future iterations.

## 🗣️ Prompt Examples

Explore the capabilities of the AI chatbot with these example queries:

* "What are some top-rated smartphones under $500?"
* "Can you provide information on the latest iPhone releases?"
* "Compare the features and specifications of the Samsung Galaxy S21 and OnePlus 9."
* "Is the iPhone 13 currently in stock?"
* "Find me an iPhone with a price under $1000."
