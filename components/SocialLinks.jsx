import React from 'react'

import Image from 'next/image'
import instagram from '../public/assets/social-icons/instagram-64.png'
import soundcloud from '../public/assets/social-icons/soundcloud-50.png'
import spotify from '../public/assets/social-icons/spotify-50.png'
import applemusic from '../public/assets/social-icons/apple-music-48.png'

const SocialLinks = () => {
  return (
    <div className="relative my-10 w-full flex flex-row justify-center items-center gap-4">
      <a href="https://www.instagram.com/nikicomploi/">
        <Image src={instagram} alt="instagram-icon" width={40} height={40} />
      </a>
      <a href="https://soundcloud.com/nikolauscomploi">
        <Image src={soundcloud} alt="soundcloud-icon" width={40} height={40} />
      </a>
      <a href="https://open.spotify.com/artist/1WDLIUP5wCXhZorO4I18Uz">
        <Image src={spotify} alt="spotify-icon" width={40} height={40} />
      </a>
      <a href="https://music.apple.com/de/artist/me-the-monster/1436304893">
        <Image src={applemusic} alt="applemusic-icon" width={40} height={40} />
      </a>
    </div>
  )
}

export default SocialLinks
