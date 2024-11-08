import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import OpenAI from "openai";
import ReactMarkdown from "react-markdown";
import _ from "lodash";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Container = (props) => {
  return <div className={styles.chatBotContainer}>{props.children}</div>;
};

const aiBulbIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8.406 7.97c-.386.44-.856.8-1.385 1.061v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.5A4.5 4.5 0 0 1 6.875.9M3.021 13.5h4" />
      <path d="M7.395 3.934c-.351-.061-.351-.565 0-.626A3.176 3.176 0 0 0 9.953.858L9.974.76c.076-.347.57-.349.649-.003l.026.113a3.193 3.193 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.193 3.193 0 0 0 10.65 6.37l-.026.113c-.079.346-.573.344-.649-.003l-.02-.097a3.176 3.176 0 0 0-2.56-2.45Z" />
    </g>
  </svg>
);

const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    />
  </svg>
);

const ParseableLogo = () => {
  return (
    <div className={styles.avatarParseable}>
      <img src={useBaseUrl("img/chat.svg")} />
    </div>
  );
};

const UserHead = () => {
  return (
    <div className={styles.userAvatar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

const Message = (props) => {
  const { message } = props;
  const fromUser = message.from === "user";
  return (
    <div className={styles.messageContainer}>
      <div
        className={styles.avatarSectionContainer}
        style={{ display: "flex", overflow: "hidden", width: "16%" }}
      >
        <div
          className={styles.avatarSection}
          style={{
            position: "relative",
            width: "100%",
            margin: "0 0 0 0.9rem",
          }}
        >
          {fromUser ? <UserHead /> : <ParseableLogo />}
        </div>
      </div>
      <div className={styles.messageSection}>
        <div className={styles.messageTitle}>
          {fromUser ? "You" : "Parseable Docs Bot"}
        </div>
        <ReactMarkdown className={styles.messageText}>
          {message.text}
        </ReactMarkdown>
        {/* <div className={styles.messageText}>{message.text}</div> */}
      </div>
    </div>
  );
};

const ChatHeader = () => {
  return (
    <div className={styles.chatHeaderContainer}>
      <div className={styles.chatHeaderTitleContainer}>
        <div className={styles.chatHeaderTitle}>Chat with Parseable Docs</div>
        <div className={styles.sparklesIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className={styles.chatHeaderSubTitle}>
        Ask about Parseable capabilities and offerings
      </div>
    </div>
  );
};

const loadingMessage = { from: "ai", text: "✨ Generating response ..." };

const questionInPills = {
  Callback: "I need a callback",
  "Enterprise features": "Need to know more about enterprise features",
  "Dedicated support":
    "Does Parseable provide dedicated support for maintenance?",
};

const navigateToContactUs = () => {
  return window.open("https://www.parseable.com/contact", "_blank");
};

const QuestionPills = (props) => {
  const { setUserMessage } = props;
  return (
    <div className={styles.pillsContainer}>
      {_.map(questionInPills, (question, k) => {
        const onClick =
          k === "Callback"
            ? navigateToContactUs
            : () => setUserMessage(question);
        return (
          <span className={styles.pill} onClick={onClick}>
            {k}
          </span>
        );
      })}
    </div>
  );
};

const Messages = (props) => {
  const { messages = [], isLoading, setUserMessage } = props;
  const messagesToShow = [...messages, ...(isLoading ? [loadingMessage] : [])];
  return (
    <div className={styles.messageList} style={{ position: "relative"}}>
      {messagesToShow.map((message, index) => {
        return (
          <div style={{marginTop: index === 0 ? "1rem" : 0}}>
            <Message message={message} />
            {index % 2 === 0 &&
              !isLoading &&
              index + 1 === _.size(messages) && (
                <QuestionPills setUserMessage={setUserMessage} />
              )}
          </div>
        );
      })}
      {/* <div ref={listRef} style={{ height: 60, width: 20 }} /> */}
    </div>
  );
};

const SearchInput = (props) => {
  const { setUserMessage, isLoading } = props;
  const placeholder = isLoading ? "Please wait" : "Ask Anything";
  const inputRef = useRef(null);

  const handleEnterKeyPress = useCallback((event) => {
    const inputValue = inputRef.current.value;
    if (event.key === "Enter" && inputValue && inputValue.length > 0) {
      setUserMessage(inputRef.current.value);
      inputRef.current.value = null;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleEnterKeyPress);
    return () => {
      window.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, []);

  return (
    <div className={styles.searchInputContainer}>
      <input
        ref={inputRef}
        className={styles.searchInput}
        placeholder={placeholder}
        disabled={isLoading}
      />
    </div>
  );
};

const defaultMessages = [
  {
    from: "ai",
    text: "Hey there! Got any questions about Parseable? I'm here to help! 🌟",
  },
];

const LoadingMessage = () => {
  return (
    <div className={styles.loadingMessageContainer}>
      <div className={styles.rotatingIcon}>
        <img src={useBaseUrl("img/sparkles.svg")} />
      </div>
      <div className={styles.loadingMessage}>Generating response...</div>
    </div>
  );
};

const parseResponse = (response) => {
  const message = response.data.pop();

  if (message.content[0].type === "text") {
    const { text } = message.content[0];
    const { annotations } = text;

    let index = 0;
    for (let annotation of annotations) {
      text.value = text.value.replace(annotation.text, "[" + index + "]");
      index++;
    }
    return _.replace(text.value, /\[\d\]\.|\[\d\]\n/g, ".");
  } else {
    return "Something went wrong";
  }
};

const fetchResponse = async (openai, content = "", threadId, assistantId) => {
  try {
    await openai.beta.threads.messages.create(threadId, {
      content,
      role: "user",
    });
    const run = await openai.beta.threads.runs.createAndPoll(threadId, {
      assistant_id: assistantId,
    });
    const response = await openai.beta.threads.messages.list(threadId, {
      run_id: run.id,
    });

    return parseResponse(response);
  } catch (e) {
    console.log(e);
    return "Error getting response from OpenAI";
  }
};

const ChatBot = (props) => {
  const { messages = [], isLoading, setUserMessage } = props;
  return (
    <Container>
      <ChatHeader />
      <Messages
        messages={messages}
        isLoading={isLoading}
        setUserMessage={setUserMessage}
      />
      <SearchInput setUserMessage={setUserMessage} isLoading={isLoading} />
    </Container>
  );
};

const genThreadId = async (openai) => {
  try {
    const thread = await openai.beta.threads.create();
    return thread.id;
  } catch (e) {
    return "";
  }
};

const docSearchThreadKey = "doc_search_thread_id"

const ChatBotMessgae = () => {
  const [chatPopupOpen, setChatPopupOpen] = useState(false);
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const openai = new OpenAI({
    apiKey: customFields.openAiKey,
    dangerouslyAllowBrowser: true,
  });

  useEffect(() => {
    localStorage.removeItem(docSearchThreadKey)
  }, [])

  const toggleChatPopup = useCallback(() => {
    setChatPopupOpen((prev) => !prev);
  }, []);
  const [messages, setMessages] = useState(defaultMessages);
  const [isLoading, setLoading] = useState(false);
  const getResponse = useCallback(async (text) => {
    const threadId = localStorage.getItem(docSearchThreadKey)
    const isValidThreadId = _.isString(threadId);
    const localThreadId = isValidThreadId ? threadId : await genThreadId(openai);
    if (!isValidThreadId) {
      // setting for first time
      localStorage.setItem(docSearchThreadKey, localThreadId)
    }
    const aiResponse = await fetchResponse(openai, text, localThreadId, customFields.openAiAssistantId);
    setLoading(false);
    setMessages((prev) => [...prev, { from: "ai", text: aiResponse }]);
  }, []);

  const setUserMessage = useCallback((text) => {
    if (isLoading) return;

    setMessages((prev) => [...prev, { from: "user", text }]);
    setLoading(true);
    getResponse(text);
  }, []);

  return (
    <div
      className={styles.aiBulbIcon}
      style={{ ...(chatPopupOpen ? { paddingLeft: 0 } : {}) }}
    >
      {chatPopupOpen && (
        <ChatBot
          messages={messages}
          setUserMessage={setUserMessage}
          isLoading={isLoading}
        />
      )}
      <div onClick={toggleChatPopup}>
        {chatPopupOpen ? closeIcon : aiBulbIcon}
      </div>
    </div>
  );
};

export default ChatBotMessgae;
