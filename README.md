# 📇 Contact Management System

A modern, feature-rich Contact Management application built with **React.js** that allows users to efficiently manage their contacts with full CRUD operations, real-time search, and form validation.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-Mock_API-green)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📝 **Add Contacts** | Create new contacts with real-time validation |
| 👁️ **View Contacts** | Display all contacts in a clean, organized list |
| ✏️ **Edit Contacts** | Update existing contact information seamlessly |
| 🗑️ **Delete Contacts** | Remove contacts with confirmation dialog |
| 🔍 **Search Contacts** | Real-time search functionality by name |
| 📄 **Contact Details** | View detailed information for each contact |
| ✅ **Form Validation** | Formik + Yup (min 3 characters, lowercase email) |
| 🛡️ **Error Handling** | ErrorBoundary component for graceful error management |
| 🔧 **Custom Hooks** | Reusable logic with custom React hooks |
| 🎨 **Responsive Design** | Semantic UI styling for modern UX |

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library with functional components & hooks
- **React Router v6** - Client-side routing
- **Formik** - Form management
- **Yup** - Schema validation
- **Axios** - HTTP client for API calls
- **Semantic UI React** - UI component library

### Backend
- **JSON Server** - Mock REST API for development

### State Management
- **React Hooks** - useState, useEffect, useLocation, custom hooks

---

## 📁 Project Structure

```
Contact-management-system/
├── contact-app/                    # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactCard.jsx    # Individual contact card
│   │   │   ├── ContactLists.jsx   # Contact list with search
│   │   │   ├── ErrorBoundary.jsx  # Error boundary wrapper
│   │   │   └── Header.jsx         # App header
│   │   ├── pages/
│   │   │   ├── AddContact.jsx     # Add contact page
│   │   │   ├── EditContact.jsx    # Edit contact page
│   │   │   └── ContactDetails.jsx # Contact details page
│   │   ├── hooks/
│   │   │   ├── useContactHandler.js  # Contact CRUD operations
│   │   │   └── useCounter.js         # Demo custom hook
│   │   ├── api/
│   │   │   └── contacts.js        # Axios configuration
│   │   ├── App.jsx                # Main app component
│   │   ├── App.css                # Global styles
│   │   └── main.jsx               # App entry point
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── server-api/                     # JSON Server Backend
│   └── db.json                    # Mock database
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn**
- **Git**

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Viswajith2003/Contact-Management-System.git
cd Contact-Management-System
```

**2. Install frontend dependencies**

```bash
cd contact-app
npm install
```

**3. Install JSON Server globally**

```bash
npm install -g json-server
```

---

## 🏃 Running the Application

You need to run **both servers** simultaneously in separate terminals:

### Terminal 1️⃣ - Backend (JSON Server)

```bash
cd server-api
json-server --watch db.json --port 3006
```

✅ **Backend API** runs on: `http://localhost:3006`

### Terminal 2️⃣ - Frontend (React App)

```bash
cd contact-app
npm run dev
```

✅ **React App** runs on: `http://localhost:5173`

### 🌐 Access the Application

Open your browser and navigate to:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/contacts` | Fetch all contacts |
| `GET` | `/contacts/:id` | Fetch single contact by ID |
| `POST` | `/contacts` | Create new contact |
| `PUT` | `/contacts/:id` | Update existing contact |
| `DELETE` | `/contacts/:id` | Delete contact |

**Base URL:** `http://localhost:3006`

---

## 🎯 Usage Guide

### ➕ Adding a Contact

1. Click **"Add Contact"** button
2. Enter **name** (minimum 3 characters)
3. Enter **email** (must be lowercase)
4. Click **"Add"**
5. Automatically redirected to contact list

### ✏️ Editing a Contact

1. Click the **edit icon** (✏️) on any contact card
2. Modify the details in the form
3. Click **"Update"**
4. Changes saved and redirected to home

### 🗑️ Deleting a Contact

1. Click the **trash icon** (🗑️)
2. Confirm deletion in the dialog
3. Contact removed from list

### 🔍 Searching Contacts

- Type in the **search bar** at the top
- Results filter in **real-time** by name
- Shows **"No Contacts Available"** if no matches

### 👁️ Viewing Contact Details

- Click on a **contact name**
- View full contact information
- Option to go back to list

---

## 🔧 Custom Hooks

### `useContactHandler`

Centralized hook managing all contact operations:

```javascript
const {
  contacts,           // All contacts
  searchTerm,         // Current search term
  searchResult,       // Filtered contacts
  addContactHandler,  // Add new contact
  updateContactHandler, // Update contact
  removeContactHandler, // Delete contact
  searchHandler       // Search functionality
} = useContactHandler();
```

**Features:**
- ✅ Fetch contacts on mount
- ✅ Add contact with API call
- ✅ Update contact with PUT request
- ✅ Delete contact with confirmation
- ✅ Real-time search filtering

### `useCounter` (Demo)

Simple counter hook demonstrating custom hook creation:

```javascript
const { count, increCounter, decreCounter, resetCounter } = useCounter();
```

---

## ✅ Form Validation Rules

### Name Field
- ✔️ **Required**
- ✔️ Minimum **3 characters**
- ❌ Empty submissions rejected

### Email Field
- ✔️ **Required**
- ✔️ Valid email format (`example@domain.com`)
- ✔️ Must be **lowercase** (no capital letters)
- ❌ Invalid formats rejected

**Powered by:** Formik + Yup validation schemas

---

## 🛡️ Error Handling

### ErrorBoundary Component
- Catches **runtime errors** in component tree
- Displays user-friendly fallback UI
- Logs errors to console for debugging

### API Error Handling
- All async operations wrapped in **try-catch**
- Network errors handled gracefully
- User feedback on failed operations

### Form Validation
- **Real-time** validation feedback
- Clear error messages
- Prevents invalid submissions

### Delete Confirmation
- **Confirmation dialog** before deletion
- Prevents accidental data loss

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork** the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a **Pull Request**

---

