# Break-Buddy
Break Buddy supports designers’ wellbeing with white noise, meditation, and AI chat—filling the wellness gap in design tools, because designers' wellbeing make the real difference.
# Break Buddy – Product Design Report  
**An Adobe Add-on for Mental Wellness in Design Professionals**

---

## Inspiration  
As designers, we build tools that help others—but rarely ones that help ourselves. From Reddit burnout confessions to Mentally-healthy Survey and TBWA research, the pattern is clear: creatives are emotionally exhausted. *Break Buddy* was born from this insight. It exists to protect creativity by first protecting the creator.

---

## What it Does  
**Break Buddy** is a mental wellness add-on for Adobe Express, offering:

- **White Noise Player**  
  Built-in and user-uploaded calming sounds to create a tranquil workspace.

- **Pomodoro Timer**  
  Custom minute focus sessions with gentle break prompts.

- **Meditation Tab**  
  Offers small wellness tasks like “walk around” and “breathe deeply” to encourage micro-recovery.

- **AI Wellness Chatbox**  
  A custom-tuned conversational AI that helps users de-stress with light check-ins, affirmations, and guided reflection—right inside the creative workspace.

- **Gamification Features**  
  Earn points, track streaks, and unlock badges for maintaining healthy design habits.

---

## How We Built It  
- **Frontend**: HTML/CSS/JavaScript/OpenAI API(not added for safety issue)
- **Adobe SDK**: Utilizes Adobe Express Add-on & Sandbox SDK for direct integration  
- **Custom AI Integration**:  
  - Embedded OpenAI (or equivalent) chat API  
  - Fine-tuned prompts to support empathy, mental reset, and stress deflection  
  - Safeguarded tone: not therapeutic or diagnostic, but affirming and friendly  
- **Gamification**: localStorage-based tracking of breaks, streaks, and engagement milestones  looking into possibility of cookies
- **Branding**: Custom UI with "Break Buddy" mascot, a calming white rabbit  

---

## Challenges We Faced  
- Installing trusted local SSL certs (especially on Windows)  
- Balancing gamification without increasing performance pressure  
- Designing an empathetic AI that feels natural but avoids clinical overreach  
- Making wellness UI subtle, not distracting, within a creative workflow

---

## Accomplishments We're Proud Of  
- Seamless navigation across all wellness modes  
- Lightweight, mood-aligned UI built for creative professionals  
- Functional Pomodoro-to-canvas message interaction  (need document.js on testing stage)
- Custom AI chatbox tailored to emotional tone and focus reset

---

## What We Learned  
- Burnout stems from broken systems, not broken people  
- A gentle “pause” can be more powerful than a push notification  
- Designers appreciate tools that recognize *them*—not just their output  
- Mental health support can and should be baked into creative platforms

---

## What's Next for Break Buddy  
- Sentiment-tracking and daily wellness summaries  
- Shared team breaks and leaderboards  
- Spotify/YouTube API integrations for richer white noise libraries  
- Publish to Adobe Add-On Marketplace  
- Browser extension version for multi-platform users  

---

## Citation and Industry Stats  
- **WeTransfer Ideas Report 2022**: 75% of creatives report burnout  
https://wetransfer.com/ideas-report/2022/insights/boundaries
- **Mentally-Healthy Survey 2024**: 70% of industry has experienced burnout  
https://campaignbrief.com/mentally-healthy-survey-2024-reveals-70-of-industry-has-experienced-burnout/
- **Reddit Meta Analysis**: Sample of 70+ user responses from r/design and r/graphic_design  (thread not share for ethical consideration in surveying want to look into the report: https://docs.google.com/document/d/1tCaUKJqNkR2QyTYYGW5EW5WXG0sXlqBcLoPfvS_FSwI/edit?usp=sharing)

---

## Problem Statement  

> “I'm still not very happy as I'm being pushed to find another job... but I'm terrified of going back to how I felt at my worst... I started speaking to a therapist which definitely helps.”  
> — Designer on Reddit

### Common Industry Stressors:
- Overwork and role compression  
- Lack of recognition and respect  
- Poor work-life boundaries  
- Mental fatigue and cynicism

---

## Solution Summary  

**Break Buddy** addresses these challenges by offering:  
- Structured focus and rest tools  
- Custom white noise options  
- Micro-meditation routines  
- AI-powered mental support  
- Gamified habit-building  

Normally not considered as a design tool in established design software extensions, *Break Buddy* want to help Adobe Express users with the mental workload they face during design process as Break Buddy acknowledges that tools don’t design—**people do**. And people need care to create their best work.
