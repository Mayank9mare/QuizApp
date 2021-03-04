import React from "react"; 
const questions = [
  {
    questionText: 'The International Literacy Day is observed on',
    answerOptions: [
      { answerText: 'May 2', isCorrect: false },
      { answerText: 'Nov 28', isCorrect: false },
      { answerText: 'Sep 8', isCorrect: true },
      { answerText: 'Sep 22', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'In which group of places the Kumbha Mela is held every twelve years?',
    answerOptions: [
      { answerText: 'Prayag, Haridwar, Ujjain, Nasik', isCorrect: true },
      { answerText: 'Ujjain, Purl, Prayag, Haridwar', isCorrect: false },
      { answerText: 'Rameshwaram, Purl, Badrinath, Dwarika', isCorrect: false },
      { answerText: 'Chittakoot, Ujjain, Prayag, Haridwar', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
      { answerText: '8', isCorrect: false },
    ],
  },
  {
    questionText: 'Bahubali festival is related to',
    answerOptions: [
      { answerText: 'Islam', isCorrect: false },
      { answerText: 'Hinduism', isCorrect: false },
      { answerText: 'Sikh', isCorrect: false },
      { answerText: 'Janism', isCorrect: true },
      { answerText: 'Christianity', isCorrect: false },
    ],
  },
  {
    questionText: ' Who is the author of the book "Amrit Ki Ore"?',
    answerOptions: [
      { answerText: 'Mukesh Kumar', isCorrect: false },
      { answerText: 'Narendra Mohan', isCorrect: true },
      { answerText: 'Upendra Nath', isCorrect: false },
      { answerText: 'Nirad C. Choudhary', isCorrect: false },
    ],
  },
  {
    questionText: ' Pongal is a popular festival of which state?',
    answerOptions: [
      { answerText: 'Kerela', isCorrect: false },
      { answerText: 'Karnataka', isCorrect: false },
      { answerText: 'Tamil Nadu', isCorrect: true },
      { answerText: 'Andra Pradesh', isCorrect: false },
      { answerText: 'Islamabad', isCorrect: false },
    ],
  },
  {
    questionText: 'How much marks should I be given in this assignment',
    answerOptions: [
      { answerText: '9/10', isCorrect: true },
      { answerText: '10/10', isCorrect: true },
      { answerText: '9.5/10', isCorrect: true },
      { answerText: '9.8/10', isCorrect: true },
    ],
  },
];
export default questions;