import "./Issue.css";

const Issue = ({ issue, changeIssueType }) => {
  return (
    <li className="issue">
      <p>{issue.title}</p>
      <select
        name="issueType"
        value={issue.type}
        onChange={(e) => changeIssueType(issue.id, +e.target.value)}
      >
        <option value={0}>TODO</option>
        <option value={1}>IN PROGRESS</option>
        <option value={2}>DONE</option>
      </select>
    </li>
  );
};

export default Issue;
