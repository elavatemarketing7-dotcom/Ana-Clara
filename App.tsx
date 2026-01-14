
import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import LandingPage from './components/LandingPage';
import IntroSelection from './components/IntroSelection';

enum AppState {
  INTRO,
  QUIZ,
  RESULT,
  LANDING
}

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.INTRO);

  const goToQuiz = () => setCurrentStep(AppState.QUIZ);
  const goToLanding = () => setCurrentStep(AppState.LANDING);
  const goToResult = () => setCurrentStep(AppState.RESULT);

  return (
    <div className="min-h-screen">
      {currentStep === AppState.INTRO && (
        <IntroSelection onStartQuiz={goToQuiz} onGoToSite={goToLanding} />
      )}
      
      {currentStep === AppState.QUIZ && (
        <Quiz onFinish={goToResult} onSkip={goToLanding} />
      )}

      {currentStep === AppState.RESULT && (
        <ResultPage onContinue={goToLanding} />
      )}

      {currentStep === AppState.LANDING && (
        <LandingPage />
      )}
    </div>
  );
};

export default App;
