import React, { useContext } from 'react'
import { UserLanguageContext } from '../utils/UserLanguageContext'
import message from '../utils/i18Messages';

export default function GPTSearchBar() {
  const language = useContext(UserLanguageContext);
  console.log(language.language)
  const langKey = language.language;
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()} >
            <input className='p-4 m-4 col-span-9' type="text" placeholder={message[langKey].gptSearchPlaceholder} />
            <button className=' col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' type="submit">{message[langKey].search}</button>
        </form>
    </div>
  )
}
