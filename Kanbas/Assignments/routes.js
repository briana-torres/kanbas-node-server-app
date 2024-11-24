import * as dao from "./dao.js";

function AssignmentRoutes(app) {
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = dao.findAssignmentsForCourse(cid);
    res.send(assignments);
  });

  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = dao.createAssignment({ ...req.body, course: cid });
    res.send(newAssignment);
  });

  app.delete("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await dao.deleteAssignment(aid);
    res.send(status);
  });

  app.put("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await dao.updateAssignment(aid, req.body);
    res.send(status);
  });
}

export default AssignmentRoutes;