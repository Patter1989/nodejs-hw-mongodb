// nodejs-hw-mongodb/src/services/contacts.js
import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactByID = async (contactID) => {
  const contact = await ContactsCollection.findById(contactID);
  return contact;
};
