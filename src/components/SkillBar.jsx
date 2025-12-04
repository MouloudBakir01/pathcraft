export default function SkillBar({ skill, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-gray-800 dark:text-gray-200">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded">
        <div
          className="bg-blue-500 h-3 rounded"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
