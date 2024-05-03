import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={style.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={style.item}>
          <Contact
            data={contact}
            onDelete={() => {
              onDelete(contact.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
