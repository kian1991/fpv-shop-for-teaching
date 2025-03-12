import { singleConnectionDb as db } from './client';
import {
  products,
  orders,
  orderPositions,
  category_enum,
  status_enum,
} from './schema';

async function seed() {
  console.log('Seeding database...');

  // Produkte hinzufügen
  const insertedProducts = await db
    .insert(products)
    .values([
      {
        name: 'FPV Racing Drone',
        category: category_enum.enumValues[1],
        price: '299.99',
        imageUrl: 'https://example.com/fpv-racing-drone.jpg',
        description:
          'High-speed FPV racing drone with powerful motors and long-range transmission.',
      },
      {
        name: 'Cinewhoop Drone',
        category: category_enum.enumValues[1],
        price: '199.99',
        imageUrl: 'https://example.com/cinewhoop.jpg',
        description:
          'A compact cinewhoop drone perfect for cinematic FPV footage.',
      },
      {
        name: 'FPV Goggles',
        category: category_enum.enumValues[1],
        price: '149.99',
        imageUrl: 'https://example.com/fpv-goggles.jpg',
        description:
          'High-resolution FPV goggles with low-latency video transmission.',
      },
      {
        name: 'LiPo Battery 6S',
        category: category_enum.enumValues[1],
        price: '59.99',
        imageUrl: 'https://example.com/lipo-6s.jpg',
        description: 'A high-capacity 6S LiPo battery for FPV drones.',
      },
      {
        name: 'TBS Crossfire Module',
        category: category_enum.enumValues[1],
        price: '99.99',
        imageUrl: 'https://example.com/tbs-crossfire.jpg',
        description:
          'Long-range control module for FPV drones with ultra-low latency.',
      },
    ])
    .returning();

  console.log('Inserted products:', insertedProducts);

  // Bestellung hinzufügen
  const insertedOrder = await db
    .insert(orders)
    .values({
      status: status_enum.enumValues[0],
    })
    .returning();

  console.log('Inserted order:', insertedOrder);

  // Bestellpositionen hinzufügen
  if (insertedOrder.length > 0) {
    await db.insert(orderPositions).values([
      {
        orderId: insertedOrder[0].id,
        productId: insertedProducts[0].id,
        quantity: '2',
        price: '299.99',
      },
      {
        orderId: insertedOrder[0].id,
        productId: insertedProducts[2].id,
        quantity: '1',
        price: '499.99',
      },
    ]);

    console.log('Inserted order positions');
  }

  console.log('Seeding completed!');
}

seed()
  .catch(console.error)
  .finally(() => {
    process.exit(0); // Status Code 0 = Alles gut
  });
