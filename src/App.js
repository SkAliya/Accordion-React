import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  //const [queInd, setQueInd] = useState(null);
  const [onClick,setOnClick] = useState(null);
  // function handleQueId(id) {
  //   setQueInd(id);
  // }
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <Accordion
          faq={faq}
          number={i + 1}
          onClick={setOnClick}
          queInd={queInd}
          key={faq.title}
        />
      ))}
    </div>
  );
}

function Accordion({ faq, number, setOnClick, onClick }) {
  let isOpen = number === onClick;
  // const [que, setQue] = useState(false);
  return (
    // <div className={`item ${que ? "open" : ""}`} onClick={() => setQue(!que)}>
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onClick(isOpen? null :number)}
    >
      <span className="number">{number < 10 ? "0" + number : number}</span>
      <span className="title">{faq.title}</span>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && (
        <div className="content-box">
          <ul>{faq.text}</ul>
        </div>
      )}
    </div>
  );
}
