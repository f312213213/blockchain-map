import React from 'react'
import { useTheme } from 'next-themes'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])
  return (
      <button
          className={'fixed hidden sm:block rounded-full p-4 bottom-4 right-4 text-2xl text-yellow-400 dark:bg-gray-50 bg-black'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {
          mounted &&
            <>
              {
                theme === 'dark'
                  ? <BsFillSunFill />
                  : <BsFillMoonFill/>
              }
            </>
        }

      </button>
  )
}

export default React.memo(ToggleDarkMode)
