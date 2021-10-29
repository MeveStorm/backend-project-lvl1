#!/usr/bin/env node

import game from '../src/index.js';
import { getQuestion, getDescription } from '../game/progression.js';

game(getDescription(), getQuestion);
