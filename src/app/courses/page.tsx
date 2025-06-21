export default function CoursesPage() {
  const courseCategories = [
    {
      title: 'Secondary (Class 8–10)',
      subjects: ['Math', 'Science', 'English',],
    },
    {
      title: 'Senior Secondary (Class 11–12)',
      subjects: ['Physics', 'Math',],
    },
    {
      title: 'Competitive & Special',
      subjects: ['NTSE', 'Olympiads', 'CUET Foundation', 'JEE Foundation', 'NEET Foundation','Vyapam'],
    },
  ]

  return (
    <main className="p-6 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Courses We Offer</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Explore our wide range of coaching programs tailored for each class level with expert faculty and practice-focused teaching.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseCategories.map((course, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-glass p-6 rounded-lg shadow-glass"
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <ul className="list-disc pl-5 space-y-1">
              {course.subjects.map((subj, i) => (
                <li key={i}>{subj}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  )
}
