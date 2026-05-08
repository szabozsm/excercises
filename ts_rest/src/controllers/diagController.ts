import { Request, Response, NextFunction } from 'express'
import { AppError } from '../middleware/errorHandler'


export const health = async (req: Request, res: Response, next: NextFunction) => {
  try {

    res.json({ status: 'success', data: "Everything is ok"})
  } catch (err) {
    next(err)
  }
}

 
