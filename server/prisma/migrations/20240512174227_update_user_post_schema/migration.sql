-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "postImg" TEXT DEFAULT 'https://res.cloudinary.com/ytx/image/upload/v1715095202/foyp0xkxkwntfusvulas.jpg',
ADD COLUMN     "publishedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "readTime" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "reads" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/ytx/image/upload/v1715095202/foyp0xkxkwntfusvulas.jpg';
