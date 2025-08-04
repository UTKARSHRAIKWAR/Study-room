from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import RunnableLambda 

load_dotenv()

#create chat  model
llm = ChatGroq(model="llama-3.1-8b-instant")

#define prompt template
teacher_template = ChatPromptTemplate.from_messages(
    [
        ("system","You are teacher and explain briefly to your student."),
        ("human","{learnPrompt}"),
    ]
)


chain = teacher_template | llm | StrOutputParser()

result = chain.invoke({"learnPrompt":"react"})

print(result)