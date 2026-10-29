import { useEffect, useRef, useState } from 'react'

type Photo = { src: string; alt: string }

// Photos that open full size in a modal dialog. Esc or a click closes it,
// arrow keys (or the buttons) step through the set.
export function Lightbox({ photos, className }: { photos: Photo[]; className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState<number | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (index === null && dialog.open) dialog.close()
    if (index !== null && !dialog.open) dialog.showModal()
  }, [index])

  const step = (delta: number) =>
    setIndex((current) => (current === null ? null : (current + delta + photos.length) % photos.length))
  const photo = index === null ? undefined : photos[index]
  const several = photos.length > 1

  return (
    <>
      {photos.map((item, i) => (
        <button
          key={item.src}
          type="button"
          className="zoomable"
          aria-haspopup="dialog"
          onClick={() => setIndex(i)}
        >
          <img className={className} src={item.src} alt={item.alt} loading="lazy" />
          <span className="sr-only">(enlarge)</span>
        </button>
      ))}

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo"
        onClose={() => setIndex(null)}
        // Anything but the controls closes it, including the photo and the backdrop
        onClick={(event) => {
          if (!(event.target as HTMLElement).closest('button')) setIndex(null)
        }}
        onKeyDown={(event) => {
          if (!several) return
          if (event.key === 'ArrowRight') step(1)
          if (event.key === 'ArrowLeft') step(-1)
        }}
      >
        {photo && (
          <>
            <img src={photo.src} alt={photo.alt} />
            <button type="button" className="lightbox-close" onClick={() => setIndex(null)}>
              close <span aria-hidden="true">×</span>
            </button>
            {several && (
              <div className="lightbox-nav">
                <button type="button" onClick={() => step(-1)}>
                  <span aria-hidden="true">&lt;</span> prev
                </button>
                <span aria-live="polite">
                  {index! + 1} / {photos.length}
                </span>
                <button type="button" onClick={() => step(1)}>
                  next <span aria-hidden="true">&gt;</span>
                </button>
              </div>
            )}
          </>
        )}
      </dialog>
    </>
  )
}
