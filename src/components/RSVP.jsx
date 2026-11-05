import { useState } from 'react'

const WHATSAPP = '919745218410' // country code + number, no + or spaces

export default function RSVP() {
  const [sent, setSent] = useState(false)

  const submit = e => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    const text =
      `Hi! This is ${d.name}. ` +
      (d.attending === 'yes' ? "I'll be there! 🎉" : "Sadly I can't make it.") +
      (d.message ? `\n\n${d.message}` : '')
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
  }

  return (
    <div className="rsvp"><h2>We'd love to have you with us</h2>
      {sent ? (
        <p className="big-serif">Thank you. We can't wait to celebrate with you.</p>
      ) : (
        <form onSubmit={submit}>
          <label>Your name<input name="name" required /></label>
          <fieldset>
            <label><input type="radio" name="attending" value="yes" defaultChecked /> Yes, I'll be there</label>
            <label><input type="radio" name="attending" value="no" /> Sadly, I can't</label>
          </fieldset>
          <label>A message for us<textarea name="message" rows="3" /></label>
          <button className="btn solid">Come celebrate with us</button>
        </form>
      )}
    </div>
  )
}