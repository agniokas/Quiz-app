import React from "react";
import {AnswerObject} from "../App";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
   question,
   answers,
   callback,
   userAnswer,
   questionNr,
   totalQuestions,
}) => {


    return (
        <div className="card-wrapper">
            <p className="number">
                Questions: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question}} />
            <div>
                {answers && answers.map(answer => {
                    const correct = userAnswer?.correctAnswer === answer;
                    const userClicked = userAnswer?.answer === answer;
                    return (
                    <div

                        key={answer}>
                        <button className={correct ? "answers correct" : !correct && userClicked ? "answers userClicked" : "answers other"} disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                    )})}
            </div>
        </div>
    )
}

export default QuestionCard