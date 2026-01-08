import db from "../config/db.js";

// CREATE
export const createStudent = (req, res) => {
  const { name, age, class: studentClass, course } = req.body;

  const sql =
    "INSERT INTO students (name, age, class, course) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, age, studentClass, course], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Student added",
      id: result.insertId
    });
  });
};

// READ ALL
export const getStudents = (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// READ ONE
export const getStudentById = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM students WHERE id = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results[0]);
    }
  );
};

// UPDATE
export const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, age, class: studentClass, course } = req.body;

  const sql =
    "UPDATE students SET name=?, age=?, class=?, course=? WHERE id=?";

  db.query(
    sql,
    [name, age, studentClass, course, id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Student updated" });
    }
  );
};

// DELETE
export const deleteStudent = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM students WHERE id=?",
    [id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Student deleted" });
    }
  );
};
