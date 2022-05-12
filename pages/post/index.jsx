import React from 'react'

import Meta from '../../components/Meta'
import { LocationContext } from '../../hooks/useLocation'

const Post = () => {
  const [sending, setSending] = React.useState(false)
  const [responseText, setResponseText] = React.useState('')
  const { position } = React.useContext(LocationContext)
  const nameRef = React.useRef()
  const emailRef = React.useRef()
  const messageRef = React.useRef()

  const postNeed = () => {

  }
  return (
      <>
        <Meta title={'求救 | 救難の鏈'} description={'可以求救'} />
        <div className={'w-full h-screen flex justify-center md:flex-row flex-col items-center'}>
          <form className="form w-11/12 sm:w-[32rem] rounded-lg bg-white dark:bg-gray-700 p-4 flex flex-col shadow-xl">
            <h1 className={'text-center'}>
              {/* {position.lng.toFixed(3)}, {position.lat.toFixed(3)} */}
            </h1>
            <label htmlFor="name" className="text-sm text-gray-600 dark:text-gray-50 mx-4">
              Your Name
            </label>
            <input
                ref={nameRef}
                type="text"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                name="name"
                placeholder={'David'}
                required
                disabled={sending}
            />
            <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-50 mx-4 mt-4">
              Email
            </label>
            <input
                ref={emailRef}
                type="email"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                name="email"
                placeholder={'hi@example.com'}
                required
                disabled={sending}
            />
            <label
                htmlFor="message"
                className="text-sm text-gray-600 dark:text-gray-50 mx-4 mt-4"
            >
              Message
            </label>
            <textarea
                ref={messageRef}
                rows={5}
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500 resize-none"
                name={'message'}
                placeholder={'Type in some message!'}
                required
                disabled={sending}
            />
            <button
                onClick={postNeed}
                type="submit"
                className="bg-blue-500 disabled:bg-blue-300 rounded-md w-full mt-4 py-2 text-gray-50 text-sm font-bold flex justify-center"
                disabled={sending}
            >
              {
                sending
                  ? <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                           fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                    </>
                  : 'Post'
              }
            </button>
            <p className={'text-center mt-4'}>{responseText}</p>
          </form>
        </div>
      </>
  )
}

export default Post
