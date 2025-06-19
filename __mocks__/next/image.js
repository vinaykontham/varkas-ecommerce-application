function NextImage({ src, alt, fill, ...props }) {
  // Convert boolean props to strings
  const safeProps = Object.entries(props).reduce((acc, [key, value]) => {
    acc[key] = value === true ? "true" : value
    return acc
  }, {})

  // Handle fill prop separately
  const style = fill ? {
    position: 'absolute',
    height: '100%',
    width: '100%',
    inset: '0px',
    objectFit: 'cover'
  } : undefined

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      {...safeProps}
      data-testid="next-image"
    />
  )
}

export default NextImage
