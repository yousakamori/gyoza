import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import * as z from 'zod'

// import { withMethods } from '@/lib/api-middlewares/with-methods'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
// import { userNameSchema } from '@/lib/validations/user'
import { withCurrentUser } from '@/lib/with-current-user'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  //   if (req.method === 'PATCH') {
  try {
    const session = await getServerSession(req, res, authOptions)
    const user = session?.user

    const body = req.body

    console.log(req.body)

    //   if (body?.name) {
    //     const payload = userNameSchema.parse(body)

    //     await db.user.update({
    //       where: {
    //         id: user.id,
    //       },
    //       data: {
    //         name: payload.name,
    //       },
    //     })
    //   }

    return res.end()
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(422).json(error.issues)
    }

    return res.status(422).end()
  }
  //   }
}

export default withCurrentUser(handler)
