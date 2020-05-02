interface QuestionProps {
  text: string;
  timestamp: string;
  voteCount: number;
  userName?: string;
  handleUpVote: (questionId: number) => void;
  id: number;
  isPinned: boolean;
  handlePin: (questionId: number) => void;
  handleUnpin: (questionId: number) => void;
  isAuthenticated: boolean;
}

export { QuestionProps };
