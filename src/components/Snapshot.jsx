import { useState } from 'react'
import { publicAsset } from '../assets.js'

export default function Snapshot({ src, alt, caption, className = '', tilt = 0 }) {
  const [failed, setFailed] = useState(false)
  return (
    <figure className={`snapshot ${className}`} style={{ '--tilt': `${tilt}deg` }}>
      {failed
        ? <div className="snapshot-placeholder"><span>PHOTO</span><code>public{src}</code></div>
        : <img src={publicAsset(src)} alt={alt} loading="lazy" onError={() => setFailed(true)} />}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
