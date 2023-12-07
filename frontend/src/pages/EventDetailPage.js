import { json, redirect, useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  
  const data = useRouteLoaderData('event-details'); // useRouteLoaderData() takes the id as a argument
  return (
    <>
      <EventItem  event= {data.event}/>
    </>
  );
};

export default EventDetailPage;

export const eventDetailsLoader = async ({request, params}) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/`+ id)
  if (!response.ok) {
    throw json({message: "Couldn't fetch the event details!"}, {status: 500});
  } else {
    return response;
  }
}

export const eventDeleteLoader = async ({request, params}) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/`+ id, {
    method: request.method,
  })
  if (!response.ok) {
    throw json({message: "Couldn't delete the event!"}, {status: 500});
  } else {
    return redirect('/events');
  }
}