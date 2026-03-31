import { useState } from 'react';
import Link from 'next/link';
import { CategoryLinks, DuasImportanceLinks } from '@/constant/Category';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { DuasSubCat01 } from '@/constant/Duas';
import { ChevronDown } from 'lucide-react';

const CategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

  // Map categories to their subcategories
  const getSubCategoryLinks = (category: string) => {
    if (category === "Dua's Importance") {
      return DuasImportanceLinks;
    }
    return [];
  };

  // Get duas for a specific subcategory
  const getDuasForSubCategory = (subCategoryId: number) => {
    if (subCategoryId === 1) {
      return DuasSubCat01;
    }
    return [];
  };

  const subCategories = activeCategory ? getSubCategoryLinks(activeCategory) : [];
  const duas = activeSubCategory ? getDuasForSubCategory(parseInt(activeSubCategory)) : [];

  return (
    <div className="w-90 fixed flex h-screen bg-white dark:bg-black px-12 ml-10">
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="🔍 Search..."
          className="mx-auto mb-6 border-gray-900 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:placeholder-gray-400"
        />

        {/* Categories */}
        <div className="space-y-2">
          {CategoryLinks.map((catlink) => {
            const isActive = activeCategory === catlink.title;
            const hasSubCategories = getSubCategoryLinks(catlink.title).length > 0;

            return (
              <div key={catlink.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-auto">
                {/* Category Button */}
                <button
                  onClick={() => {
                    setActiveCategory((prev) => (prev === catlink.title ? null : catlink.title));
                  }}
                  className="w-full text-left p-4 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <Image src={catlink.image} alt="Category Images" height={24} width={24} />
                  <span className={`flex-1 font-semibold ${isActive ? "text-emerald-600" : "text-gray-900 dark:text-white"}`}>
                    {catlink.title}
                  </span>
                  {hasSubCategories && (
                    <ChevronDown
                      className={`transition-transform ${isActive ? "rotate-180" : ""}`}
                      size={20}
                    />
                  )}
                </button>

                {/* SubCategories - Expand when category is active */}
                {isActive && subCategories.length > 0 && (
                  <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 space-y-2 p-4">
                    {subCategories.map((sub) => {
                      const isSubActive = activeSubCategory === String(sub.id);
                      return (
                        <div key={sub.id}>
                          {/* SubCategory Button */}
                          <button
                            onClick={() =>
                              setActiveSubCategory((prev) => (prev === String(sub.id) ? null : String(sub.id)))
                            }
                            className={`w-full text-left p-3 rounded transition text-sm font-medium flex items-start gap-2 ${
                              isSubActive
                                ? "text-black dark:text-emerald-700 cursor-pointer"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
                            }`}
                          >
                            <ChevronDown
                              className={`mt-0.5 transition-transform ${isSubActive ? "rotate-180" : ""}`}
                              size={16}
                            />
                            <span>{sub.title}</span>
                          </button>

                          {/* Duas - Expand when subcategory is active */}
                          {isSubActive && duas.length > 0 && (
                            <div className="mt-2 ml-6 space-y-2">
                              {duas.map((dua) => (
                                <Link
                                  key={dua.id}
                                  href={dua.url}
                                  className="block p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-gray-800 transition bg-white dark:bg-gray-800"
                                >
                                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                                    {dua.title}
                                  </h4>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;