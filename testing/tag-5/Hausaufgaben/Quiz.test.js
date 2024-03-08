const quiz = require("./Quiz");

describe("isRightSolutionForQuestion function", () => {
  test("should return true for correct answer", () => {
    const questionKey = "frage_1";
    const correctAnswer = "Weil er immer kalt gelötet ist.";

    const result = quiz.isRightSolutionForQuestion(questionKey, correctAnswer);
    console.log("result", result);
    expect(result).toBe(true);
  });

  test("should return false for incorrect answer", () => {
    const questionKey = "frage_2";
    const incorrectAnswer = "Because programmers love haircuts.";

    const result = quiz.isRightSolutionForQuestion(
      questionKey,
      incorrectAnswer
    );
    console.log("result", result);
    expect(result).toBe(false);
  });

  test("should throw an error for non-existing question", () => {
    const nonExistingQuestionKey = "non_existing_key";
    const answer = "Some answer";

    expect(() =>
      quiz.isRightSolutionForQuestion(nonExistingQuestionKey, answer)
    ).toThrow("No such question");
  });

  test("should throw an error for non-string answer", () => {
    const questionKey = "frage_3";
    const nonStringAnswer = 123;

    expect(() =>
      quiz.isRightSolutionForQuestion(questionKey, nonStringAnswer)
    ).toThrow("Answer can only be a string");
  });
});
