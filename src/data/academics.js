export const courses = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    code: 'CSE',
    duration: '4 Years (B.E. / B.Tech)',
    intakeLabel: 'Intake — as per official notification',
    description:
      'Software development, algorithms, databases, networks and computing systems.',
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    code: 'ME',
    duration: '4 Years (B.E. / B.Tech)',
    intakeLabel: 'Intake — as per official notification',
    description:
      'Design, thermal sciences, manufacturing, mechanics and CAD/CAM.',
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    code: 'EE',
    duration: '4 Years (B.E. / B.Tech)',
    intakeLabel: 'Intake — as per official notification',
    description:
      'Electrical machines, power systems, control and measurements.',
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    code: 'AI',
    duration: '4 Years (B.E. / B.Tech)',
    intakeLabel: 'Intake — as per official notification',
    description:
      'Machine learning, data analysis and intelligent systems.',
  },
]

export const syllabus = [
  { year: 'First Year', subjects: 'Basic Sciences, Mathematics, Engineering Graphics & Communication' },
  { year: 'Second Year', subjects: 'Department core courses and applied mathematics' },
  { year: 'Third Year', subjects: 'Advanced core courses, electives and laboratory practice' },
  { year: 'Final Year', subjects: 'Specialisation electives, internship and major project' },
]

export const timetable = [
  { day: 'Monday', morning: 'Theory Sessions', afternoon: 'Lab / Practical' },
  { day: 'Tuesday', morning: 'Theory Sessions', afternoon: 'Theory + Tutorial' },
  { day: 'Wednesday', morning: 'Theory Sessions', afternoon: 'Lab / Practical' },
  { day: 'Thursday', morning: 'Theory Sessions', afternoon: 'Theory + Tutorial' },
  { day: 'Friday', morning: 'Theory Sessions', afternoon: 'Lab / Practical' },
  { day: 'Saturday', morning: 'Theory / Activities', afternoon: 'Mentoring & Co-curricular' },
]

export const academicCalendar = [
  { term: 'Term I — Commencement of Classes', period: 'As per university schedule' },
  { term: 'Term I — Internal Assessment', period: 'Mid-term' },
  { term: 'Term I — End Semester Examination', period: 'End of term' },
  { term: 'Term II — Commencement of Classes', period: 'As per university schedule' },
  { term: 'Term II — Internal Assessment', period: 'Mid-term' },
  { term: 'Term II — End Semester Examination', period: 'End of term' },
  { term: 'Vacations & Holidays', period: 'As declared by the institute' },
]

export const examination = {
  info: 'Examinations are conducted as per the norms of Dr. Babasaheb Ambedkar Technological University, Lonere. The information below is a sample layout of examination guidance for students.',
  points: [
    'Hall tickets must be collected from the department before exams.',
    'Students must carry a valid institute ID card to the examination hall.',
    'Internal assessment and end semester marks are declared by the university.',
    'Result declarations follow the university examination calendar.',
  ],
  links: [
    { label: 'University Examination Portal', href: 'https://dbatu.ac.in/', external: true },
    { label: 'Directorate of Technical Education (DTE)', href: 'http://www.dtemaharashtra.gov.in', external: true },
  ],
  disclaimer:
    'Examination dates and results shown here are samples. Please refer to official university notifications for verified schedules and results.',
}

export default courses
