import Database from "../Database/index.js";

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

