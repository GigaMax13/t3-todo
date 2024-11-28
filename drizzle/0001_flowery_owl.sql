ALTER TABLE "todo_todo" ADD COLUMN "user_id" varchar(256) NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_idx" ON "todo_todo" USING btree ("user_id");