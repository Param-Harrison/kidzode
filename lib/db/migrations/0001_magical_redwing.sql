-- Add new subscription tier fields to accounts table
ALTER TABLE accounts ADD COLUMN subscription_tier varchar(20);
ALTER TABLE accounts ADD COLUMN student_limit integer;
ALTER TABLE accounts ADD COLUMN student_count integer DEFAULT 0;
ALTER TABLE accounts ADD COLUMN metered_units integer;
ALTER TABLE accounts ADD COLUMN current_period_end timestamp;