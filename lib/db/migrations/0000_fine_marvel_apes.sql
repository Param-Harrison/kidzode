CREATE TABLE "accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"owner_id" integer NOT NULL,
	"account_type" varchar(20) NOT NULL,
	"stripe_customer_id" text,
	"stripe_subscription_id" text,
	"stripe_product_id" text,
	"subscription_status" varchar(20),
	"subscription_type" varchar(20),
	"class_code" varchar(6),
	"subscription_tier" varchar(20),
	"student_limit" integer,
	"student_count" integer DEFAULT 0,
	"metered_units" integer,
	"current_period_end" timestamp,
	"price_locale" varchar(10),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "accounts_stripe_customer_id_unique" UNIQUE("stripe_customer_id"),
	CONSTRAINT "accounts_stripe_subscription_id_unique" UNIQUE("stripe_subscription_id"),
	CONSTRAINT "accounts_class_code_unique" UNIQUE("class_code")
);
--> statement-breakpoint
CREATE TABLE "activity_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"account_id" integer,
	"action" text NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"ip_address" varchar(45),
	"metadata" jsonb
);
--> statement-breakpoint
CREATE TABLE "bookmarks" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_id" integer NOT NULL,
	"course_id" varchar(100) NOT NULL,
	"lesson_id" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "classroom_students" (
	"id" serial PRIMARY KEY NOT NULL,
	"classroom_id" integer NOT NULL,
	"student_id" integer NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"joined_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "classrooms" (
	"id" serial PRIMARY KEY NOT NULL,
	"teacher_account_id" integer NOT NULL,
	"name" varchar(100) NOT NULL,
	"class_code" varchar(6) NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "classrooms_class_code_unique" UNIQUE("class_code")
);
--> statement-breakpoint
CREATE TABLE "feedback" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_id" integer NOT NULL,
	"course_id" varchar(100) NOT NULL,
	"lesson_id" varchar(100) NOT NULL,
	"thumbs_up" boolean NOT NULL,
	"comment" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "feedback_student_id_course_id_lesson_id_unique" UNIQUE("student_id","course_id","lesson_id")
);
--> statement-breakpoint
CREATE TABLE "oauth_accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"provider" varchar(20) NOT NULL,
	"provider_account_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"expires_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_id" integer NOT NULL,
	"course_id" varchar(100) NOT NULL,
	"lesson_id" varchar(100) NOT NULL,
	"status" varchar(20) NOT NULL,
	"completed_at" timestamp,
	"data" jsonb,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ratings" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_id" integer NOT NULL,
	"course_id" varchar(100) NOT NULL,
	"lesson_id" varchar(100) NOT NULL,
	"rating" integer NOT NULL,
	"test_results" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"parent_account_id" integer,
	"display_name" varchar(100) NOT NULL,
	"avatar_url" varchar(500),
	"pin" varchar(60),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100),
	"email" varchar(255),
	"password_hash" text,
	"user_type" varchar(20) NOT NULL,
	"date_of_birth" date,
	"email_verified" boolean DEFAULT false NOT NULL,
	"email_verification_token" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "classroom_students" ADD CONSTRAINT "classroom_students_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "classroom_students" ADD CONSTRAINT "classroom_students_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "classrooms" ADD CONSTRAINT "classrooms_teacher_account_id_accounts_id_fk" FOREIGN KEY ("teacher_account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "oauth_accounts" ADD CONSTRAINT "oauth_accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "progress" ADD CONSTRAINT "progress_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_parent_account_id_accounts_id_fk" FOREIGN KEY ("parent_account_id") REFERENCES "public"."accounts"("id") ON DELETE no action ON UPDATE no action;