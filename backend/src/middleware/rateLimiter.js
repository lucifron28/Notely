import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("unique-rate-limit-key"); // TODO: replace with user id once auth is implemented
    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }
    next();
  } catch (error) {
    console.log(`Rate limit error: ${error}`);
    next(error);
  }
};

export default rateLimiter;
