/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkGrid } from "./components/WorkGrid";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-6 md:p-8 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col gap-6">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Hero />
        </div>
        <WorkGrid />
        <About />
        <Footer />
      </div>
    </main>
  );
}
