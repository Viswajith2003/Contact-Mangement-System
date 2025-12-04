import AddContact from "./pages/AddContact";
import Header from "./components/Header";
import ContactLists from "./pages/ContactLists";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetail from "./pages/contactDetails";
import EditContact from "./pages/EditContact";
import ErrorBoundary from "./components/ErrorBoundary";
import useContactHandler from "./hooks/useContactHandler";
import React from "react";

function App() {
  const {
    searchHandler,
    removeContactHandler,
    updateContactHandler,
    addContactHandler,
    searchTerm,
    searchResult,
    contacts,
  } = useContactHandler();

  return (
    <div>
      <Router>
        <Header name="Contact Manager" />
        <ErrorBoundary>
          <Routes>
            <Route
              path="/"
              element={
                <ContactLists
                  contacts={searchTerm.length < 1 ? contacts : searchResult}
                  getContactId={removeContactHandler}
                  term={searchTerm}
                  searchKeyword={searchHandler}
                />
              }
            />
            <Route
              path="/add"
              element={<AddContact addContactHandler={addContactHandler} />}
            />
            <Route
              path="/edit"
              element={
                <EditContact updateContactHandler={updateContactHandler} />
              }
            />
            <Route path="/contact-details/:id" element={<ContactDetail />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
