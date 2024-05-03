import style from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ data, onDelete }) => {
  return (
    <div className={style.contactBox}>
      <div className={style.container}>
        <p className={style.contactField}>
          <BsFillPersonFill size={20} className={style.icon} />
          {data.name}
        </p>
        <p className={style.contactField}>
          <BsFillTelephoneFill className={style.icon} />
          {data.number}
        </p>
      </div>
      <button onClick={onDelete} className={style.contactBtn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
