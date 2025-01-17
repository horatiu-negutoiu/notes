
# LLM / Notes

## Prompt Components

[most-important]
- task      mandatory
- context   important
- exemplar  important
- persona   nice-to-haves
- format    nice-to-haves
- tone      nice-to-haves
[optional]


[Task] tips:
- always start the Task sentence with an `Action Verb` ex. Generate, Give, Write, Analyze, etc
- clearly articulate what the end goal is.
    Ex: One simple task:
        [Generate] a 3-month training program...
    Ex. Multi-task request:
        [Analyze] the collected user info, [summarize] the top 3 takeaways..., and [categorize] the rest based on the team...

[Context] tips:
- this is hard because you can technically give unlimited context here
- ...so it's important to limit the endless possibilities:
- ..ask yourself these questions:
1. What is the user's background?
2. What does success look like?
3. What environment are they in?
Ex: [background] I'm a 70kg male looking to [success] put on 5kg of weight over the next 3 months. [environment] I only have time to go to the gym twice a week, an hour each session.
Give me a 3-month training program to follow.
- the key is to give the LLM just enough information to constrain the endless possibilities

[Exemplars] tips:
- adding examples "drastically improves" quality of the output
- think "structure"

[Persona] tips:
- who do you want the LLM to be?
- think of someone you wish you had instant access to with the task you're facing
Ex: You are a senior product marketing manager responsible for...
- famous/fictional individuals are a good example only if they're famous enough

[Format] tips:
- you can specify the format you want the output to be in (ex: markdown, pydantic, etc)
- you can specify to have changes bolded

[Tone] tips:
Ex:
```
Use a casual tone of voice
Use a format tone of voice
Give me a witty output
Show enthusiasm
```
- tell LLM the feeling you're going for:
Ex:
```
I'm writing an email and i want to be taken seriously without coming off as too stuck up and cringey. Can you please give me a list of 5 tone keywords I can include in a prompt for ChatGPT?

=> Professional, Polite, Clear, Confident, Friendly

=> Use CLEAR and CONCISE language and write in a FRIENDLY yet CONFIDENT tone.
```


Another example:
```
...(instructions)...
The email should follow the exact same format as the one I will share below:
...
```

## ChatGPT's Suggestions

**System Message**

Use the system message to establish:
- Desired Persona: Define the role or expertise you want the AI to embody.
- Example: `You are a compassionate psychologist specializing in cognitive-behavioral therapy.`
- Desired Tone: Specify the tone or style of communication.
- Example: `Communicate in an encouraging and empathetic manner.`
- Desired Format: Outline the structure or format for the responses.
- Example: `Provide answers in numbered steps when explaining processes.`
- General Guidelines: Include any overarching instructions or constraints.
- Example: `Avoid using technical jargon unless necessary, and always provide real-life examples to illustrate points.`

Example:
```
You are a knowledgeable personal fitness coach with expertise in nutrition and exercise science. Communicate in a motivating and friendly tone. Provide actionable advice in bullet points, and use simple language that’s easy to understand.
```

**User Message**

In the user message, include:
- Task: Clearly state the specific request or question.
- Example: `Explain how mindfulness meditation can reduce anxiety.`
- Context: Provide background information or specifics that will help tailor the response.
- Example: `The explanation is for individuals new to meditation with no prior experience.`
- Exemplar: Offer examples or models of the desired response style or content (optional).
- Example: `Similar to how a beginner’s guide would introduce the topic.`

Example:
```
- Task: “Create a beginner’s workout plan for someone looking to improve cardiovascular health.”
- Context: “The individual has no prior fitness experience and can dedicate 30 minutes a day.”
- Exemplar: “Similar in style to the approachable plans found on popular fitness blogs.”
```

**Why This Structure?**

- Consistency: By setting the persona, tone, and format in the system message, you ensure that all responses align with these guidelines without repeating them each time.
- Clarity: Placing the task, context, and exemplars in the user message keeps each request focused and specific, which helps the AI generate accurate and relevant responses.
- Efficiency: This separation allows for more streamlined interactions, especially in ongoing conversations where the assistant’s role remains the same but the tasks change.

**Tips for Optimal Use**

- **Be Specific**: The more precise you are in both the system and user messages, the better the AI can tailor its responses.
- **Use Consistent Language**: Maintain consistent terminology to avoid confusion.
- **Adjust as Needed**: If the AI’s responses aren’t aligning as desired, refine the system message for better guidance.
