// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// Done with this step? Continue below!
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// Done with this step? Continue below!
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// Done with this step? Continue below!
// 4. Add properly working links to the MainNavigation
// Done with this step? Continue below!
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// Done with this step? Continue below!
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// Done with this step? Continue below!
// 7. Output the ID of the selected event on the EventDetailPage
// Done with this step? Continue below!
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import EventDetailPage, { eventDeleteLoader, eventDetailsLoader } from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import { submitEvent } from "./components/EventForm";
import EventRoot from "./pages/EventRoot";
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import AuthenticationPage, { AuthAction } from './pages/Authentication';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id : "event-details",
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDeleteLoader
              },
              { path: "edit", element: <EditEventPage />, action: submitEvent },
            ],
          },
          { path: "new", element: <NewEventPage />, action: submitEvent },
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: AuthAction,
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
