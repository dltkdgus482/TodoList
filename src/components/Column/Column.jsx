import Issue from "../Issue/Issue";
import "./Column.css";

const Column = ({ issues, issueType, changeIssueType }) => {
  return (
    <li className="column">
      <h3>{issueType}</h3>
      <ul className="issues">
        {issues.length > 0 ? (
          issues.map((issue, index) => {
            return (
              <Issue
                key={index}
                issue={issue}
                changeIssueType={changeIssueType}
              />
            );
          })
        ) : (
          <span>현재 등록된 이슈가 없습니다.</span>
        )}
      </ul>
    </li>
  );
};

export default Column;
