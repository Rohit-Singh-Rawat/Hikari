/*
  Warnings:

  - The values [LIFESTYLE,TECHNOLOGY,FASHION,FOOD_AND_COOKING,FINANCE_AND_BUSINESS,TRAVEL,PARENTING,DIY_AND_CRAFTS,SELF_IMPROVEMENT,ENTERTAINMENT,OTHERS] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('lifestyle', 'technology', 'fashion', 'food_and_cooking', 'finance_and_business', 'travel', 'parenting', 'diy_and_crafts', 'self_improvement', 'entertainment', 'others');
ALTER TABLE "Blog" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "excerpt" DROP DEFAULT;
