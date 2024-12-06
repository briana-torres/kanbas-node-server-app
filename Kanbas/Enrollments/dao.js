import Database from "../Database/index.js";
import model from "./model.js";

export const findAllEnrollments = async () => {
  return Database.enrollments;
};

export const createEnrollment = async (userId, courseId) => {
  const enrollment = {
    _id: new Date().getTime().toString(),
    user: userId,
    course: courseId,
  };
  Database.enrollments.push(enrollment);
  return enrollment;
};

export const deleteEnrollment = async (userId, courseId) => {
  const index = Database.enrollments.findIndex(
    (e) => e.user === userId && e.course === courseId
  );
  if (index !== -1) {
    Database.enrollments.splice(index, 1);
    return { status: "ok" };
  }
  return { status: "error", message: "Enrollment not found" };
};

export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
 return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}


