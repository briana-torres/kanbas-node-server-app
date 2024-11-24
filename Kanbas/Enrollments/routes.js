import * as dao from "./dao.js";

function EnrollmentRoutes(app) {
  app.get("/api/enrollments", async (req, res) => {
    const enrollments = await dao.findAllEnrollments();
    res.json(enrollments);
  });

  app.post("/api/enrollments", async (req, res) => {
    const { userId, courseId } = req.body;
    const enrollment = await dao.createEnrollment(userId, courseId);
    res.json(enrollment);
  });

  app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await dao.deleteEnrollment(userId, courseId);
    res.json(status);
  });
}

export default EnrollmentRoutes;