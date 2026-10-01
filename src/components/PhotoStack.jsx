import Snapshot from './Snapshot.jsx'

export default function PhotoStack({ photos, direction = 'vertical', className = '' }) {
  return (
    <div className={`photo-stack ${direction} ${className}`} tabIndex={0}>
      {photos.map((photo) => <Snapshot key={photo.src} {...photo} />)}
    </div>
  )
}
