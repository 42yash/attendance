import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export async function POST (req: Request): Promise<NextResponse> {
  const data = await req.json()
  console.log(data)
  const user = await prisma.user.create({
    data: {
      username: data.username,
      password: data.password,
      usertype: data.usertype
    }
  })
  console.log(user)


  return NextResponse.json({ data })
}
