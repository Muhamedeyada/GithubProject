const SortRepos = ({ onSort, sortType }) => {
  const BUTTONS = [
    { type: "Most Recent", text: "Most recent" },
    { type: "Most Stars", text: "Most stars" },
    { type: "Most Forks", text: "Most forks" },
  ];
  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      {BUTTONS.map((button) => (
        <button
          type="button"
          key={button.type}
          className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
            button.type === sortType ? "border-blue-600" : ""
          }`}
          onClick={() => onSort(button.type)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};
export default SortRepos;
