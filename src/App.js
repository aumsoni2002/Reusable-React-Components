import Accordion from "./components/Accordion";
function App() {
  const items = [
    {
      id: 1,
      label: "Will I ever get a Job?",
      content: "Yes, You will definitely get a job, keep working hard.",
    },
    {
      id: 2,
      label: "Will I get a Co-op in Summer 2025?",
      content:
        "Yes, only if you keep practicing DSA and create complex projects",
    },
    {
      id: 3,
      label: "Will I be able to pass an Interview?",
      content:
        "Yes, you have passed many interviews in the past. Only one more to go.",
    },
    {
      id: 4,
      label: "Will I ever make my parents proud?",
      content: "You already have.",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
