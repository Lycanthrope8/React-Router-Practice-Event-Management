import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const data = useLoaderData();
  const events = data.events;
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventDetailPage;



    // This code executes on the browser not in the server
    // It means you can use any browser api
    // like fetch, localstorage, etc.
    // But you can't use React hooks like useState, useEffect, etc.
export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/eventss"); 
  if (!response.ok) {
    // return {isError: true, message: "Couldn't fetch the events!"};
    throw new Response(JSON.stringify({message: "Couldn't fetch the events!"}), {status: 500});
  } else {
    return response; // React by default sent json data
  }
};
