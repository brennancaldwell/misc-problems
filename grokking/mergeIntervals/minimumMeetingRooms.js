/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/xVoBRZz7RwP

Given a list of intervals representing the start and end time of ‘N’
meetings, find the minimum number of rooms required to hold all the
meetings.
*/

const min_meeting_rooms = function(meetings) {
  if (meetings.length < 2) { return meetings.length; }
  meetings.sort((a, b) => a.start - b.start);
  let start = meetings[0].start, end = meetings[0].end, rooms = 0;
  for (let endTrack = 0; endTrack < meetings.length; endTrack++) {
    end = Math.max(end, meetings[endTrack].end);
  }
  for (let i = start; i < end; i++) {
    let overlaps = 0;
    let windowEnd = i + 1;
    for (let j = 0; j < meetings.length; j++) {
      if (overlap(meetings[j], i, windowEnd)) {
        overlaps++;
      }
    }
    rooms = Math.max(overlaps, rooms);
  }
  return rooms;
};

const overlap = (interval, start, end) => {
  return (start >= interval.start && start < interval.end)
          || (end > interval.start && end <= interval.end);
}

/*
My (naive) approach, based on how I would solve this without code: by
looking at the time slots themselves and finding out how many meetings
are going on concurrently. The greatest number at any given time will
represent the number of rooms we need.
*/