import MessageList from './messageList';

const MessageUI = ({
  sent,
  received
}) => {
  return (
    <div>
      <MessageList sent={sent} received={received}/>
    </div>
  )
}

export default MessageUI;