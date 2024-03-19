import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ActivityForm from './components/ActivityForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="activity-form" element={<ActivityForm />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
