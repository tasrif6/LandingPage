import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    // <div className="flex display-auto">
      // <HomePage/>
    <div className="h-screen grid grid-cols-[260px_1fr_300px] bg-[#f6f7f5]">
      
      {/* LEFT SIDEBAR */}
      <aside className="bg-white border-r p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-black">Search By Category</h2>

        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded-md mb-6 bg-emerald-400"
        />

        <ul className="space-y-3 text-sm">
          <li className="text-gray-600">Dua Before Going to Sleep</li>
          <li className="text-gray-600">Dua Before Going to Bed</li>
          <li className="text-green-700 font-medium">
            3 Qul for Protection
          </li>
          <li className="text-gray-600">Surah to Recite Before Sleep</li>
          <li className="text-gray-600">Dua for Sleeping</li>
        </ul>
      </aside>

      {/* CENTER CONTENT */}
      <main className="p-8 overflow-y-auto">
        <h1 className="text-2xl font-semibold text-green-800 mb-4">
          120.3 Qul for Protection
        </h1>

        <p className="mb-4 text-gray-700">
          Sura Ikhlas three times:
        </p>

        <div className="text-2xl text-right leading-loose font-arabic mb-6">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ...
        </div>

        <p className="italic text-gray-600 mb-6">
          Bismillahir-Rahmaanir-Raheem...
        </p>

        <h3 className="text-lg font-semibold text-green-700 mb-2">
          Translation
        </h3>

        <p className="text-gray-700">
          Say, "He is Allah, [who is] One. Allah, the Eternal Refuge..."
        </p>

        <hr className="my-8" />

        <h2 className="text-xl font-semibold">
          Sura Falaq three times:
        </h2>
      </main>

      {/* RIGHT SETTINGS PANEL */}
      <aside className="bg-white border-l p-6 overflow-y-auto">
        <h2 className="font-semibold text-lg mb-6">Settings</h2>

        <div className="space-y-6">
          <div>
            <p className="font-medium mb-2">Language Settings</p>
            <select className="w-full border p-2 rounded-md">
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>

          <div className="flex mx-auto text-black">
            <div className="font-medium mb-4">Appearance
            <div className="flex gap-3">
              <button className="px-4 py-2 border rounded-md">
                Light
              </button>
              <button className="px-4 py-2 border rounded-md">
                Dark
              </button>
            </div></div>
          </div>
        </div>
      </aside>


    </div>
  );
}
