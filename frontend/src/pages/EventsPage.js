import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "Programming for everyone" },
  { id: "e2", title: "Networking for introverts" },
  { id: "e3", title: "Networking for extroverts" },
  { id: "e4", title: "Networking for everyone" },
  { id: "e5", title: "Networking for no one" },
  { id: "e6", title: "Networking for someone" },
  { id: "e7", title: "Networking for anyone" },
];

const EventDetailPage = () => {
  return (
    <div>
      <h1>This is EventsPage</h1>
        <ul>
            {DUMMY_EVENTS.map((event) => (
                <li key={event.id}>
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  );
};
export default EventDetailPage;
