import useCountdown from '../hooks/useCountdown'
import { wedding as w } from '../data/weddingData'
function Calendar() {
  const [y, m, day] = w.date.iso.slice(0, 10).split('-').map(Number)
  const off = (new Date(y, m - 1, 1).getDay() + 6) % 7, len = new Date(y, m, 0).getDate()
  const cells = [...Array(off).fill(null), ...Array.from({ length: len }, (_, k) => k + 1)]
  const d8 = w.date.iso.slice(0, 10).replaceAll('-', '')
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(w.couple.groom + ' & ' + w.couple.bride + ' Wedding')}&dates=${d8}/${d8}`
  return (
    <div className="cal"><h4>{new Date(y, m - 1, 1).toLocaleString('en', { month: 'long' })} {y}</h4>
      <div className="cal-g">{['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => <b key={d}>{d}</b>)}{cells.map((c, k) => <span key={k} className={c === day ? 'hit' : ''}>{c}</span>)}</div>
      <a className="btn" href={url} target="_blank" rel="noreferrer">Add to calendar</a></div>
  )
}
export default function Countdown() {
  const c = useCountdown(w.date.iso)
  return (
    <div className="countdown"><h2>Counting down to forever</h2>
      {c.done ? <p className="big-serif">Today is the day.</p> : <div className="units">{['days', 'hours', 'minutes', 'seconds'].map(k => <div key={k}><b>{String(c[k]).padStart(2, '0')}</b><span>{k}</span></div>)}</div>}
      <Calendar />
    </div>
  )
}
