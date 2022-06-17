import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const TableRow = ({ need }) => {
  const dateTime = new Date(need?.timestamp);
  dateTime.toISOString(); // Returns "2013-05-31T11:54:44.000Z"
  return (
    <Dialog.Root>
      <tr className="w-full bg-gray-100 transition hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600">
        <td className="whitespace-nowrap py-4 px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          {dateTime?.toISOString().split("T")[0]}
        </td>
        <td className="max-w-10 w-2 overflow-hidden text-ellipsis whitespace-nowrap py-4  px-6 text-center text-sm font-medium text-gray-500 dark:text-white">
          {need.location.latitude}
        </td>
        <td className="whitespace-nowrap py-4 px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          {need.location.longitude}
        </td>
        <td className="whitespace-nowrap py-4 px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          {need.contact.email}
        </td>
        <td className="whitespace-nowrap py-4 px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          {need.resolve}
        </td>
        <td className="whitespace-nowrap py-4 px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          <Dialog.Trigger>open</Dialog.Trigger>
        </td>
      </tr>
      <Dialog.Portal>
        <Dialog.Overlay
          className={
            "fixed top-0 left-0 h-screen w-full bg-gray-700 bg-opacity-80"
          }
        />
        <Dialog.Content
          className={
            "fixed top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform bg-gray-700"
          }
        >
          <pre>{JSON.stringify(need)}</pre>
          <h1 className={"text-2xl"}>{need.message}</h1>
          <p>{need.location.latitude}</p>
          <p>{need.location.longitude}</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default TableRow;
