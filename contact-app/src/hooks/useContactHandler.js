import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const LOCAL_STORAGE_KEY = "contacts";
import api from "../api/contacts";

function useContactHandler() {
  // const [contacts, setContacts] = useState(() => {
  //   const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   if (storedContacts) return JSON.parse(storedContacts);
  //   return [];
  // });

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const retriveContacts = async () => {
    const res = await api.get("/contacts");

    // throw new Error("Api failed");
    return res.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allcontacts = await retriveContacts();
      if (allcontacts) setContacts(allcontacts);
    };
    getAllContacts();
  }, []);

  const addContactHandler = async (contact) => {
    const req = {
      id: uuidv4(),
      ...contact,
    };

    const res = await api.post("/contacts", req);
    console.log(res);
    setContacts([...contacts, res.data]);

    // setContacts((prevContacts) => [
    //   ...prevContacts,
    //   { id: uuidv4(), ...contact }, //Universally unq identifier  (generate random or unq id string ,used to create uniq id for each contacts)
    // ]);
  };
  const updateContactHandler = async (contact) => {
    try {
      const response = await api.put(`/contacts/${contact.id}`, contact);
      const { id, name, email } = response.data;
      // Update the contacts state with the edited contact
      setContacts(
        contacts.map((item) =>
          item.id === contact.id ? { ...response.data } : item
        )
      );
    } catch (error) {
      console.error("Error updating contact:", error);
      alert("Failed to update contact");
    }
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) => {
    // console.log(searchTerm);
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        // search is already working based on all fields  (name, email, id).
        // return Object.values(contact)
        //   .join(" ")
        //   .toLowerCase()
        //   .includes(searchTerm.toLowerCase());

        //search is based on name only
        // console.log(contact.name);
        return (
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };

  // useEffect(() => {
  //   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return {
    searchHandler,
    removeContactHandler,
    updateContactHandler,
    addContactHandler,
    retriveContacts,
    searchTerm,
    searchResult,
    contacts
  };
}

export default useContactHandler;
