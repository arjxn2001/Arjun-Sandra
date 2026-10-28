import { useState } from 'react'
export default function RSVP() {
  const [sent, setSent] = useState(false)
  const submit = e => { e.preventDefault(); console.log(Object.fromEntries(new FormData(e.target))); setSent(true) }
  return (
    <div className="rsvp"><h2>We'd love to have you with us</h2>
      {sent ? <p className="big-serif">Thank you. We can't wait to celebrate with you.</p> : (
        <form onSubmit={submit}>
          <label>Your name<input name="name" required /></label>
          <fieldset><label><input type="radio" name="attending" value="yes" defaultChecked /> Yes, I'll be there</label><label><input type="radio" name="attending" value="no" /> Sadly, I can't</label></fieldset>
          <label>A message for us<textarea name="message" rows="3" /></label>
          <button className="btn solid">Come celebrate with us</button>
        </form>)}
    </div>
  )
}
