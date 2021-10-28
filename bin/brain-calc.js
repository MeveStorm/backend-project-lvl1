#!/usr/bin/env node

import game from '../src/index.js';
import { getQuestion, getDescription } from '../game/calc.js';

game(getDescription(), getQuestion);
