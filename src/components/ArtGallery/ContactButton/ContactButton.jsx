import { useState } from "react";

import IconChat from "../../../public/icons/icon-chat.svg";
import Telegram from "../../../public/Images/telegram.png";
import Viber from "../../../public/Images/viber.png";
import Whatsapp from "../../../public/Images/whatsapp.png";
import "./contactButton.css";

export function ContactButton() {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <div className={`buttonSticky ${active ? "active" : ""}`}>
      <button
        className="buttonStickyChat"
        onClick={() => setActive((prev) => !prev)}
      >
        <img src={IconChat} alt="chat" width={32} height={32} />
      </button>

      <div className="contactWidgetButtons">
        <a
          href="https://t.me/+38672455518"
          id="contactWidgetTelegram"
          title="Telegram"
          target="_blank"
          aria-label="To telegram"
        >
          <img
            src={Telegram}
            alt="telegram"
            loading="lazy"
            width={23}
            height={23}
          />
        </a>
        <a
          href="#"
          id="contactWidgetViber"
          title="Viber"
          target="_blank"
          aria-label="To viber"
        >
          <img src={Viber} alt="viber" loading="lazy" width={23} height={23} />
        </a>
        <a
          href="#"
          id="contactWidgetWhatsapp"
          title="WhatsApp"
          target="_blank"
          aria-label="To whatsapp"
        >
          <img
            src={Whatsapp}
            alt="whatsapp"
            loading="lazy"
            width={23}
            height={23}
          />
        </a>
      </div>
    </div>
  );
}
