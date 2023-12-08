import { Form, useNavigate } from "react-router-dom";
import { json, redirect } from "react-router-dom";
import classes from "./EventForm.module.css";
import { getAuthTokens } from "../util/auth";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

export const submitEvent = async ({ request, params }) => {
  const data = await request.formData();
  const method = request.method;
  const formData = Object.fromEntries(data); // convert FormData to regular JS object

  const url =
    method === "POST"
      ? "http://localhost:8080/events"
      : `http://localhost:8080/events/${params.eventId}`; // if method is POST, create a new event, otherwise update the existing event (PATCH
  const token = getAuthTokens();
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token, // add the token to the request header
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw json({ message: "Couldn't create the event!" }, { status: 500 });
  } else {
    return redirect("/events");
  }
};
