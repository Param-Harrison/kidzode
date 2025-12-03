-- Add ratings table
CREATE TABLE IF NOT EXISTS ratings (
  id SERIAL PRIMARY KEY,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  course_id VARCHAR(100) NOT NULL,
  lesson_id VARCHAR(100) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 0 AND rating <= 3),
  test_results JSONB,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Add bookmarks table
CREATE TABLE IF NOT EXISTS bookmarks (
  id SERIAL PRIMARY KEY,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  course_id VARCHAR(100) NOT NULL,
  lesson_id VARCHAR(100) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE(student_id, course_id, lesson_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ratings_student_id ON ratings(student_id);
CREATE INDEX IF NOT EXISTS idx_ratings_lesson_id ON ratings(lesson_id);
CREATE INDEX IF NOT EXISTS idx_ratings_course_id ON ratings(course_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_student_id ON bookmarks(student_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_lesson_id ON bookmarks(lesson_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_course_id ON bookmarks(course_id);

