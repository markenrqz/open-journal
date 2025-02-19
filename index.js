import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var posts = [
    {
        id: 1,
        title: "How I Became an aGWENger (Bini Gwen Stan 🐨)",
        timestamp: "Nov 5, 2023 1:07am",
        content: `Sometimes, admiration happens in an instant. Other times, it grows over time, slowly unfolding as you learn more about a person’s story. For me, becoming an Agwenger—a fan of Bini Gwen—was a bit of both.

The first time I saw Bini, my attention was immediately drawn to her. I couldn’t explain it at first—there was just something about her that stood out. Even when the group performed together, my eyes kept going back to Gwen. It wasn’t until I saw her solo performance in Biniverse 2024 that everything finally made sense.

There was something about her presence that was impossible to ignore. She wasn’t just performing—she was owning the stage. Her movements were graceful yet powerful, her expressions were captivating, and the energy she radiated was something special. She wasn’t just delivering a performance; she was telling a story with her every move, making it impossible to look away.

That moment sparked my curiosity. I wanted to know more about her, about the person behind the dazzling performances. So, I did what every new fan does—I started searching. I watched interviews, read about her journey, and slowly pieced together the story of Gwen Apuli—not just as an idol, but as a person.

Her journey wasn’t an easy one. She worked hard, faced setbacks, and endured the kind of struggles that could break even the strongest of spirits. But what struck me the most wasn’t just her talent or her perseverance—it was her heart. Despite everything, she remained kind, humble, and full of warmth. It’s easy to let the world change you, to let hardships dull your light—but Gwen never did. She held onto who she was and kept shining just the same. That resilience, combined with her undeniable talent, made me respect and admire her even more.

Supporting Gwen just made sense. Watching her grow, overcome challenges, and shine in her own way made me want to cheer her on even more. She deserves all the love, recognition, and unwavering support—not just as an artist, but as a person who inspires so many.

So to Gwenny, if ever you happen to read this: keep shining, keep smiling, and keep being the amazing person that you are. The world is brighter with you in it, and I, along with so many others, will always be here to cheer you on. 💙✨`
    },
    {
        id: 2,
        title: "Choosing the Best Workout Split: Pros, Cons, and What Works for You",
        timestamp: "Jun 11, 2024 3:58pm",
        content: `When it comes to structuring your workouts, choosing the right split can make a huge difference in your progress, recovery, and overall enjoyment of training. Workout splits refer to how you organize your training sessions throughout the week, and each approach comes with its own advantages and disadvantages. Let’s break down the most common workout splits and help you determine which might be best for your fitness goals.

A full-body workout split is efficient, hitting all major muscle groups in a single session, making it great for those with busy schedules. It’s particularly beneficial for beginners looking to build a solid foundation. However, because all muscles are worked at once, fatigue can accumulate, potentially affecting performance. A full-body workout split is recommended if your goal is overall fitness, fat loss, or building a strong foundation as a beginner.

An upper/lower split allows for balanced volume and flexibility while ensuring muscle recovery, though the sessions can be long, making it less ideal for those short on time. An upper/lower split is recommended if your goal is to gain strength and muscle while maintaining a balanced approach to training.

The push/pull/legs (PPL) split offers specialized training for muscle groups and is excellent for strength and hypertrophy, but it requires a substantial time commitment and may not be suitable for beginners. A PPL split is recommended if your goal is to build muscle and strength with a structured approach to each muscle group.

A body-part split, commonly known as the bro split, allows for high volume per muscle group, making it a favorite among bodybuilders. However, since each muscle group is trained only once per week, it may not be the best for maximizing muscle growth frequency. A body-part split is recommended if your goal is muscle hypertrophy and maximizing definition in individual muscles.

The hybrid or customized split offers flexibility tailored to individual needs, making it highly effective, but it requires knowledge and experimentation to optimize results. A hybrid or customized split is recommended if your goal is to address specific weaknesses, optimize recovery, and tailor training to your unique needs.

There’s no universal “best” workout split—only the one that aligns with your goals, schedule, and consistency. What matters most is sticking with a plan that keeps you progressing and engaged. If you find yourself dreading workouts or seeing minimal results, it may be time to reassess and experiment with a new split. Are you training in a way that truly supports your fitness aspirations, or are you just following a routine out of habit? The answer could be the key to unlocking your full potential.`
    },
    {
        id: 3,
        title: "Game-Changing Technologies to Learn in 2025",
        timestamp: "Jan 2, 2025 7:07am",
        content: `Technology is evolving at an unprecedented rate, and staying ahead means keeping up with the latest advancements. Whether you’re a professional looking to upskill or an enthusiast eager to explore emerging innovations, 2025 is set to bring transformative technologies that will reshape industries. Here are the top technologies you should get to know and learn in 2025:

Artificial Intelligence (AI) and Generative AI continue to dominate, but in 2025, it's not just about automation—it’s about generative intelligence. Tools like ChatGPT, Midjourney, and Google Gemini are advancing rapidly, making AI a fundamental skill across industries. Key skills to learn include Machine Learning (TensorFlow, PyTorch), Natural Language Processing (NLP), and AI-driven automation tools.

Quantum computing is shifting from theory to real-world application, with companies like IBM, Google, and startups making breakthroughs. It promises exponential computational power, solving problems traditional computers cannot. Learning quantum algorithms such as Shor’s and Grover’s, quantum programming languages like Qiskit and Cirq, and concepts like superposition and entanglement will be highly valuable.

Blockchain and Decentralized Finance (DeFi) continue to grow, proving valuable in sectors like finance, supply chain, and identity verification. Important skills to acquire include smart contract development (Solidity, Rust), Web3 technologies and dApps, and an understanding of tokenomics and cryptography.

5G is becoming mainstream, but the next wave—6G—is already in development, promising ultra-fast speeds and lower latency. Learning wireless communication protocols, network security for 5G/6G, and edge computing applications will be advantageous.

Cybersecurity and Ethical Hacking are becoming more critical as cyber threats rise. Businesses need experts who can safeguard data from sophisticated cyberattacks. Relevant skills include ethical hacking (CEH, OSCP certification), zero-trust security models, and cloud security (AWS, Azure, Google Cloud).

Extended Reality (XR), which includes AR, VR, and MR, is expanding in gaming, education, and enterprise solutions. Key skills to learn include AR/VR development (Unity, Unreal Engine), 3D modeling and UX design, and haptic technology integration.

Green Tech and Sustainable Innovations are gaining momentum as sustainability becomes a priority. Learning carbon footprint analysis tools, renewable energy engineering, and sustainable AI and green cloud computing will be beneficial.

Biotechnology and AI in Healthcare are driving innovations in personalized medicine, drug discovery, and bioinformatics. Skills to learn include bioinformatics and genetic sequencing, AI applications in medicine, and digital health data analytics.

The future belongs to those who continuously learn and adapt. Whether you're starting fresh or upskilling, these fields offer exciting opportunities for innovation and career growth. Now’s the time to dive in!`
    },
    {
        id: 4,
        title: "The Science of Habit Formation: How to Build Good Habits and Break Bad Ones",
        timestamp: "Jan 7, 2025 6:30am",
        content: `Habits shape our lives more than we realize. From our morning routines to our daily work ethic, the small actions we repeat every day determine our success, health, and happiness. But how do habits form, and how can we use that knowledge to build better ones while breaking the bad?  

At the core of habit formation is the **cue-routine-reward loop**, a concept popularized by Charles Duhigg in *The Power of Habit*. This loop explains how habits are formed: a cue triggers the habit, leading to a routine that is reinforced by a reward. For example, feeling stressed (cue) might lead to eating junk food (routine), which provides temporary comfort (reward).  

To build a new habit, you need to attach it to an existing cue and ensure the reward is satisfying enough to reinforce the behavior. If you want to start working out, setting out your gym clothes the night before can serve as a cue, and rewarding yourself with a healthy smoothie afterward can strengthen the habit. On the other hand, breaking bad habits requires removing the cue, making the routine harder, and replacing the reward with something healthier. If you want to stop checking your phone before bed, leaving your phone in another room can disrupt the cycle.  

The key to long-term success is consistency over intensity. Habits don’t form overnight, but with small, repeated actions, they become second nature. What habit do you want to build today?`
    },
    {
        id: 5,
        title: "Mastering Time Management: How to Get More Done Without Burning Out",
        timestamp: "Jan 14, 2025 11:12pm",
        content: `Time is the one resource we all have in equal amounts, yet some people achieve more in a day than others do in a week. The secret? **Effective time management.** By learning how to structure your time wisely, you can maximize productivity without feeling overwhelmed.  

One powerful strategy is the **Eisenhower Matrix**, which categorizes tasks into four quadrants: urgent and important tasks should be done immediately, important but not urgent tasks should be scheduled, urgent but not important tasks should be delegated, and neither urgent nor important tasks should be eliminated. Another effective approach is the **80/20 Rule (Pareto Principle)**, which states that 80% of results come from 20% of efforts. Identifying high-impact tasks and focusing on them first can drastically improve efficiency.  

Time blocking is another essential tool that involves scheduling specific blocks of time for different tasks, minimizing distractions, and improving focus. Multitasking might seem efficient, but studies show it reduces overall productivity—focusing on one task at a time leads to better results. Additionally, following the **Two-Minute Rule**, which encourages tackling any task that takes less than two minutes immediately, prevents small tasks from piling up.  

Finally, scheduling downtime is just as crucial as scheduling work. Burnout reduces efficiency, so taking breaks, exercising, and unplugging from work help maintain long-term productivity. Mastering time management isn’t about doing more—it’s about doing what matters better. Implement one of these strategies today and watch your productivity soar.`
    },
    {
        id: 6,
        title: "Digital Detox: Why You Need One and How to Start",
        timestamp: "Jan 31, 2025 12:45am",
        content: `In today’s hyper-connected world, we spend an average of **seven or more hours a day** looking at screens. Social media, constant notifications, and digital overload can leave us feeling anxious, distracted, and mentally exhausted. A **digital detox** can help—but how do you unplug without feeling completely disconnected?  

Too much screen time negatively impacts focus, productivity, mental health, sleep quality, and relationships. Constant notifications interrupt deep work, making tasks take longer. Social media fosters comparison, which can lead to anxiety and lower self-esteem. Blue light from screens disrupts melatonin production, affecting sleep cycles. Most importantly, being glued to a screen often means missing out on meaningful real-life interactions.  

To start your digital detox, establish **screen-free zones** such as no phones at the dinner table or in bed. Turning off non-essential notifications can significantly reduce distractions, while following the **20-20-20 Rule**—every 20 minutes, taking a 20-second break to look at something 20 feet away—can help reduce eye strain. Replacing screen time with offline activities such as reading, exercising, or starting a hobby makes the transition easier. For those looking to reset completely, a **24-hour digital fast** without social media, emails, or news apps can provide clarity and refresh the mind.  

You don’t have to quit technology completely—just be intentional about **how** you use it. A small change, like limiting social media scrolling, can make a big difference in focus and well-being. Start small and enjoy the benefits of a clearer, more focused mind.`
    },
    {
        id: 7,
        title: "Why Learning a New Skill in 2025 is the Best Investment You Can Make",
        timestamp: "Feb 9, 2025 8:55pm",
        content: `The world is evolving fast, and **stagnation is the new failure**. Whether you want to advance your career, start a side hustle, or simply keep your mind sharp, learning a new skill is one of the best investments you can make in 2025.  

One of the biggest benefits of lifelong learning is **career growth and job security**. With automation replacing repetitive tasks, developing in-demand skills like **AI, coding, or data analysis** can future-proof your career. Many high-income professionals have learned valuable skills outside of formal education through platforms like Coursera, Udemy, and YouTube. Learning new skills can also **increase your income potential**, whether through a promotion, freelancing, or entrepreneurship.  

Beyond financial benefits, continuous learning **boosts mental agility** by strengthening neural pathways, keeping the brain adaptable as we age. It also opens the door to **new opportunities**, whether through side hustles, passion projects, or career pivots. Personal development is another advantage—mastering a new skill builds confidence and provides a sense of accomplishment.  

Some of the best skills to learn in 2025 include **tech and AI (machine learning, cloud computing, blockchain), business and finance (investing, digital marketing, entrepreneurship), and creative skills (video editing, public speaking, copywriting)**. The world rewards those who adapt. The best part? You don’t need a degree—just curiosity and consistency. What skill will you learn this year?`
    }
];


