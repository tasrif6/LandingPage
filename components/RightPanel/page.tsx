"use client";

import {
  AlignStartVertical,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CopyCheck,
  Globe,
  Type,
} from "lucide-react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useState } from "react";
import { ThemeToggle } from "@/app/theme-toggle";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RightPanel() {

  // ACCORDION STATE
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  // Toggle states
  const [showArabic, setShowArabic] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [showReference, setShowReference] = useState(true);

  // Language panel
  const [showLangPanel, setShowLangPanel] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const language = [{ name: "English" }, { name: "Bangla" }];

  // Font panel
  const [showFontPanel, setShowFontPanel] = useState(false);

  const [arabValue, setArabValue] = useState([30]);
  const [transValue, setTransValue] = useState([20]);

  const Uthmani = [
    "KFGQ",
    "Me Quran",
    "Al Mushaf",
    "PDMS Saleem Quran",
    "PDMS Islamic",
    "Al Qalam Quran Majeed",
    "Amiri Quran",
  ];

  const Indopak = ["Noor E Huda", "Noor E Hedayat", "Noor E Hira"];

  const [selectedFont, setSelectedFont] = useState("KFGQ");

  return (
    <div className="relative overflow-hidden h-full bg-black border-l">

      {/* MAIN PANEL */}
      <div className="flex flex-col space-y-2">

        {/* LANGUAGE SETTINGS */}
        <div className="w-full">
          <button
            className="flex items-center justify-between px-6 py-2 w-full hover:bg-black"
            onClick={() => toggleSection("language")}
          >
            <div className="flex gap-4 items-center cursor-pointer">
              <Globe
                className={
                  activeSection === "language"
                    ? "text-emerald-900"
                    : "text-emerald-700"
                }
              />

              <span
                className={
                  activeSection === "language" ? "text-emerald-600" : ""
                }
              >
                Language Settings
              </span>
            </div>

            <ChevronDown
              className={`transition-transform duration-300 ${
                activeSection === "language" ? "rotate-180" : ""
              }`}
            />
          </button>

          {activeSection === "language" && (
            <div className="py-4 px-6">

              <span>Selected Language</span>

              <button
                className="flex mt-6 items-center justify-between w-full opacity-60 cursor-pointer"
                onClick={() => setShowLangPanel(true)}
              >
                {selectedLang}

                <ChevronRight />
              </button>

            </div>
          )}
        </div>

        {/* FONT SETTINGS */}
        <div className="w-full">
          <button
            className="flex items-center justify-between px-6 py-2 w-full hover:bg-black cursor-pointer"
            onClick={() => toggleSection("font")}
          >
            <Type
              className={
                activeSection === "font"
                  ? "text-emerald-900"
                  : "text-emerald-700"
              }
            />

            <span
              className={
                activeSection === "font" ? "text-emerald-600" : ""
              }
            >
              Font Setting
            </span>

            <ChevronDown
              className={`transition-transform duration-300 ${
                activeSection === "font" ? "rotate-180" : ""
              }`}
            />
          </button>

          {activeSection === "font" && (
            <div className="px-6 py-4 space-y-6">

              <div>
                <span>Arabic Font Face</span>

                <button
                  className="flex mt-6 w-full items-center justify-between opacity-60 cursor-pointer"
                  onClick={() => setShowFontPanel(true)}
                >
                  {selectedFont}

                  <ChevronRight />
                </button>
              </div>

              <div className="space-y-4">
                <Label>
                  Arabic Font Size
                  <span className="text-emerald-900 ml-2">
                    {arabValue[0]}
                  </span>
                </Label>

                <Slider
                  value={arabValue}
                  onValueChange={setArabValue}
                  min={0}
                  max={56}
                  step={1}
                />
              </div>

              <div className="space-y-4">
                <Label>
                  Translation Font Size
                  <span className="text-emerald-900 ml-2">
                    {transValue[0]}
                  </span>
                </Label>

                <Slider
                  value={transValue}
                  onValueChange={setTransValue}
                  min={0}
                  max={44}
                  step={1}
                />
              </div>

            </div>
          )}
        </div>

        {/* VIEW SETTINGS */}
        <div className="w-full">
          <button
            className="flex items-center justify-between px-6 py-2 w-full hover:bg-black cursor-pointer"
            onClick={() => toggleSection("view")}
          >
            <CopyCheck className="text-emerald-800" />

            <span
              className={
                activeSection === "view" ? "text-emerald-600" : ""
              }
            >
              View Setting
            </span>

            <ChevronDown
              className={`transition-transform duration-300 ${
                activeSection === "view" ? "rotate-180" : ""
              }`}
            />
          </button>

          {activeSection === "view" && (
            <div className="px-6 py-4 space-y-4 bg-slate-50 dark:bg-slate-900">

              <div className="flex justify-between">
                <Label>Show Arabic</Label>
                <Switch
                  checked={showArabic}
                  onCheckedChange={setShowArabic}
                />
              </div>

              <div className="flex justify-between">
                <Label>Show Translation</Label>
                <Switch
                  checked={showTranslation}
                  onCheckedChange={setShowTranslation}
                />
              </div>

              <div className="flex justify-between">
                <Label>Show Transliteration</Label>
                <Switch
                  checked={showTransliteration}
                  onCheckedChange={setShowTransliteration}
                />
              </div>

              <div className="flex justify-between">
                <Label>Show Reference</Label>
                <Switch
                  checked={showReference}
                  onCheckedChange={setShowReference}
                />
              </div>

            </div>
          )}
        </div>

        {/* APPEARANCE */}
        <div className="w-full">
          <button
            className="flex items-center justify-between px-6 py-2 w-full hover:bg-black cursor-pointer"
            onClick={() => toggleSection("appearance")}
          >
            <AlignStartVertical className="text-emerald-800" />

            <span
              className={
                activeSection === "appearance"
                  ? "text-emerald-600"
                  : ""
              }
            >
              Appearance Settings
            </span>

            <ChevronDown
              className={`transition-transform duration-300 ${
                activeSection === "appearance" ? "rotate-180" : ""
              }`}
            />
          </button>

          {activeSection === "appearance" && (
            <div className="px-6 py-4 flex gap-2">
              <Button><ThemeToggle /></Button>
              <Button><ThemeToggle /></Button>
              <Button><ThemeToggle /></Button>
            </div>
          )}
        </div>

      </div>

      {/* LANGUAGE PANEL */}
      <div
        className={`absolute top-0 w-full h-full bg-gray-900 transition-transform duration-300
        ${showLangPanel ? "translate-x-0" : "translate-x-full"}`}
      >

        <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-700">

          <button
            className="flex space-x-4 cursor-pointer"
            onClick={() => setShowLangPanel(false)}
          >
            <ChevronLeft className="text-emerald-700" />

            <span className="font-semibold text-emerald-700">
              Select Language
            </span>
          </button>

        </div>

        <div className="space-y-4 ml-4">

          {language.map((lang, i) => (
            <button
              key={i}
              onClick={() => setSelectedLang(lang.name)}
              className="flex ml-4 mt-4 items-center gap-3 w-full cursor-pointer"
            >

              <span
                className={`w-4 h-4 rounded-full border ${
                  selectedLang === lang.name
                    ? "bg-emerald-600 border-emerald-800"
                    : "border-gray-400"
                }`}
              />

              {lang.name}

            </button>
          ))}

        </div>
      </div>

      {/* FONT PANEL */}
      <div
        className={`absolute top-0 w-full h-full bg-gray-900 transition-transform duration-300
        ${showFontPanel ? "translate-x-0" : "translate-x-full"}`}
      >

        <div>
          <button
            className="flex items-center p-4 space-x-4 cursor-pointer"
            onClick={() => setShowFontPanel(false)}
          >
            <ChevronLeft className="text-emerald-700" />

            <span className="text-emerald-700">
              Select Font
            </span>
          </button>
        </div>

        <Tabs defaultValue="Uthmani" className="p-6">

          <TabsList className="w-full cursor-pointer">

            <TabsTrigger value="Uthmani">
              Uthmani
            </TabsTrigger>

            <TabsTrigger value="Indopak">
              Indopak
            </TabsTrigger>

          </TabsList>

          <TabsContent value="Uthmani">
            {Uthmani.map((fonts) => (

              <button
                key={fonts}
                onClick={() => setSelectedFont(fonts)}
                className="flex mt-4 items-center gap-3 w-full cursor-pointer"
              >

                <span
                  className={`w-3 h-3 rounded-full border ${
                    selectedFont === fonts
                      ? "bg-emerald-600 border-emerald-800"
                      : "border-gray-400"
                  }`}
                />

                {fonts}

              </button>

            ))}
          </TabsContent>

          <TabsContent value="Indopak">
            {Indopak.map((font) => (

              <button
                key={font}
                onClick={() => setSelectedFont(font)}
                className="flex mt-4 items-center gap-3 w-full cursor-pointer"
              >

                <span
                  className={`w-3 h-3 rounded-full border ${
                    selectedFont === font
                      ? "bg-emerald-600 border-emerald-800"
                      : "border-gray-400"
                  }`}
                />

                {font}

              </button>

            ))}
          </TabsContent>

        </Tabs>

      </div>
    </div>
  );
}