export const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About College', to: '/about' },
      { label: 'Vision, Mission & PEO', to: '/about#vision' },
      { label: 'Approvals & Affiliation', to: '/about#approvals' },
    ],
  },
  {
    label: 'Departments',
    to: '/departments',
    children: [
      { label: 'Computer Science & Engineering', to: '/departments/cse' },
      { label: 'Mechanical Engineering', to: '/departments/mechanical' },
      { label: 'Electrical Engineering', to: '/departments/electrical' },
      { label: 'Artificial Intelligence', to: '/departments/ai' },
    ],
  },
  {
    label: 'Academics',
    to: '/academics',
    children: [
      { label: 'Courses & Syllabus', to: '/academics#courses' },
      { label: 'Timetable', to: '/academics#timetable' },
      { label: 'Academic Calendar', to: '/academics#calendar' },
      { label: 'Examination', to: '/academics#examination' },
    ],
  },
  { label: 'Student Corner', to: '/student-corner' },
  {
    label: 'Facilities',
    to: '/facilities',
    children: [
      { label: 'Library', to: '/facilities#library' },
      { label: 'Laboratories', to: '/facilities#labs' },
      { label: 'Computer Labs', to: '/facilities#computer-labs' },
      { label: 'Sports & Transport', to: '/facilities#sports' },
    ],
  },
  { label: 'Placements', to: '/placements' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  { label: 'Student Login', type: 'login' },
]

export default navLinks