//List all blog posts
app.get("/", (req, res) => {
    var sortedPosts = posts.slice().reverse();
    res.render("index.ejs", {posts: sortedPosts});
});

//Create a new blog post (form)
app.get("/new", (req, res) => {
    res.render("new.ejs");
});

//Create new blog post (submit)
app.post('/new', (req, res) => {
    let newPost = {
        id: posts.length + 1,
        title: req.body.title,
        timestamp: req.body.timestamp,
        content: req.body.content
    };
    posts.push(newPost);
    res.redirect('/');
});

//View a single blog post
app.get('/post/:id', (req, res) => {
    console.log(`Requested ID: ${req.params.id}`); // Debugging
    var post = posts.find(p => p.id == req.params.id);
    if (post) {
        res.render('post.ejs', { post });
    } else {
        res.send("Post not found!");
    }
});

//Edit a single blog post (form)
app.get('/post/:id/edit', (req, res) => {
    var post = posts.find(p => p.id == req.params.id);
    if (post) {
        res.render('edit.ejs', { post });
    } else {
        res.send("Post not found!");
    }
});

//Update a single blog post (submit)
app.post('/post/:id', (req, res) => {
    let postIndex = posts.findIndex(p => p.id == req.params.id); // Find index of post

    if (postIndex !== -1) {
        // Update the post directly in the array
        posts[postIndex].title = req.body.title;
        posts[postIndex].content = req.body.content;
        res.redirect(`/post/${req.params.id}`); // Redirect to homepage after saving
    } else {
        res.status(404).send("Post not found!");
    }
});

//Delete a single blog post
app.post("/post/:id/delete", (req, res) => {
    var postIndex = posts.findIndex(p => p.id == req.params.id); // Find index of the post

    if (postIndex !== -1) { // If found, delete it
        posts.splice(postIndex, 1); // Remove only that item
    }

    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });