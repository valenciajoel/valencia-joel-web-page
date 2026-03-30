type RateLimitInfo = { count: number; firstHit: number };

const rateLimiter = new Map<string, RateLimitInfo>();
const MAX_REQUESTS = 3;
const TIME_WINDOW_MS = 60 * 60 * 1000; // 1 hour

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const info = rateLimiter.get(ip);

  if (!info) {
    rateLimiter.set(ip, { count: 1, firstHit: now });
    return true;
  }

  if (now - info.firstHit > TIME_WINDOW_MS) {
    rateLimiter.set(ip, { count: 1, firstHit: now });
    return true;
  }

  if (info.count >= MAX_REQUESTS) {
    return false;
  }

  info.count += 1;
  return true;
}
