import { useState } from 'react'
import useAudio from './hooks/useAudio'
import { wedding } from './data/weddingData'
import FloatingPetals from './components/FloatingPetals'
import EnvelopeIntro from './components/EnvelopeIntro'
import MusicPlayer from './components/MusicPlayer'
import ScrollScene from './components/ScrollScene'
import Hero from './components/Hero'
import SaveTheDate from './components/SaveTheDate'
import EditorialGallery from './components/EditorialGallery'
import EventsSection from './components/EventsSection'
import Countdown from './components/Countdown'
import GuestMessage from './components/GuestMessage'
import RSVP from './components/RSVP'
import FinalSection from './components/FinalSection'
export default function App() {
  const [opened, setOpened] = useState(false)
  const audio = useAudio(wedding.music)
  return (
    <>
      <FloatingPetals />
      <EnvelopeIntro onOpen={() => { setOpened(true); audio.play() }} />
      {opened && <MusicPlayer playing={audio.playing} onToggle={audio.toggle} />}
      <main className={opened ? '' : 'locked'}>
        <Hero />
        <ScrollScene className="ivory" z={2}><SaveTheDate /></ScrollScene>
        <ScrollScene className="sand" z={10}><EditorialGallery /></ScrollScene>
        <ScrollScene className="ivory" z={11}><EventsSection /></ScrollScene>
        <ScrollScene className="olive" z={12}><Countdown /></ScrollScene>
        <ScrollScene className="sand" z={13}><GuestMessage /></ScrollScene>
        <ScrollScene className="ivory" z={14}><RSVP /></ScrollScene>
        <ScrollScene className="olive nopad" z={15}><FinalSection /></ScrollScene>
      </main>
    </>
  )
}
