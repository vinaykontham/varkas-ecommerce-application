function NextImage({ src, alt, fill, ...props }) {
  // Remove Next.js specific props that shouldn't be passed to img
  const { sizes, priority, quality, loading, ...rest } = props

  // Convert boolean props to strings
  const safeProps = Object.entries(rest).reduce((acc, [key, value]) => {
    acc[key] = value === true ? "true" : value
    return acc
  }, {})

  return (
    <div
      data-testid="next-image"
      style={{
        position: fill ? 'absolute' : 'relative',
        height: '100%',
        width: '100%',
      }}
    >
      <img
        src={src}
        alt={alt}
        {...safeProps}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  )
}

export default NextImage
