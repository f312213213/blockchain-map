import React from 'react'

const TableRow = () => {
  const date = new Date()
  return (
      <tr className="hover:bg-gray-300 dark:hover:bg-gray-600 transition">
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          {date.toISOString().split('T')[0]}
        </td>
        <td className="py-4 w-2 px-6 text-sm font-medium text-gray-500  dark:text-white text-center max-w-10 overflow-hidden whitespace-nowrap text-ellipsis">
          123
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          123
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          123
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          123
        </td>
      </tr>
  )
}

export default TableRow
