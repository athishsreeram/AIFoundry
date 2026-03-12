/* DesignForge — Shared Data & Utilities */
window.DF = window.DF || {};

/* ── NAV helper ── */
DF.nav = function(active) {
const links = [
{ href:‘problems.html’, label:‘Problems’ },
{ href:‘ai-lab.html’,   label:‘AI Lab’ },
{ href:‘interview.html’,label:‘Interview’ },
{ href:‘dashboard.html’,label:‘Dashboard’ },
];
return `<nav class="nav"> <div class="orb orb-1"></div><div class="orb orb-2"></div><div class="orb orb-3"></div> <a href="index.html" class="nav-logo"><div class="logo-mark">⚡</div>DesignForge</a> <ul class="nav-links"> ${links.map(l=>`<li><a href=”${l.href}” ${l.href===active?‘class=“active”’:’’}>${l.label}</a></li>`).join(’’)}
</ul>
<div class="nav-right">
<button class="btn btn-ghost btn-sm">Sign In</button>
<button class="btn btn-primary btn-sm">Get Started</button>
</div>

  </nav>`;
};

/* ── REVEAL OBSERVER ── */
DF.observe = function() {
const io = new IntersectionObserver(entries => {
entries.forEach((e,i) => { if(e.isIntersecting){ setTimeout(()=>e.target.classList.add(‘in’), i*60); io.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll(’.reveal’).forEach(el => io.observe(el));
};

/* ── PROBLEMS DATA ── */
DF.problems = [
/* ─ FOUNDATION DSA ─ */
{ id:1,  track:‘dsa’,    title:‘Two Sum’,                     diff:‘Easy’,   tags:[‘Array’,‘HashMap’],              companies:[‘Google’,‘Amazon’],          solved:false, aiLens:‘Hash maps are the backbone of LLM vocabulary lookup tables.’ },
{ id:2,  track:‘dsa’,    title:‘Sliding Window Maximum’,       diff:‘Hard’,   tags:[‘Sliding Window’,‘Deque’],       companies:[‘Meta’,‘Microsoft’],         solved:true,  aiLens:‘Attention mechanisms use windowed context — same constraint.’ },
{ id:3,  track:‘dsa’,    title:‘LRU Cache’,                   diff:‘Medium’, tags:[‘Design’,‘LinkedList’,‘HashMap’],companies:[‘Amazon’,‘Apple’],           solved:true,  aiLens:‘LLM KV-cache eviction follows exact LRU semantics.’ },
{ id:4,  track:‘dsa’,    title:‘Graph BFS Shortest Path’,     diff:‘Medium’, tags:[‘Graph’,‘BFS’],                  companies:[‘Google’,‘Uber’],            solved:false, aiLens:‘BFS maps to chain-of-thought shortest reasoning path.’ },
{ id:5,  track:‘dsa’,    title:‘Trie — Autocomplete’,         diff:‘Medium’, tags:[‘Trie’,‘String’],                companies:[‘Google’,‘LinkedIn’],        solved:false, aiLens:‘Tokenizer prefix trees are Tries at scale.’ },
{ id:6,  track:‘dsa’,    title:‘Dynamic Programming — Coins’, diff:‘Medium’, tags:[‘DP’,‘Greedy’],                  companies:[‘Amazon’,‘Stripe’],          solved:false, aiLens:‘Beam search in LLMs is DP over token probability paths.’ },
{ id:7,  track:‘dsa’,    title:‘Merge K Sorted Lists’,        diff:‘Hard’,   tags:[‘Heap’,‘LinkedList’],            companies:[‘Google’,‘Meta’],            solved:false, aiLens:‘Merging document retrieval results (RAG) uses k-way merge.’ },
{ id:8,  track:‘dsa’,    title:‘Binary Search on Answer’,     diff:‘Medium’, tags:[‘Binary Search’],                companies:[‘Netflix’,‘Airbnb’],         solved:false, aiLens:‘Hyperparameter search is binary search in disguise.’ },

/* ─ SYSTEM DESIGN ─ */
{ id:9,  track:‘system’, title:‘Design YouTube’,              diff:‘Hard’,   tags:[‘CDN’,‘Streaming’,‘Storage’],    companies:[‘Google’,‘Netflix’],         solved:false, aiLens:‘Same chunked-upload pattern used for large model weights.’ },
{ id:10, track:‘system’, title:‘Design Twitter Feed’,         diff:‘Hard’,   tags:[‘Fan-out’,‘Cache’,‘NoSQL’],      companies:[‘Twitter’,‘Meta’],           solved:true,  aiLens:‘RLHF data pipelines fan-out exactly like tweet distribution.’ },
{ id:11, track:‘system’, title:‘Design URL Shortener’,        diff:‘Easy’,   tags:[‘Hashing’,‘Redirect’],           companies:[‘Amazon’,‘Stripe’],          solved:true,  aiLens:‘Prompt caching uses content-addressed keys — same idea.’ },
{ id:12, track:‘system’, title:‘Design Rate Limiter’,         diff:‘Medium’, tags:[‘Redis’,‘Distributed’],          companies:[‘Stripe’,‘Cloudflare’],      solved:false, aiLens:‘LLM API rate limiting is this exact problem at scale.’ },
{ id:13, track:‘system’, title:‘Design Dropbox’,              diff:‘Hard’,   tags:[‘Sync’,‘Delta’,‘Conflict’],      companies:[‘Dropbox’,‘Apple’],          solved:false, aiLens:‘Model weight syncing across GPU nodes is distributed file sync.’ },
{ id:14, track:‘system’, title:‘Design a Search Engine’,      diff:‘Hard’,   tags:[‘Inverted Index’,‘Ranking’],     companies:[‘Google’,‘Bing’],            solved:false, aiLens:‘RAG retrieval is semantic search — inverted index at heart.’ },
{ id:15, track:‘system’, title:‘Design Notification Service’, diff:‘Medium’, tags:[‘Queue’,‘Push’,‘Fan-out’],       companies:[‘Meta’,‘Uber’],              solved:false, aiLens:‘Agent event systems route tool-call results like notifications.’ },

/* ─ AI ENGINEERING ─ */
{ id:16, track:‘ai’,     title:‘Fix the Broken Prompt’,       diff:‘Easy’,   tags:[‘Prompt Eng’,‘Reasoning’],       companies:[‘OpenAI’,‘Anthropic’],       solved:false, aiLens:‘Core skill: diagnose prompt failures before writing a single token.’ },
{ id:17, track:‘ai’,     title:‘Design a RAG Pipeline’,       diff:‘Medium’, tags:[‘RAG’,‘Embeddings’,‘Retrieval’], companies:[‘Google’,‘Cohere’],          solved:false, aiLens:‘Retrieval-Augmented Generation — the new system design.’ },
{ id:18, track:‘ai’,     title:‘Token Budget Challenge’,       diff:‘Medium’, tags:[‘Efficiency’,‘Cost’,‘Context’],  companies:[‘Anthropic’,‘OpenAI’],       solved:false, aiLens:‘Fit a complex multi-step task under 500 tokens. Real constraint.’ },
{ id:19, track:‘ai’,     title:‘Design a Multi-Agent System’, diff:‘Hard’,   tags:[‘Agents’,‘Orchestration’,‘MCP’], companies:[‘OpenAI’,‘Cognition’],       solved:false, aiLens:‘Orchestrator + specialist agents — the new microservices.’ },
{ id:20, track:‘ai’,     title:‘Eval Framework Design’,        diff:‘Hard’,   tags:[‘Evals’,‘Testing’,‘Metrics’],    companies:[‘Anthropic’,‘Scale AI’],     solved:false, aiLens:‘Write evals for non-deterministic outputs — the hardest part of AI eng.’ },
{ id:21, track:‘ai’,     title:‘Debug the Hallucinating Agent’,diff:‘Medium’, tags:[‘Debugging’,‘Tracing’,‘Agents’],companies:[‘LangChain’,‘Dust’],         solved:false, aiLens:‘Given a broken agent trace — find and fix the failure mode.’ },
{ id:22, track:‘ai’,     title:‘LLM Caching Architecture’,    diff:‘Medium’, tags:[‘Caching’,‘Latency’,‘Cost’],     companies:[‘Anthropic’,‘Groq’],         solved:false, aiLens:‘Semantic + exact-match caching to cut LLM costs by 60%.’ },
{ id:23, track:‘ai’,     title:‘Fine-Tune vs Prompt Decision’,diff:‘Easy’,   tags:[‘Strategy’,‘Fine-tuning’],       companies:[‘OpenAI’,‘Mistral’],         solved:false, aiLens:‘When to fine-tune, when to prompt-engineer, when to RAG.’ },
];

DF.trackMeta = {
dsa:    { label:‘DSA Foundation’, color:‘var(–cyan)’,   icon:‘🧮’, desc:‘Master algorithms with an AI lens’ },
system: { label:‘System Design’,  color:‘var(–purple)’, icon:‘🏗️’, desc:‘Design systems that scale to billions’ },
ai:     { label:‘AI Engineering’, color:‘var(–orange)’, icon:‘🤖’, desc:‘The new frontier — prompt, agent, eval’ },
};

DF.aiLabChallenges = [
{
id:‘pe1’, type:‘prompt’, title:‘Zero-Shot to Few-Shot Upgrade’,
diff:‘Easy’, xp:150,
desc:‘You have a prompt that extracts structured JSON from messy user reviews. It works 60% of the time. Upgrade it to work 95%+ of the time using few-shot examples and output formatting constraints.’,
brokenPrompt:`Extract sentiment and product name from this review:\n{{review}}\n\nRespond with JSON.`,
targetOutput:`{ "product": "AirPods Pro", "sentiment": "positive", "score": 0.87, "key_phrase": "noise cancellation is incredible" }`,
hints:[‘Add 2-3 worked examples before the actual input’,‘Specify exact JSON schema in the prompt’,‘Tell the model what NOT to do’],
},
{
id:‘pe2’, type:‘prompt’, title:‘Chain-of-Thought Injection’,
diff:‘Easy’, xp:200,
desc:`A math reasoning prompt keeps getting wrong answers on multi-step problems. Inject chain-of-thought reasoning to dramatically improve accuracy.`,
brokenPrompt:`Q: A train travels 60mph for 2.5 hours then 80mph for 1.5 hours. What is the total distance?\nA:`,
targetOutput:`Let me work through this step by step:\n1. First segment: 60 mph × 2.5 hours = 150 miles\n2. Second segment: 80 mph × 1.5 hours = 120 miles\n3. Total distance: 150 + 120 = 270 miles\n\nThe answer is 270 miles.`,
hints:[‘Add “Let's think step by step”’,‘Break the problem into numbered sub-problems’,‘Ask the model to verify its answer’],
},
{
id:‘pe3’, type:‘token’, title:‘Token Budget Crunch’,
diff:‘Medium’, xp:350,
desc:‘You have a customer support agent that costs $0.08 per conversation. Reduce it to under $0.02 without sacrificing quality. Rewrite the system prompt to be ruthlessly efficient.’,
brokenPrompt:`You are a highly professional, empathetic, and knowledgeable customer support specialist for TechCorp, a leading technology company. Your role is to assist customers with their queries, resolve their issues, and ensure they have a positive experience. You should always be polite, patient, and thorough in your responses. When addressing customer concerns, make sure to acknowledge their feelings, provide clear and concise solutions, and follow up to ensure their satisfaction. You have access to order information, product documentation, and escalation procedures...`,
targetOutput:`CS agent for TechCorp. Be concise, helpful, accurate. Resolve issues using: order data, docs, escalation. Ask clarifying questions when needed.`,
hints:[‘Cut adjectives and filler phrases’,‘Use imperative not descriptive language’,‘Every word must earn its place’],
},
{
id:‘ag1’, type:‘agent’, title:‘Design a Research Agent’,
diff:‘Hard’, xp:500,
desc:‘Design the tool schema, system prompt, and orchestration loop for an agent that: takes a research question, searches the web, reads pages, synthesizes findings, and writes a structured report. Show your agent architecture.’,
brokenPrompt:`You are a research agent. Search the web and write reports.`,
targetOutput:`# Agent Architecture\n\n## Tools\n- web_search(query: str) → results[]\n- fetch_page(url: str) → content\n- write_section(title: str, content: str)\n\n## System Prompt\nYou are a methodical research agent...\n\n## Orchestration Loop\n1. Parse research question → extract key terms\n2. Generate 3 search queries (broad → specific)\n...`,
hints:[‘Define explicit tool schemas first’,‘Build in a planning step before searching’,‘Add a quality-check loop before finalizing’],
},
{
id:‘ag2’, type:‘agent’, title:‘Debug This Agent Trace’,
diff:‘Medium’, xp:400,
desc:‘Below is a real agent trace that went wrong — the agent was asked to book a flight but ended up in an infinite loop. Identify all failure modes and rewrite the system prompt + loop logic to fix them.’,
brokenPrompt:`[Trace]\nUser: Book me a flight to NYC next Friday\nAgent: Searching flights... [tool: search_flights(dest="NYC", date="next Friday")]\nTool: ERROR: date format invalid\nAgent: Let me try again... [tool: search_flights(dest="NYC", date="next Friday")]\nTool: ERROR: date format invalid\nAgent: Searching again... [tool: search_flights(dest="NYC", date="next Friday")]\n...repeated 12 more times`,
targetOutput:`Failure modes identified:\n1. No error handling — agent retries identical call\n2. Date not resolved to ISO format before tool call\n3. No max-retry limit\n4. No fallback to ask user for clarification\n\nFixed orchestration:\n- Parse relative dates → ISO-8601 before any tool call\n- catch(ToolError) → modify params or ask user\n- MAX_RETRIES = 2 then escalate`,
hints:[‘List ALL failure modes before fixing any’,‘Add error handling at the orchestration level’,‘Relative dates must be resolved before tool calls’],
},
];

DF.userStats = {
name: ‘Alex Chen’,
level: 7, xp: 4200, xpNext: 5000,
streak: 12,
readinessScore: 68,
solved: { dsa: 6, system: 3, ai: 2 },
total:  { dsa: 8, system: 7, ai: 8 },
radar: { ‘DSA’:62, ‘System Design’:55, ‘Prompt Eng’:78, ‘Agent Design’:45, ‘Evals’:30 },
recentActivity: [
{ date:‘Today’,      problem:‘LRU Cache’,            track:‘dsa’,    xp:150 },
{ date:‘Yesterday’,  problem:‘Twitter Feed Design’,  track:‘system’, xp:300 },
{ date:‘2 days ago’, problem:‘Fix the Broken Prompt’,track:‘ai’,     xp:200 },
{ date:‘3 days ago’, problem:‘Two Sum’,              track:‘dsa’,    xp:100 },
{ date:‘4 days ago’, problem:‘URL Shortener’,        track:‘system’, xp:250 },
],
studyPlan: [
{ day:‘Mon’, tasks:[‘Trie Autocomplete’,‘Token Budget Challenge’],    done:true  },
{ day:‘Tue’, tasks:[‘Graph BFS’,‘Design RAG Pipeline’],               done:true  },
{ day:‘Wed’, tasks:[‘Merge K Lists’,‘Debug Hallucinating Agent’],     done:false },
{ day:‘Thu’, tasks:[‘Design Dropbox’,‘Eval Framework Design’],        done:false },
{ day:‘Fri’, tasks:[‘Mock Interview — System Design’],                done:false },
{ day:‘Sat’, tasks:[‘Review weak areas’,‘Token Budget #2’],           done:false },
{ day:‘Sun’, tasks:[‘Rest / optional: company-mode practice’],        done:false },
],
weakAreas: [‘Evals’,‘Agent Design’,‘Graph DP’],
};