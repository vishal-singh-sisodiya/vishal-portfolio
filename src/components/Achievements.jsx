export default function Achievements() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Achievements */}
        <div className="bg-[#111827] border border-white/10 rounded-xl p-8">
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--accent)" }}
          >
            Achievements
          </h3>

          <ul className="text-gray-300 space-y-3">
            <li>
              • Solved 200+ Data Structures & Algorithms problems on LeetCode
            </li>
            <li>• Strong foundation in problem-solving using C++</li>
            <li>
              • Experience working on real-world full-stack and frontend
              projects
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="bg-[#111827] border border-white/10 rounded-xl p-8">
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--accent)" }}
          >
            Certifications
          </h3>

          <ul className="text-gray-300 space-y-3">
            <li>• Data Analysis with Python — IBM SkillsBuild</li>
            <li>• Artificial Intelligence Fundamentals — IBM SkillsBuild</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
