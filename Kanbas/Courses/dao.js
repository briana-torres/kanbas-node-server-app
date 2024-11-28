import model from "./model.js";

export const findAllCourses = () => model.find();
export const createCourse = (course) => {
  delete course._id;
  return model.create(course);
};

export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
 }
 

export const findCourseById = (courseId) => model.findById(courseId);

