import React from 'react'

import Meta from '../../components/Meta'
import TableRow from '../../components/TableRow'

const Read = () => {
  const [needList, setNeedList] = React.useState(null)
  return (
      <>
        <Meta title={'看鏈 | 救難の鏈'} description={'可以看有沒有人要被救'} />
        <div className={'w-full h-screen flex justify-center items-center'}>
          <div className="flex flex-col md:w-11/12 w-full px-2 md:px-0 shadow-md">
            <table className="divide-y divide-gray-200 table-fixed dark:divide-gray-700 w-full h-full rounded-xl overflow-hidden">
              <thead className="bg-gray-300 dark:bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                  Created time
                </th>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                  lat
                </th>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                  lng
                </th>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                  email
                </th>
                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                  resolve
                </th>
              </tr>
              </thead>
              <tbody className="bg-gray-100 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
              </tbody>
            </table>
          </div>
        </div>
      </>
  )
}

export default Read
