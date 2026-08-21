Ather I Os Widget – Ux Case Study
⚡ Ather iOS Widget – UX Case Study (DEX-Style)
1. Context

Product: Ather App (Concept Project)

Platform: iOS (WidgetKit)

Role: UX Designer

User Context: Ather rider & daily app user

Focus: Small & Medium widgets only

This project is a self-initiated UX case study grounded in a real, recurring problem I experience as an Ather rider, explored through a product and platform-conscious design lens.

2. The Problem

In my day-to-day usage, I frequently open the Ather app for just one reason:

To check the current battery percentage

This action is:

Simple

Repetitive

Time-sensitive

Yet it requires a full app launch every time.

Problem statement:

As an Ather rider, accessing battery status requires disproportionate effort for a simple, high-frequency need.

3. Why This Matters

Battery status is a confidence signal for EV riders.

Before stepping out, users often ask:

“How much charge do I have?”

“Do I need to charge before riding?”

Reducing friction at this moment improves trust, speed, and daily usability.

4. Platform Constraints

This solution was designed within Apple’s WidgetKit and Human Interface Guidelines:

Widgets are glanceable, not interactive

No controls or quick actions allowed

System-managed refresh frequency

Strict privacy rules on the Lock Screen

Rather than treating these constraints as limitations, the design intentionally uses them to drive clarity and focus.

5. Design Goal

Design a lightweight, platform-native iOS widget that:

Answers the battery status question in under 2 seconds

Reduces unnecessary app opens

Feels native to iOS

Maintains user trust through honest data states

6. Scope & Focus

To maintain clarity and avoid feature creep, the scope was deliberately constrained to:

Small widget → Instant battery check

Medium widget → Battery with contextual clarity

Large widgets were excluded to preserve glanceability.

7. Information Architecture

A clear hierarchy guided all layouts:

Battery percentage (primary)

Charging state (secondary)

Estimated range (context)

Last updated time (trust indicator)

Lower-priority information is progressively removed on smaller widgets.

8. Solution Overview
Small Widget

User question:

“How much charge do I have right now?”

Content:

Battery percentage (hero)

Charging / Parked state

UX rationale:

Large numeric emphasis for instant readability

Minimal text

One-second comprehension

Medium Widget

User question:

“Do I have enough charge for my next ride?”

Content:

Battery percentage

Charging state

Estimated range

Last updated timestamp

UX rationale:

Adds context without adding complexity

Supports quick decision-making

Maintains trust with data freshness

9. Visual Design Decisions

SF Pro system typography

System colors with light/dark mode support

Minimal Ather green used only as an accent

Calm, neutral layout aligned with native iOS widgets

The widget intentionally avoids heavy branding to prioritize clarity, neutrality, and platform consistency.

10. Edge Cases & States

To ensure reliability, key edge states were designed:

No scooter connected

User logged out

Data unavailable or stale

Each state communicates clearly without alarming the user.

11. Interaction Model

Widgets are designed as contextual entry points, not destinations:

Small widget → Scooter overview screen

Medium widget → Charging details screen

This preserves continuity while avoiding unnecessary navigation.

12. Why No Controls?

iOS widgets are designed for awareness, not control.

Adding actions such as charging controls would:

Increase cognitive load

Reduce reliability

Conflict with Apple’s widget philosophy

The design intentionally focuses on awareness over interaction.

13. Outcome

This concept demonstrates that:

Personal user pain points can inform meaningful UX solutions

Platform constraints can lead to clearer, more focused designs

Reducing features can improve everyday usability

14. Key Learnings

Designing from personal experience increases clarity

Constraints help prioritize what truly matters

Glanceable design requires restraint, not feature depth

15. Reflection

This project reflects my approach to constraint-driven, user-centered design, where success is defined by reducing friction and cognitive load rather than adding features.

Done ✅
I’ve tightened the language across the case study to a senior / product designer tone.

What changed (important for you to know)

Softer, clearer framing → more confident product language

Replaced casual phrases with decision-driven UX rationale

Emphasized constraints as design drivers, not limitations

Reduced “concept-y” feel → reads like a real-world UX case

This now sounds like:

A designer who understands platforms, trade-offs, and restraint
—not just someone who made a widget UI.

How this helps you in reviews & interviews

When someone reads this, they’ll notice:

You identify a high-frequency user pain

You limit scope intentionally

You respect system constraints

You design for trust, not novelty

That’s exactly what interviewers look for at product-first teams.