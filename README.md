# Clothes Shop

The **Clothes Shop** is an e-commerce platform that dynamically fetches product data from the Fake Store API and displays it in a user-friendly interface. The application allows users to browse through a variety of products, filter them by category, and search for specific items using a search bar. Each product includes essential details such as its title, price, category, and a brief description.

## Features:
- <b>Dynamic Product Display:</b> Products are fetched from the Fake Store API and displayed in a grid layout.
- <b>Category Filtering:</b> Users can filter products by categories like Men's Clothing, Women's Clothing, Jewelry, and Electronics.
- <b>Search Functionality:</b> A search bar allows users to find products by name or description.
- <b>Responsive Design:</b> Ensures compatibility across various devices, including desktops, tablets, and mobile phones.

## How to Use

**Browse Products:**
- Upon loading the page, the Clothes Shop will display a list of products fetched from the Fake Store API.
- Each product card includes the title, price, category, and a truncated description. Users can hover over the "read more" link to view the full description in a modal popup.

**Filter by Category:**
- In the "Sort by:" section, click on any category (e.g., Men's Clothing, Women's Clothing, Jewelry, Electronics) to filter the displayed products.
- A close button appears next to the selected category, allowing users to deselect it and return to the full product list.

**Search for Products:**
- Use the search bar in the header to look for specific items. The search functionality supports case-insensitive queries and filters results in real-time.
- The search bar automatically converts uppercase letters to lowercase for consistent matching.

**Modal Information:**
- Hovering over the <b>"read more"</b> link in a product card reveals additional details about the product in a modal popup. This feature enhances user experience by providing more information without cluttering the main interface.


## Setup Instructions

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/erascu/vanilla-js-fetch-clothes-shop.git
cd vanilla-js-fetch-clothes-shop
```

### 2. Open the Project

- Open the <b>index.html</b> file in your preferred web browser.
- Alternatively, you can use a local server for development purposes:
```bash
npx http-server
```
Then, visit http://localhost:8080 in your browser.

### 3. Customize the Application

- Modify the <b>style.css</b> file to change the appearance of the application.
- Update the <b>script.js</b> file to add more functionality or improve existing features.

## Technologies Used

- <b>HTML5:</b> Structure of the web page.
- <b>CSS3:</b> Styling and layout of the application.
- <b>JavaScript:</b> Dynamic behavior and interactivity.
