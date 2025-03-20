import { singleConnectionDb } from './db/client';

async function runner() {
  const result = await singleConnectionDb.query.orders.findMany({
    with: {
      orderPositions: {
        with: {
          product: true,
        },
      },
    },
  });
  console.log(JSON.stringify(result, null, 2));
}
runner();
