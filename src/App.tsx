import IntroButton from './introFragments/introButton';
import IntroLayout from './introFragments/introLayout';
import IntroCollapse from './introFragments/introCollapse';
import './App.less';

function App ()
{
  return (
    <main>
      <IntroLayout></IntroLayout>
      <IntroButton></IntroButton>
      <IntroCollapse></IntroCollapse>
    </main>
  );
}

export default App;
