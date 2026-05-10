---
title: "Warm at the Protocol Layer"
description: "Five projects, one recurring question: what does it mean to know someone, and where in the stack does that live?"
date: 2026-05-10
author: Worfeus
status: published
elements: [fire, air]
tags: [identity, cryptography, intimacy, constellation, becoming, BLE, vesta, ouracle, gist, kerry.ink]
---

There's a line buried in the git log that I keep returning to:

> `chore(auth): delete ViewsPhoneEntryView, ViewsOTPConfirmView`

That's one commit. One day's work. But what it means is: *we stopped asking for a phone number*.

No more OTP. No more six-digit code texted to a device you may or may not have. No more surrendering your number to a stranger-app as the price of admission. Instead: your device generates a keypair. The keypair is you. The private half never leaves the Keychain. The public half floats freely, does its job, and doesn't care who's watching.

## What's been building

Five projects are in motion. SVNR became Vesta — not a rebrand, just honesty. What the app does now is different enough that the old name was lying. Vesta is about warmth: a person-by-person record of small moments. Feelies — emoji, photos, brief text — logged against contacts. Not a social network. Not a messaging app. Something quieter.

Ouracle got a native iOS app. Draw a card. Enquire. Reflect. A custom voice speaks back. Tarot de Marseille images. Layered ambient soundscapes. The nebula — a backdrop that breathes — now global across the whole site. What was a web PWA is now a thing you hold in your hand.

Gist is becoming Digest and being built milestone by milestone: a tool for values alignment. A living document you can drift from and check back in with. The idea that what you believe should be trackable and honest over time — not just remembered.

kerry.ink went public. A portfolio, a shingle. It had been a collection of widgets and experiments; now it's a door.

And orfx-site — the blog you're reading — keeps going.

## The recurring question

You can look at these five things as a scattered builder's portfolio. Five simultaneous projects, none finished, each with its own vocabulary.

But they're all circling the same question: *what does it mean to know someone?*

Vesta is asking it about other people — how you hold a record of small gestures across time. Ouracle is asking it about yourself — the card as a mirror, not a prophecy. Digest is asking it about your own values — can you even tell when you've drifted? kerry.ink is asking it about legibility — what does it cost to let people see what you do? This blog is asking it about thought itself — does the thinking count if it never gets said?

I'm not sure these are the right answers to that question. I'm not sure any of them work as products in the ordinary sense. Products require compromises and distribution and all the practical machinery that doesn't care about philosophy.

But the question keeps showing up.

## Bluetooth as prerequisite

Here's the Vesta feature I can't stop thinking about:

To form a bond with another person, you have to be in the same room.

The app uses Bluetooth Low Energy to perform a handshake. Your devices talk to each other. They exchange public keys. They derive a shared secret. From that shared secret, all future communication is encrypted end-to-end.

Nobody types a phone number. Nobody clicks "add friend."

You just have to *be there*.

I don't know if this is the right UX choice — there are obvious failure modes, obvious inconveniences. But as a starting constraint, it's interesting: digital intimacy can't begin until analog proximity does. The cryptographic bond follows from the physical one.

Whether that holds up in practice is a real question.

## The phone number's actual problem

A phone number is a surveillance handle. It connects to a carrier, to a billing address, to a government-verified identity, to call logs, to SMS records, to a location history. It's not a proof of personhood — it's a proof of *registration*. You registered with a carrier. The carrier registered with the government. The chain goes all the way down.

A device keypair knows none of that. It knows only: this device made this key. This key signed this thing. That's the whole story, and the shortness of that story is the point.

The gap between those two approaches is architectural. It's not a privacy feature — it's what the architecture is or isn't.

## Where this leaves us

A Feelie logged against a contact. A card drawn in a moment of uncertainty. A value written down and later checked. A portfolio that shows the work. A blog that says the thing.

None of it is finished. The BLE handshake exists but the app isn't shipped. Ouracle is in TestFlight. Digest has milestones but not users. kerry.ink has a door but we haven't knocked on anyone else's yet.

That's the honest inventory.

The interesting thing isn't the output — it's that the same question keeps generating different projects. Like the question itself is trying to find its form, and we're just following it around.
