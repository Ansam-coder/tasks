function generateCourseInfo(courseInfo = {}) {
  const defaultInfo = {
    courseName: 'ES6',
    courseDuration: '3 days',
    courseOwner: 'JavaScript'
  };

  const check = Object.keys(courseInfo).filter(prop => !(prop in defaultInfo));
  if (check.length > 0) {
    throw new Error(`Unexpected properties: ${check.join(', ')}`);
  }

  const finalInfo = { ...defaultInfo, ...courseInfo };
  console.log(`Course Name: ${defaultInfo.courseName}`);
  console.log(`Course Duration: ${finalInfo.courseDuration}`);
  console.log(`Course Owner: ${finalInfo.courseOwner}`);
}

const courseInfo = {
  courseName: 'name',
  courseDuration: 'time',
  courseOwner: 'Ansam'
};

generateCourseInfo(courseInfo);
generateCourseInfo({  courseDuration: "3" , courseOwner: "iti", feature: "feat",});

console.log(generateCourseInfo())