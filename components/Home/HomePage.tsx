"use client"
import { Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/app/theme-toggle"

const HomePage = () => {
  const { setTheme } = useTheme()
  return (
    <div className="w-full h-screen">
      <div className="flex mt-35 text-center text-5xl font-bold items-center justify-center">
        <h1 className="text-emerald-800">🌙 RAMADAN KAREEM 2026 </h1>
      </div>
      
      <div className="items-center justify-center">
        <h4 className="font-bold">
          <div>
          <Button>Dark Mode</Button>
          <Button variant="secondary">Light Mode</Button>
          </div><ThemeToggle/>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          </h4>
      </div>
  </div>)
}

export default HomePage