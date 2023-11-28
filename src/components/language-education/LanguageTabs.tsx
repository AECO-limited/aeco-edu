import React, { useState } from 'react'
import { languages } from './_data'



const LanguageTabs = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

    return (
        <div className=''>
            <section className="p-2 flex gap-3 mb-5">
                {
                    languages.map((lang, index) => {
                        return (<button key={index} onClick={() => setSelectedLanguage(lang)} className={`border rounded-full shadow p-2 px-5 ${selectedLanguage.language == lang.language ? "bg-[var(--secondary-500)] text-white" : "bg-white text-black"} `}>{lang.language}</button>)
                    })
                }
            </section>
            <section className="p-4 pt-0 flex gap-4">
                {
                    selectedLanguage.certifications.map((certification, index) => {
                        return (<button key={index} className={"border rounded shadow p-2 px-5 h-20 border-gray-50 bg-orange-50 font-semibold"}>{certification}</button>)
                    })
                }
            </section>
        </div>
    )
}

export default LanguageTabs