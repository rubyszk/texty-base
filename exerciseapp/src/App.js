import './Styles.css';
import MessageUI from './components/messageUI';
import ComposeMessage from './components/composeMessage';
import UserList from './components/userList';

const { useEffect, useState } = require("react");

function App() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const messageResponse = await fetch("http://interview-env.eba-7ndyqgx6.us-east-2.elasticbeanstalk.com/texts");
      const messages = await messageResponse.json();

      const usersResponse = await fetch("http://interview-env.eba-7ndyqgx6.us-east-2.elasticbeanstalk.com/users");
      const users = await usersResponse.json();

      setMessages(messages);
      setUsers(users);
    };

    getMessages();
  }, []);

  return (
    <div className="App">
      {JSON.stringify(messages)}
      <UserList users={users}/>
      <MessageUI />
      <ComposeMessage/>
    </div>
  )
}

export default App;