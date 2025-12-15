# Head-to-Head Record Matrix (Node.js)

This repository contains a simple Node.js script that reads a JSON file of team
win-loss records versus opponents and generates a formatted head-to-head matrix
table similar to Sports Reference head-to-head summaries.

## Features
- Uses nested objects to store matchup data
- Dynamically discovers all teams
- Displays wins versus opponents
- Shows `--` for same-team matchups

## How It Works
The script reads a JSON file where each team contains its win/loss record against
other teams. It then builds a matrix where rows represent teams, columns represent
opponents, and each cell displays the number of wins for the row team against the
column team.

## Run
```bash
node h2h_matrix.js
