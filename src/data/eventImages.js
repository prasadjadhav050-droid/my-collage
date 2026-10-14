const modules = import.meta.glob('../assets/events/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function titleFromPath(path) {
  const file = path.split('/').pop().replace(/\.[^.]+$/, '')
  return file
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export const eventImages = Object.entries(modules).map(([path, src], index) => ({
  id: `evt-${index}`,
  src,
  title: titleFromPath(path),
  tag: 'Events',
}))

export default eventImages
