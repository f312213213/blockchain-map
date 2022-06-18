import React from "react";

import Meta from "../../components/Meta";
import TableRow from "../../components/TableRow";

const Read = () => {
  const [needList, setNeedList] = React.useState([]);

  const getNeedRecord = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BASE_API_URL + "/get_issue_form_backend"
    );
    const data = await res.json();
    console.log(data);
    setNeedList(data);
  };

  React.useEffect(() => {
    getNeedRecord();
  }, []);

  return (
    <>
      <Meta title={"看鏈 | 救難の鏈"} description={"可以看有沒有人要被救"} />
      <div className={"flex h-screen w-full items-center justify-center"}>
        <div className="flex w-full flex-col px-2 shadow-md md:w-11/12 md:px-0">
          <table className="h-full w-full table-fixed divide-y divide-gray-200 overflow-hidden rounded-xl dark:divide-gray-700">
            <thead className="bg-gray-300 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-left text-center text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                >
                  Created time
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-left text-center text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                >
                  lat
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-left text-center text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                >
                  lng
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-left text-center text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                >
                  email
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-left text-center text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                >
                  resolve
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-left text-center text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                >
                  look
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200  dark:divide-gray-700 ">
              {needList.map((need) => (
                <TableRow
                  key={need.id}
                  need={need}
                  getNeedRecord={getNeedRecord}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
