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
    </div>
  )
}

export default App;