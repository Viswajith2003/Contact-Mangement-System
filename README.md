# Contact Management System

A modern, feature-rich Contact Management application built with React.js that allows users to efficiently manage their contacts with full CRUD operations.

## 🚀 Features

- ✅ **Add Contacts** - Create new contacts with name and email validation
- ✅ **View Contacts** - Display all contacts in a clean, organized list
- ✅ **Edit Contacts** - Update existing contact information
- ✅ **Delete Contacts** - Remove contacts with confirmation dialog
- ✅ **Search Contacts** - Real-time search functionality by name
- ✅ **Contact Details** - View detailed information for each contact
- ✅ **Form Validation** - Formik + Yup validation (min 3 characters for name, lowercase email)
- ✅ **Error Handling** - ErrorBoundary component for graceful error management
- ✅ **Custom Hooks** - Reusable logic with custom React hooks
- ✅ **Responsive Design** - Semantic UI styling

## 🛠️ Tech Stack

- **Frontend:** React.js (Functional Components + Hooks)
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Backend/API:** JSON Server (Mock REST API)
- **Form Management:** Formik
- **Validation:** Yup
- **Styling:** Semantic UI React
- **State Management:** React Hooks (useState, useEffect, useLocation)

## 📁 Project Structure

```
contact-app/
├── src/
│   ├── components/
│   │   ├── ContactCard.jsx       # Individual contact card component
│   │   ├── ErrorBoundary.jsx     # Error boundary wrapper
│   │   └── Header.jsx            # App header component
│   ├── pages/
│   │   ├── AddContact.jsx        # Add new contact page
│   │   ├── ContactLists.jsx      # Contact list page with search
│   │   ├── EditContact.jsx       # Edit contact page
│   │   └── contactDetails.jsx    # Contact details page
│   ├── hooks/
│   │   ├── useContactHandler.js  # Custom hook for contact operations
│   │   └── useCounter.js         # Custom counter hook (demo)
│   ├── api/
│   │   └── contacts.js           # Axios API configuration
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # App entry point
├── server-api/
│   └── db.json                   # JSON Server database
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Viswajith2003/Contact-Mangement-System.git
   cd contact-management-system
   ```

2. **Install dependencies**
   ```bash
   cd contact-app
   npm install
   ```

3. **Install JSON Server globally (if not already installed)**
   ```bash
   npm install -g json-server
   ```

### Running the Application

1. **Start the JSON Server (Backend API)**
   ```bash
   cd server-api
   json-server --watch db.json --port 3006
   ```
   Backend will run on `http://localhost:3006`

2. **Start the React App (Frontend)** *(in a new terminal)*
   ```bash
   cd contact-app
   npm run dev
   ```
   Frontend will run on `http://localhost:5173` (or the port shown in terminal)

3. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/contacts` | Get all contacts |
| GET | `/contacts/:id` | Get single contact |
| POST | `/contacts` | Create new contact |
| PUT | `/contacts/:id` | Update contact |
| DELETE | `/contacts/:id` | Delete contact |

## 🎯 Usage

### Adding a Contact
1. Click "Add Contact" button
2. Enter name (minimum 3 characters)
3. Enter email (lowercase only)
4. Click "Add"

### Editing a Contact
1. Click the edit icon on any contact card
2. Modify the details
3. Click "Update"

### Deleting a Contact
1. Click the trash icon
2. Confirm deletion in the dialog

### Searching Contacts
- Type in the search bar to filter contacts by name in real-time

## 🔧 Custom Hooks

### `useContactHandler`
Manages all contact operations:
- Fetching contacts from API
- Adding new contacts
- Updating contacts
- Deleting contacts
- Search functionality

### `useCounter` (Demo)
Simple counter hook demonstrating custom hook creation

## ✅ Form Validation Rules

- **Name:** 
  - Required field
  - Minimum 3 characters
  
- **Email:**
  - Required field
  - Valid email format
  - Must be lowercase (no capital letters)

## 🐛 Error Handling

- **ErrorBoundary:** Catches runtime errors and displays fallback UI
- **API Error Handling:** Try-catch blocks for all async operations
- **Form Validation:** Real-time validation with error messages
- **Delete Confirmation:** Prevents accidental deletions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


