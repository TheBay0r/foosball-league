import {Schema} from 'mongoose';
import {Resource} from 'rest-io';

var player = new Resource({
  name: 'player',
  model: {
    firstName: String,
    lastName: String,
    victories: Number,
    draws: Number,
    defeats: Number,
    points: Number
  }
});

export = player;