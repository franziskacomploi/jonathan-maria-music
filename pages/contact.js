import Hero from '../components/Hero'
import contact from '../content/contact.json'

export default function Contact() {
  return (
    <div>
      <Hero />
      <p className="my-10 text-center">{contact.contact}</p>
    </div>
  )
}
