import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login"; // true or false depending on the URL query parameter mode
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map(
              (
                error // this is the error message that will be displayed if the user enters an invalid email or password
              ) => (
                <li key={error}>{error}</li>
              )
            )}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}{" "}
        {/* this is the message that will be displayed after the user logs in or signs up */}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {" "}
            {/* this is the link to switch between login and signup */}
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
