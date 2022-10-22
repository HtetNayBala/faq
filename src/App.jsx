import './App.css';
import Wrapper from "./wrapper/Wrapper";
import Faq from "./Components/Faq";

const App = () => {
  return (
    <div>
      <Wrapper>
        <div className='mb-5'>
          <h4 className='text-4xl font-bold text-center'>Frequently Added Questions</h4>
        </div>
          <Faq/>
      </Wrapper>
    </div>
  )
}

export default App