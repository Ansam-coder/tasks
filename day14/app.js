const courseInfo = {
  courseName: 'ES6',
  courseDuration: '3 days',
  courseOwner: 'JavaScript'
};

courseInfo[Symbol.iterator] = function* () {
  const keys = Object.keys(this);
  for (const key of keys) {
      yield [key, this[key]];
  }
};

for (const [property, value] of courseInfo) {
  console.log(`${property}: ${value}`);
}