import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export async function POST(request: Request) {
    const { username, password } = await request.json()

    const user = await prisma.user.findUnique({
        where: {
            username: username,
            password: password
        },
        select: {
            usertype: true
        }
    })

    return NextResponse.json(user)
}