import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData('event-details'); // useRouteLoaderData() takes the id as a argument
  const event = data.event;
  return <EventForm event={event} method= 'PATCH'/>;
};
export default EditEventPage;