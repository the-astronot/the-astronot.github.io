---
layout: post
permalink: /_posts/2023-01-05-validating_states
permalink_name: "/posts/2023-01-05"
filename: "2023-01-05"
title: cat validating_states.md
link_title: validating_states
projects: game_of_war
---
**Thursday, 05 January, 2023**

Song of the Day: [**Short Change Hero**](https://youtu.be/GjTTB6yII4o) - *The Heavy*

I've continued working on the game for the last few days, but forgot to log my progress. Roughly, I have:

- Added Cities to the potential units
- Figured out a combat system
- Determined combat weights to assign to combatant pairs
- Added impassable terrain
- Figured out how to dynamically load files (for AI players)
- Reduced the actual game functions to collecting and interpreting states

Today I set out to complete the game state validator, to ensure that maps submitted by the players to not violate any of the implied rules of the game. I got that finished up relatively quickly, and was able to move on to other topics.

The current game logic looks like this:

- Setup
  - Determine who is playing what, board setup
- Game Loop
  - Broadcast Game State to Players
  - For Player in Players:
    - get_moves()
    - validate(moves)
  - Merge moves
    - prev_board
    - req'd combats
    - land takings
  - Check for winner
- End Game

With that out of the way, I started writing up the rules to add to the repo, hoping it would help explain to potential players how everything works and what they would need their programs to do. In doing so, I had the idea for dynamic map effects; stuff happening in-between rounds. This idea originated as a picture of impassable terrain being slowly burned down, allowing for new paths to be used. I though that was a pretty rad idea, and ended up creating the event check. Likewise, to allow for different win conditions, I have similarly turned the win condition into a win check. These would both allow the user to define their own win conditions/events and use them in game dynamically, much like choosing an AI player.

With those additions, the game logic becomes:

- Setup
  - Determine who is playing what, board setup
- Game Loop
  - Event checks
  - Broadcast Game State to Players
  - For Player in Players:
    - get_moves()
    - validate(moves)
  - Merge moves
    - prev_board
    - req'd combats
    - land takings
  - Check Win Conditions for Winner
- End Game

I'm currently just waiting on Vinny to get the map loader set up, and we should be good to go, and move on to the AI/Human Interface aspect.

[< Prev](/_posts/2023-01-01-__init__game_of_war)    [Next >](/_posts/2023-01-06-controls_check)
