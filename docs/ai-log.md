# AI Assistance Log

## Shared Prompt

> Act as a senior teaching assistant. Propose a minimal Next.js App Router + TypeScript + Tailwind starter for a neighborhood property platform. Give a file plan, terminal commands, accessibility requirements, and a verification checklist. Never invent command results or credentials. Keep the response concise and do not provide a giant code dump.

| Tool | Prompt | Output used | Output rejected | Verification | Commit |
|---|---|---|---|---|---|
| ChatGPT | Shared prompt plus step-by-step implementation questions | Semantic `main`, `header`, `section`, and `article` structure; project purpose; three feature cards | Extra features and dependencies unnecessary for the starter | Viewed the page locally and ran lint and build | `209bd27` |
| Gemini | Shared prompt | Accessibility checklist, logical headings, contrast guidance, and verification checklist | Optional packages, extra component, and configuration files that did not match the generated Next.js 16 project | Compared the advice with the real project and verified selected recommendations through lint and build | Advice only |
| Google AI Studio | Shared prompt and shorter retry in `App Shell Architect` | None—the tool did not generate a response | `Request contains an invalid argument` | Retried with a refreshed chat and shorter prompt; saved screenshots of both failures | Tool error |

## Comparison

1. ChatGPT kept the three cards in `src/app/page.tsx`. Gemini proposed a separate `PropertyCard.tsx` component and additional packages.
2. Gemini provided more detailed accessibility guidance, including contrast ratios, screen-reader testing, image descriptions, and focus indicators. ChatGPT focused on the semantic structure needed for the current starter.

## Decisions

- I kept the starter small because it currently has only three informational cards.
- I used semantic headings and `article` elements.
- I rejected unnecessary packages because the current page does not need them.
- I did not use AI Studio output because the service returned an invalid-argument error twice.
- I did not include credentials, API keys, or invented command results.