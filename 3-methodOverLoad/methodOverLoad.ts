type MessageType = "image" | "audio" | string;

type Message = {
  id: number;
  type: string;
  sendmessage: string;
};

let messages: Message[] = [
  {
    id: 1,
    type: "image",
    sendmessage: "你好",
  },
  {
    id: 2,
    type: "image",
    sendmessage: "哈哈",
  },
  {
    id: 3,
    type: "audio",
    sendmessage: "哈哈",
  },
  {
    id: 4,
    type: "audio",
    sendmessage: "哈哈",
  },
  {
    id: 5,
    type: "drunk",
    sendmessage: "哈哈",
  },
];

// 不用函数重载来实现查询消息
function getMessage(
  value: number | MessageType
): Message | undefined | Array<Message> {
  if (typeof value === "number") {
    return messages.find((msg) => msg.id === value);
  } else {
    return messages.filter((msg) => msg.type === value);
  }
}

console.log(getMessage(1), getMessage("image"));

export {};
