import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import OnboardingBenefits from './pages/OnboardingBenefits';
import KFIsOnLand from './pages/KFIsOnLand';
import DemoModeQuestions from './pages/DemoModeQuestions';
import Questionnaire from './pages/Questionnaire';
import GoalsComplete from './pages/GoalsComplete';
import RetirementAge from './pages/RetirementAge';
import SavingsCheck from './pages/SavingsCheck';
import FinancialFears from './pages/FinancialFears';
import ConnectConsent from './pages/ConnectConsent';
import FlinksSelect from './pages/FlinksSelect';
import FlinksLogin from './pages/FlinksLogin';
import FlinksSuccess from './pages/FlinksSuccess';
import ConnectNext from './pages/ConnectNext';
import TransUnionDOB from './pages/TransUnionDOB';
import TransUnionValidate from './pages/TransUnionValidate';
import TransUnionSMSValidate from './pages/TransUnionSMSValidate';
import TransUnionSecurity from './pages/TransUnionSecurity';
import ConnectSuccess from './pages/ConnectSuccess';
import DisplayIncome from './pages/DisplayIncome';
import DisplayNeeds from './pages/DisplayNeeds';
import DisplayWants from './pages/DisplayWants';
import ExpensesReduce from './pages/ExpensesReduce';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/onboarding" element={<OnboardingBenefits />} />
            <Route path="/kfis" element={<KFIsOnLand />} />
            <Route path="/demo" element={<DemoModeQuestions />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/goals-complete" element={<GoalsComplete />} />
            <Route path="/retirement-age" element={<RetirementAge />} />
            <Route path="/savings-check" element={<SavingsCheck />} />
            <Route path="/financial-fears" element={<FinancialFears />} />
            <Route path="/connect-consent" element={<ConnectConsent />} />
            <Route path="/flinks-select" element={<FlinksSelect />} />
            <Route path="/flinks-login" element={<FlinksLogin />} />
            <Route path="/flinks-success" element={<FlinksSuccess />} />
            <Route path="/connect-next" element={<ConnectNext />} />
            <Route path="/transunion-dob" element={<TransUnionDOB />} />
            <Route path="/transunion-validate" element={<TransUnionValidate />} />
            <Route path="/transunion-sms" element={<TransUnionSMSValidate />} />
            <Route path="/transunion-security" element={<TransUnionSecurity />} />
            <Route path="/connect-success" element={<ConnectSuccess />} />
            <Route path="/display-income" element={<DisplayIncome />} />
            <Route path="/display-needs" element={<DisplayNeeds />} />
            <Route path="/display-wants" element={<DisplayWants />} />
            <Route path="/expenses-reduce" element={<ExpensesReduce />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
