import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import NeedDialog from "../NeedDialog";

const TableRow = ({ need, getNeedRecord }) => {
  const dateTime = new Date(need?.timestamp);
  dateTime.toISOString(); // Returns "2013-05-31T11:54:44.000Z"
  return (
    <Dialog.Root>
      <tr className="w-full bg-gray-100 transition hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600">
        <td className="whitespace-nowrap py-4 px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          {dateTime?.toISOString().split("T")[0]}
        </td>
        <td className="truncate py-4  px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          {need.location.latitude}
        </td>
        <td className="truncate py-4 px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          {need.location.longitude}
        </td>
        <td className="truncate py-4 px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          {need.contact.email}
        </td>
        <td className="truncate py-4 px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          {need.resolve}
        </td>
        <td className="truncate py-4 px-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          <Dialog.Trigger>open</Dialog.Trigger>
        </td>
      </tr>
      <NeedDialog need={need} getNeedRecord={getNeedRecord} />
    </Dialog.Root>
  );
};

export default TableRow;
