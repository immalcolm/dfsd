# Goal: Practice algorithmic thinking via pseudo code

## 🤔 Activity: Logic riddle 
You are in a room with three light switches. Only one switch controls a light bulb inside a closed room. The other two switches do nothing.

You can only open the door ONCE to check the bulb.

How do you figure out which switch controls the bulb?


## 🧬 Discussion
Think aloud together. Emphasize control flow and decision-making.
- Think about the properties of a bulb.
- Can you use touch or temperature?

## Answer
- Turn Switch 1 ON and leave it on for a few minutes.
- Then turn Switch 1 OFF and turn Switch 2 ON.

- Immediately go into the room:
    - If the bulb is ON → Switch 2 controls it.

    - If the bulb is OFF but warm → Switch 1 controls it.

    - If the bulb is OFF and cold → Switch 3 controls it.

## Summary
The above story is like programming

If condition happens, then do something.

You must plan ahead for "what-ifs" and unexpected behavior (errors, lying guards = bugs).

Transition naturally into "this is why we think like computers first before coding."

