interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ComplianceTabs = ({ activeTab, setActiveTab }: Props) => {
  const tabs = ["all", "critical", "warning", "advisory"];

  return (
    <div className="flex gap-8 border-b border-slate-200 text-sm">

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-3 capitalize ${
            activeTab === tab
              ? "border-b-2 border-blue-600 text-blue-600 font-medium"
              : "text-slate-500"
          }`}
        >
          {tab}
        </button>
      ))}

    </div>
  );
};