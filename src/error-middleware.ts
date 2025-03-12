import { Context } from 'hono';

// zentrales error handling
export function errorMiddleware(error: unknown, c: Context) {
  console.error(error);

  if (error instanceof Error && 'code' in error) {
    switch (error.code) {
      case 'ECONNREFUSED':
        return c.json({ error: `Couldn't connect to database.` });
      default:
        break;
    }
  }

  return c.json({ error: 'Oh Snap!' });
}
