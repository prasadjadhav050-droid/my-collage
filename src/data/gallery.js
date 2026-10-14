import { eventImages } from './eventImages'

export const galleryTags = ['All', 'Campus', 'Classrooms', 'Laboratories', 'Library', 'Events', 'Festivals']

const baseItems = [
  { id: 'g1', src: '/images/slide1.jpg', title: 'College Campus', tag: 'Campus' },
  { id: 'g2', src: '/images/slide2.jpg', title: 'Campus Building', tag: 'Campus' },
  { id: 'g3', src: '/images/slide3.jpg', title: 'Institute View', tag: 'Campus' },
  { id: 'g4', src: '/images/slide4.jpg', title: 'Campus Surroundings', tag: 'Campus' },
  { id: 'g5', src: '/images/gallery/img12.jpg', title: 'Library', tag: 'Library' },
  { id: 'g6', placeholder: true, title: 'Classroom', tag: 'Classrooms' },
  { id: 'g7', placeholder: true, title: 'Computer Laboratory', tag: 'Laboratories' },
  { id: 'g8', placeholder: true, title: 'Engineering Laboratory', tag: 'Laboratories' },
  { id: 'g9', placeholder: true, title: 'Seminar Hall', tag: 'Classrooms' },
  { id: 'g12', placeholder: true, title: 'Engineers Day Celebration', tag: 'Festivals' },
  { id: 'g13', placeholder: true, title: 'Cultural Programme', tag: 'Festivals' },
]

const eventPlaceholders = [
  { id: 'g10', placeholder: true, title: 'Technical Workshop', tag: 'Events' },
  { id: 'g11', placeholder: true, title: 'Annual Sports Meet', tag: 'Events' },
  { id: 'g14', placeholder: true, title: 'Industrial Visit', tag: 'Events' },
]

export const galleryItems = [
  ...baseItems,
  ...(eventImages.length > 0 ? eventImages : eventPlaceholders),
]

export const galleryNote =
  eventImages.length > 0
    ? 'Event photographs have been added to the Events category of the gallery.'
    : 'Some photographs are illustrative placeholders. Drop event photos into src/assets/events/ to show them here.'

export default galleryItems
