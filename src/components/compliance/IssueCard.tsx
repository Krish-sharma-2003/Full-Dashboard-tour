interface Issue {
  id: string;
  tag: string;
  type: string;
  title: string;
  description: string;
  time: string;
  actions: string[];
}

export const IssueCard = ({ issue }: { issue: Issue }) => {
  const badgeColor =
    issue.type === "critical"
      ? "bg-red-100 text-red-600"
      : issue.type === "warning"
      ? "bg-amber-100 text-amber-600"
      : "bg-blue-100 text-blue-600";

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">

      <div className="flex justify-between items-center text-xs mb-2">
        <div className={`px-3 py-1 rounded-full font-medium ${badgeColor}`}>
          {issue.tag}
        </div>
        <span className="text-slate-400">{issue.time}</span>
      </div>

      <h3 className="font-semibold text-slate-900 mb-2">
        {issue.title}
      </h3>

      <p className="text-sm text-slate-600 mb-4">
        {issue.description}
      </p>

      <div className="flex gap-3">
        {issue.actions.map((action) => (
          <button
            key={action}
            className="px-4 py-2 text-xs rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            {action}
          </button>
        ))}
      </div>

    </div>
  );
};