import prisma from '../config/db.js';

export async function findAll({completed}) {
  if (completed === "true") {
    return prisma.task.findMany({
      where: {completed: {equals: true}}
    });
  }
  else if (completed === "false") {
    return prisma.task.findMany({
      where: {completed: {equals: false}}
    });
  }
  else {
    return prisma.task.findMany();
  }
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
