export function cn(
  ...classes: (string | undefined | false)[]
) {
  return classes
    .filter(Boolean)
    .join(" ");
}



export function calculateXP(
  correctAnswers:number,
  totalQuestions:number
){

  if(totalQuestions === 0)
    return 0;


  const percentage =
    correctAnswers / totalQuestions;


  return Math.round(
    percentage * 100
  );

}



export function getLevel(
  xp:number
){

  if(xp < 500)
    return "Beginner";


  if(xp < 1500)
    return "Intermediate";


  if(xp < 3000)
    return "Advanced";


  return "Fluent";

}



export function formatNumber(
  number:number
){

  return new Intl.NumberFormat()
    .format(number);

}



export function shuffleArray<T>(
  array:T[]
){

  return [...array]
    .sort(
      () => Math.random() - 0.5
    );

}