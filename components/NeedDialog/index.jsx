import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const NeedDialog = ({ need, getNeedRecord }) => {
  const resolveProblem = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BASE_API_URL + "/post_problem_resolve",
      {
        method: "POST",
        body: JSON.stringify({
          id: need.id,
          resolve: true,
        }),
      }
    );
    getNeedRecord();
  };
  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className={
          "fixed top-0 left-0 h-screen w-full  bg-gray-500 bg-opacity-80"
        }
      />
      <Dialog.Content
        className={
          "fixed top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform bg-gray-300 p-4 dark:bg-gray-700"
        }
      >
        <h1 className={"text-2xl"}>{need.message}</h1>
        <section>
          <h2>Location</h2>
          <p>{need.location.latitude}</p>
          <p>{need.location.longitude}</p>
        </section>
        <section>
          <h2>contact</h2>
          <p>{need.contact.mobile}</p>
          <p>{need.contact.email}</p>
        </section>
        <section>
          <h2>Message</h2>
          <p>{need.message}</p>
        </section>
        <button
          disabled={JSON.parse(need.resolve)}
          onClick={resolveProblem}
          className={
            "w-full rounded-xl bg-blue-500 py-2 px-4 text-gray-50 disabled:cursor-not-allowed disabled:bg-gray-400"
          }
        >
          {JSON.parse(need.resolve) ? "Resolved" : "Resolve"}
        </button>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default NeedDialog;
