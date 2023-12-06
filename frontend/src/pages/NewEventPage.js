import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
const NewEventPage = () => {
  return <EventForm />;
};  
export default NewEventPage;

export const submitNewEvent = async ({request, params}) => {
  const data = await request.formData();

  const formData = Object.fromEntries(data); // convert FormData to regular JS object

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  })
  if (!response.ok) {
    throw json({message: "Couldn't create the event!"}, {status: 500});
  } else {
    return redirect('/events');
  }
  
};