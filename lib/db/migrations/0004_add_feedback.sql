-- Add feedback table
CREATE TABLE IF NOT EXISTS feedback (
  id SERIAL PRIMARY KEY,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  course_id VARCHAR(100) NOT NULL,
  lesson_id VARCHAR(100) NOT NULL,
  thumbs_up BOOLEAN NOT NULL,
  comment TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE(student_id, course_id, lesson_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_feedback_student_id ON feedback(student_id);
CREATE INDEX IF NOT EXISTS idx_feedback_lesson_id ON feedback(lesson_id);
CREATE INDEX IF NOT EXISTS idx_feedback_course_id ON feedback(course_id);

