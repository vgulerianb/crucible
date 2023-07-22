export const initDb = async (prismaConn) => {
  const { prisma } = await require("./../prisma/db");
  try {
    await prisma.$queryRaw`CREATE TABLE "conversations" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "session_id" TEXT,
    "query" TEXT,
    "response" TEXT,

    CONSTRAINT "conversations_pkey" PRIMARY KEY ("id")
);`;
  } catch (e) {
    console.log("Table already exists");
  }
  try {
    await prisma.$queryRaw`CREATE TABLE "generations" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "blog" TEXT,
    "thread" JSON,
    "session_id" TEXT,

    CONSTRAINT "generations_pkey" PRIMARY KEY ("id")
);`;
  } catch (e) {
    console.log("Table already exists");
  }
  try {
    await prisma.$queryRaw`CREATE TABLE "videos" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT,
    "content" TEXT,
    "session_id" TEXT,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);`;
  } catch (e) {
    console.log("Table already exists");
  }

  try {
    await prisma.$queryRaw`CREATE UNIQUE INDEX "videos_session_id_key" ON "videos"("session_id");`;
  } catch (e) {
    console.log("Table already exists");
  }

  try {
    await prisma.$queryRaw`ALTER TABLE "conversations" ADD CONSTRAINT "conversations_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "videos"("session_id") ON DELETE NO ACTION ON UPDATE NO ACTION;`;
  } catch (e) {
    console.log("Table already exists");
  }

  try {
    await prisma.$queryRaw`ALTER TABLE "generations" ADD CONSTRAINT "generations_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "videos"("session_id") ON DELETE NO ACTION ON UPDATE NO ACTION;`;
  } catch (e) {
    console.log("Table already exists");
  }
};
