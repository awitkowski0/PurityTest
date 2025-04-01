import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { questions } from '@/data/questions';

export default function Home() {
  const [answers, setAnswers] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleCheckboxChange = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = !newAnswers[index];
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    // Count the number of 'true' answers
    const trueCount = answers.filter(answer => answer).length;
    // Calculate percentage (100 - percentage of true answers)
    const calculatedScore = 100 - Math.round((trueCount / questions.length) * 100);
    setScore(calculatedScore);
    setShowResults(true);
  };

  const resetTest = () => {
    setAnswers(new Array(questions.length).fill(false));
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Beta Theta Pi Purity Test</title>
        <meta name="description" content="Beta Theta Pi Purity Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>The Official Beta Theta Pi Purity Test</h1>
          
          <p className={styles.description}>
            The totally unique and original Beta Theta Pi Purity Test. Use it to track your fraternity
            experiences throughout your years at the chapter.
          </p>
          
          <p className={styles.caution}>
            Caution: This is not a bucket list. If you hit all 100 you deserve to be in jail.
          </p>
          
          <p className={styles.disclaimer}>
            This is not affiliated nor endorsed by Beta Theta Pi International Fraternity.
          </p>

          {!showResults ? (
            <div className={styles.questionsContainer}>
              {questions.map((question, index) => (
                <div key={index} className={styles.questionItem}>
                  <label className={styles.questionLabel}>
                    <input
                      type="checkbox"
                      checked={answers[index]}
                      onChange={() => handleCheckboxChange(index)}
                      className={styles.checkbox}
                    />
                    <span className={styles.questionNumber}>{index + 1}.</span> {question}
                  </label>
                </div>
              ))}
              
              <button 
                className={styles.calculateButton}
                onClick={calculateScore}
              >
                Calculate My Score
              </button>
            </div>
          ) : (
            <div className={styles.resultsContainer}>
              <h2 className={styles.scoreTitle}>Your Purity Score</h2>
              <div className={styles.scoreDisplay}>{score}%</div>
              <p className={styles.scoreDescription}>
                {score >= 90 ? 'Wow, you\'re practically a saint!' :
                 score >= 70 ? 'Pretty pure, but you\'ve had some fun.' :
                 score >= 50 ? 'Right in the middle, balanced life.' :
                 score >= 30 ? 'You\'ve been busy, haven\'t you?' :
                 'Wild child alert! The stories you must have...'}
              </p>
              <button 
                className={styles.resetButton}
                onClick={resetTest}
              >
                Take the Test Again
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Beta Theta Pi Purity Test</p>
      </footer>
    </div>
  );
}