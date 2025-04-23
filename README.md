# Smart Product Bot & Inventory Workflow

This project implements an interactive AI assistant designed to help users find products (such as smartphones) and get notified when out-of-stock items are available again. The system is composed of three main workflows: **Product Data Flow**, **Conversational Bot with AI & Logic**, and **Smart Product Alert System**.

---

## 💡 Project Overview

### Part 1 – Product Data Flow (Scraper + DB Sync)
- Scrapes smartphone product data from Walmart using **SerpAPI**.
- Extracts key product details such as **name**, **price**, **availability**, **rating**, and **product URL**.
- Stores this data in a **Supabase** database.
- Ensures the product list is updated regularly (via automation in **n8n**).

### Part 2 – Conversational Bot with AI & Logic
- A **React**-based web UI where users can interact with a conversational bot.
- The bot uses an **LLM API** to answer product-related queries, like:
  - "What's the best smartphone under $500?"
  - "Do you have the latest iPhone?"
- The bot accesses the **Supabase** database to provide accurate and up-to-date responses.

### Part 3 – Smart Product Alert System
- Monitors the availability of products in the **Supabase** database.
- Sends email notifications to users if a product they previously requested becomes available.
- Updates the database to mark users as **"notified"** once the alert is sent.

---

## 🚀 Setup Instructions

### Prerequisites:
- **n8n**: Automation platform for building workflows.
- **SerpAPI**: API for scraping product data from e-commerce websites.
- **Supabase**: Cloud database for storing product and user data.
- **React**: Frontend framework for building the conversational chatbot UI.

### Steps to Run the Project Locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AmmarShams/ai_chatbot.git
   cd ai_chatbot
   
---

### ⚙️ 2. Set Up the Backend Workflows in n8n

- Install **[n8n](https://n8n.io/)** locally or use the cloud version.
- Import the provided `.json` workflows located in the `n8n_workflows/` directory.

#### 📂 Included Workflows:

- 📦 **Product Scraper Flow**
- 💬 **LLM Chatbot Logic**
- 📧 **Smart Product Alert System**

#### 🔐 Update Credentials:

- 🔑 SerpAPI Key  
- 🔗 Supabase URL and API Key

---

### 🔌 3. Configure SerpAPI for Product Scraping

- Sign up at **[SerpAPI](https://serpapi.com/)** and get your free API key.
- In your **n8n scraper workflow**, locate the **HTTP Request** node and insert this endpoint:

```http
https://serpapi.com/search.json?q=smartphones&api_key=YOUR_SERPAPI_KEY
