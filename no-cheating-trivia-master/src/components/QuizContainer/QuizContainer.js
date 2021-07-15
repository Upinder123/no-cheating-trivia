import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { spinner } from "./QuizSpinner";
import useFetch from "../../helpers/useFetch";
import useWatch from "../../helpers";
import CheatingAlert from "../CheatingAlert/CheatingAlert";
import Question from "../Question/Question";
import "./quizContainer.css";

export default function QuizContainer() {
  const { data, loading, error } = useFetch(
    "https://opentdb.com/api.php?amount=10&category=18"
  );
  const [fetchedQuestions, setFetchedQuestions] = useState([]);
  const [questionComponents, setQuestionComponents] = useState([]);
  const [index, setIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [score, setScore] = useState(Array.from({ length: 10 }).fill(false)); // true -> correct, false -> incorrect
  const [{watching, variant, detail, cheating}, setWatch, setCheatingCount] = useWatch(true);

  useEffect(() => {
    if (watching) {
      console.warn("YOU BEEN FOUND CHEATING!!!");
      // <CheatingAlert variant="warning" detail="Found opening a new tab"/>
    }
  }, [watching]);

  useEffect(() => {
    console.log({ data, loading, error });
    if (!loading) {
      if (data === null || data.response_code !== 0 || error) {
        console.log("Something went wrong");
        if (error) console.log(error);
        return;
      } else {
        setFetchedQuestions(data.results);
        console.log(data.results);
      }
    }
  }, [loading, data, error, fetchedQuestions]);

  useEffect(() => {
    const max = fetchedQuestions.length;
    console.log("Question Detail:", fetchedQuestions);
    const q =
      fetchedQuestions.length > 0 &&
      fetchedQuestions.map((questionDetail) => (
        <Question
          key={uuidv4()}
          index={index}
          onPreviousClicked={() => setIndex((i) => (i >= 1 ? i - 1 : i))}
          onNextClicked={() =>
            setIndex((i) => (i !== max - 1 ? i + 1 : max - 1))
          }
          total={max}
          setCorrectAnswers={setCorrectAnswers}
          correctAnswers={correctAnswers}
          score={score}
          setScore={setScore}
          {...questionDetail}
        />
      ));

    setQuestionComponents(q);
    console.log(q);
  }, [fetchedQuestions, index, correctAnswers, score]);

  console.log("Correct Answers:", correctAnswers);
  return (
    <>
      {cheating ? (
        <CheatingAlert
          variant={variant}
          detail={detail}
          setWatch={setWatch}
          setCheatingCount={setCheatingCount}
        />
      ) : loading || fetchedQuestions.length === 1 ? (
        spinner
      ) : (
        questionComponents[index]
      )}
    </>
  );
}
