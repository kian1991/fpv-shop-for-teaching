CREATE TYPE "public"."category_enum" AS ENUM('Clothing', 'Electronics', 'Home', 'Beauty & Health', 'Gifts');--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"category" "category_enum" NOT NULL,
	"image_url" text NOT NULL,
	"description" text NOT NULL
);
