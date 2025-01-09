import { useState } from "react";
import Column from "../Column/Column";
import { dummyIssues } from "../../data/issues";
import { issueTypes } from "../../constants/issueTypes";
import "./Board.css";

const Board = () => {
  // 현재 등록된 이슈
  const [issues, setIssues] = useState(dummyIssues);

  /**
   * changeIssueType은 특정 이슈의 타입을 바꿔
   * 상태를 변경해주는 함수입니다.
   *
   * @param {Number} key
   * @param {Number} nextType
   */
  const changeIssueType = (key, nextType) => {
    setIssues((prevIssues) =>
      prevIssues.map((prevIssue, index) =>
        index === key ? { ...prevIssue, type: nextType } : prevIssue
      )
    );
  };

  return (
    <ul className="board">
      {issueTypes.map((issueType, index) => (
        <Column
          key={index}
          issueType={issueType.status}
          issues={issues.filter((issue) => {
            return issue.type === issueType.type;
          })}
          changeIssueType={changeIssueType}
        />
      ))}
    </ul>
  );
};

export default Board;
