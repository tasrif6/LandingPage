'use client';
import { CategoryLinks } from '@/constant/Category';
import { useEffect, useState } from 'react';
import SectionNavbarPage from '@/components/DuasNavbar/SectionNavbarPage';

const DuasContent = {
  1: {
    id: 1,
    title: "We are in need of Allah's Help (Surah Al-Fatir)",
    reference: 'Surah Al-Fatir 35:15',
    description:
      'All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.',
  },
  2: {
    id: 2,
    title: 'The most important thing to ask Allah for',
    reference: 'Bukhari: 844',
    description:
      'Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah.',
    dua: 'Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa alaa kulli shain.',
    translation:
      'There is none worthy of worship except Allah alone. He is the Dominion and to Him be all praise, and He is able to do all things.',
  },
  3: {
    id: 3,
    title: 'Power of La Ilaha Illallah (Freeing of slave)',
    reference: 'Bukhari: 6404',
    description: 'Say the following statement 10 times: there is no god but Allah.',
    dua: 'Laa ilahaa illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa alaa kulli shain',
    translation:
      'None has the right to be worshipped but Allah alone. His is the dominion and His is the praise, and He is Able to do all things.',
    note: 'The Prophet said: The person who says this 10 times would have freed four people from slavery.',
  },
};

const Duas = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, []);
  const [activeCategory, setActiveCategory ] = useState<string | null>(null)
  const [activeSubCategory, setActiveSubCategory ] = useState<string | null> (null);
  
  const handleClick = (id: number) => {
    const match = CategoryLinks.find((category) => category.id === id);
    setActiveSubCategory(match ? match.title : null);
  }
  return (
    <div className="min-h-screen bg-white dark:bg-black p-4 flex ml-12 overflow-hidden">
      <div className="w-3xl flex flex-col">
        <div className="space-y-4 flex-1 ml-12">
          {Object.entries(DuasContent).map(([sectionId, content]: any) => {
            const isActive = activeSection === sectionId;
            return (
              <div
                key={sectionId}
                id={sectionId}
                className=" rounded-2xl overflow-hidden transition-all"
              >
                <div className="w-full p-4 flex items-start justify-between transition bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                  <div className="text-left">
                    <h1 className="flex"><SectionNavbarPage /></h1>
                    <h2 className="font-semibold text-lg mb-1 text-emerald-700">Section- {sectionId}: {content.title}</h2>
                    
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-950 space-y-4">
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                      Overview
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-2xl">
                      {content.description}
                    </p>
                  </div>

                  {content.dua && (
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg ">
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        Dua
                      </h3>
                      <p className="dark:text-white text-black text-2xl leading-relaxed italic">
                        {content.dua}
                      </p>
                      <p className={`text-medium ${isActive ? 'text-emerald-100' : 'text-gray-500'}`}>
                      {content.reference}
                    </p>
                    </div>
                  )}

                  {content.translation && (
                    <div className=" dark:bg-black bg-white p-4 rounded-2xl ">
                      <h3 className="text-3xl font-semibold dark:text-white text-black mb-2">
                        Translation
                      </h3>
                      <p className=" text-2xl dark:text-white text-black">
                        {content.translation}
                      </p>
                    </div>
                  )}

                  {content.note && (
                    <div className="dark:bg-black bg-white p-4 rounded-2xl">
                      <p className="dark:text-white text-black">
                        <span className="font-semibold">Note:</span> {content.note}
                      </p>
                      
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Duas;