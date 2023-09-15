import Conversation from "./components/conversation";
import Data from '../data.json'

function App({comments: allComments, currentUser }) {
  return (
    <>
      <Conversation {...Data} />
    </>
  );
}

export default App;
