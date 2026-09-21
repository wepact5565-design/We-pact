/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Team } from './components/Team';
import { WhatWeDo } from './components/WhatWeDo';
import { Outcomes } from './components/Outcomes';
import { Reports } from './components/Reports';
import { Vision } from './components/Vision';
import { Media } from './components/Media';
import { StandWithUs } from './components/StandWithUs';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Team />
        <WhatWeDo />
        <Outcomes />
        <Reports />
        <Vision />
        <Media />
        <StandWithUs />
      </main>
      <Footer />
    </div>
  );
}
