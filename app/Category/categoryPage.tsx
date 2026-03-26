import { useState } from 'react';
import Link from 'next/link';
import { CategoryLinks, DuasImportanceLinks } from '@/constant/Category';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Duas from './DuasImpDuas/page';

const CategoryPage = () => {
  const [activeSubCate, setActiveSubCate] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const getSubItems = (category: string) => {
    if (category === "Dua's Importance") {
      return (
        <ul className="mt-2 ml-4 space-y-2">
          {DuasImportanceLinks.map((sub) => (
            <li key={sub.id} className="text-gray-400">
              <Link href={`/Category/DuasImp/DuasImpDuas#${sub.anchor}`} className="hover:text-blue-500">
                {sub.title}
              </Link>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="w-60 flex h-screen ml-20">
      {/* Category Column - Left */}
      <div className=" border-r border-gray-300 h-screen overflow-y-auto bg-white dark:bg-black">
        <div className="flex flex-col px-2 py-2 font-medium text-medium">
          <Input
            type="text"
            placeholder="🔍 Search..."
            className="m-auto mb-6 border-rounded border-gray-900 bg-white dark:bg-black dark:text-white dark:border-gray-700 dark:placeholder-gray-400"
          />
          {CategoryLinks.map((catlink) => {
            const isActive = activeCategory === catlink.title;
            return (
              <div key={catlink.id}>
                <button
                  type="button"
                  onClick={() => setActiveCategory((prev) => (prev === catlink.title ? null : catlink.title))}
                  className="w-full text-left cursor-pointer p-1 flex items-center gap-2"
                >
                  <Image src={catlink.image} alt="Category Images" height={30} width={30} />
                  <span className={`${isActive ? "text-emerald-600": ""}`}>{catlink.title}</span>
                </button>
                {isActive && getSubItems(catlink.title)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Duas Column - Middle (Wider) */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
        <button onClick={() => setActiveSubCate(!activeSubCate)}>
          {activeSubCate && <Duas/>}</button>
        
      </div>

      {/* no right panel here; top-level page handles it */}
    </div>
  );
};

export default CategoryPage;