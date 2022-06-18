import React from "react";

import Meta from "../../components/Meta";
import { LocationContext } from "../../context/useLocation";
import { SnackbarContext } from "../../context/useSnackbar";

const Post = () => {
  const [sending, setSending] = React.useState(false);
  const [responseText, setResponseText] = React.useState("");
  const { position } = React.useContext(LocationContext);
  const { openSnackbar } = React.useContext(SnackbarContext);
  const mobileRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();

  const postNeed = async (e) => {
    e.preventDefault();
    const res = await fetch(
      process.env.NEXT_PUBLIC_BASE_API_URL + "/post_issue",
      {
        method: "POST",
        body: JSON.stringify({
          timestamp: Date.now(),
          contact: {
            mobile: mobileRef.current.value,
            email: emailRef.current.value,
          },
          category: 0,
          location: {
            latitude: position.lat,
            longitude: position.lng,
            other: "",
          },
          message: messageRef.current.value,
        }),
      }
    );
    messageRef.current.value = "";
    emailRef.current.value = "";
    mobileRef.current.value = "";
    openSnackbar("success", "求救訊息發出成功！");
  };
  return (
    <>
      <Meta title={"求救 | 救難の鏈"} description={"可以求救"} />
      <div
        className={
          "flex h-screen w-full flex-col items-center justify-center md:flex-row"
        }
      >
        <form className="form flex w-11/12 flex-col rounded-lg bg-white p-4 shadow-xl dark:bg-gray-700 sm:w-[32rem]">
          <h1 className={"text-center"}>
            {position.lng.toFixed(3)}, {position.lat.toFixed(3)}
          </h1>
          <label
            htmlFor="mobile"
            className="mx-4 text-sm text-gray-600 dark:text-gray-50"
          >
            Your Mobile
          </label>
          <input
            ref={mobileRef}
            type={"tel"}
            className="mx-4 mt-2 rounded-md border py-2 px-2 font-light ring-blue-500 focus:border-none focus:outline-none focus:ring-2"
            name="mobile"
            placeholder={"+886123456789"}
            required
            disabled={sending}
          />
          <label
            htmlFor="email"
            className="mx-4 mt-4 text-sm text-gray-600 dark:text-gray-50"
          >
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            className="mx-4 mt-2 rounded-md border py-2 px-2 font-light ring-blue-500 focus:border-none focus:outline-none focus:ring-2"
            name="email"
            placeholder={"hi@example.com"}
            required
            disabled={sending}
          />
          <label
            htmlFor="message"
            className="mx-4 mt-4 text-sm text-gray-600 dark:text-gray-50"
          >
            Message
          </label>
          <textarea
            ref={messageRef}
            rows={5}
            className="mx-4 mt-2 resize-none rounded-md border py-2 px-2 font-light ring-blue-500 focus:border-none focus:outline-none focus:ring-2"
            name={"message"}
            placeholder={"Type in some message! e.g. I need some water!"}
            required
            disabled={sending}
          />
          <button
            onClick={postNeed}
            type="submit"
            className="mt-4 flex w-full justify-center rounded-md bg-blue-500 py-2 text-sm font-bold text-gray-50 disabled:bg-blue-300"
            disabled={sending}
          >
            {sending ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </>
            ) : (
              "Post"
            )}
          </button>
          <p className={"mt-4 text-center"}>{responseText}</p>
        </form>
      </div>
    </>
  );
};

export default Post;
