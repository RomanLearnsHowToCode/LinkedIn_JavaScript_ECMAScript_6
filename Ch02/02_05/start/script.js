
/**
 * const ID make it Symbol, so you won't ever have conflicting names, line 3 
 * is declaring id as a symbol, and then in courseinfo we are creating another 
 * id which is JS COURSE
 * then on line 17 we are assigning value to ID as 41285
 * while logging this into console there are no issues
 * 
 */
 const id = Symbol();

 const courseInfo = {
     title: "JavaScript",
     topics: ["strings", "arrays", "objects"],
     id: "js-course"
 };
 
 courseInfo[id] = 41285;
 console.log(courseInfo);