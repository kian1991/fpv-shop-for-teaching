import { singleConnectionDb as db } from './client';
import {
  products,
  users,
  orders,
  orderPositions,
  category_enum,
  status_enum,
} from './schema';

async function seed() {
  console.log('Seeding database...');

  // user
  await db.insert(users).values({
    email: 'kianluetke@gmail.com',
    firstname: 'Kian',
    lastname: 'Lütke',
  });

  // Produkte hinzufügen
  const insertedProducts = await db
    .insert(products)
    .values([
      {
        name: 'FPV Freestyle Drone',
        category: category_enum.enumValues[1],
        price: '319.99',
        imageUrl: 'https://example.com/fpv-freestyle-drone.jpg',
        description:
          'Ein leistungsstarker FPV-Freestyle-Drohne für atemberaubende Manöver und Tricks.',
      },
      {
        name: 'Mini FPV Racing Drone',
        category: category_enum.enumValues[1],
        price: '249.99',
        imageUrl: 'https://example.com/mini-fpv-racing-drone.jpg',
        description:
          'Kompakte und wendige Renn-Drohne ideal für enge Parcours und schnelle Manöver.',
      },
      {
        name: 'FPV Drone Frame Pro',
        category: category_enum.enumValues[1],
        price: '89.99',
        imageUrl: 'https://example.com/fpv-drone-frame-pro.jpg',
        description:
          'Leichter und robuster Rahmen zur individuellen FPV-Drohnenkonstruktion.',
      },
      {
        name: 'Brushless FPV Motor Set',
        category: category_enum.enumValues[1],
        price: '74.99',
        imageUrl: 'https://example.com/brushless-fpv-motor-set.jpg',
        description:
          'Hochleistungsbürstenlose Motoren, perfekt abgestimmt für FPV-Drohnen.',
      },
      {
        name: 'FPV ESC 30A',
        category: category_enum.enumValues[1],
        price: '44.99',
        imageUrl: 'https://example.com/fpv-esc-30a.jpg',
        description:
          'Effiziente 30A ESCs für reibungslose Leistungssteuerung in FPV-Drohnen.',
      },
      {
        name: 'FPV Propeller Set',
        category: category_enum.enumValues[1],
        price: '14.99',
        imageUrl: 'https://example.com/fpv-propeller-set.jpg',
        description:
          'Hochwertige Propeller für optimale Flugperformance bei FPV-Rennen.',
      },
      {
        name: 'HD FPV Camera',
        category: category_enum.enumValues[1],
        price: '129.99',
        imageUrl: 'https://example.com/hd-fpv-camera.jpg',
        description:
          '1080p HD FPV-Kamera mit geringster Latenz für kristallklare Aufnahmen.',
      },
      {
        name: 'FPV VTX 5.8GHz',
        category: category_enum.enumValues[1],
        price: '59.99',
        imageUrl: 'https://example.com/fpv-vtx-5.8ghz.jpg',
        description:
          '5.8GHz Video Transmitter für ultra-niedrige Latenzübertragung im FPV-Flug.',
      },
      {
        name: 'FPV OSD Module',
        category: category_enum.enumValues[1],
        price: '39.99',
        imageUrl: 'https://example.com/fpv-osd-module.jpg',
        description:
          'On-Screen-Display-Modul zur Anzeige wichtiger Flugdaten direkt in den FPV-Brillen.',
      },
      {
        name: 'FPV Receiver Unit',
        category: category_enum.enumValues[1],
        price: '49.99',
        imageUrl: 'https://example.com/fpv-receiver-unit.jpg',
        description:
          'Empfängereinheit für stabile und unterbrechungsfreie FPV-Verbindungen.',
      },
      {
        name: 'FPV Antenna Pro',
        category: category_enum.enumValues[1],
        price: '29.99',
        imageUrl: 'https://example.com/fpv-antenna-pro.jpg',
        description:
          'Optimierte Antenne für maximale Reichweite und Signalstärke bei FPV-Drohnen.',
      },
      {
        name: 'FPV Battery Charger',
        category: category_enum.enumValues[1],
        price: '69.99',
        imageUrl: 'https://example.com/fpv-battery-charger.jpg',
        description:
          'Intelligenter Schnellladegerät für LiPo-Akkus und andere FPV-Batterien.',
      },
      {
        name: 'LiPo Battery 4S',
        category: category_enum.enumValues[1],
        price: '39.99',
        imageUrl: 'https://example.com/lipo-battery-4s.jpg',
        description:
          'Leistungsstarker 4S LiPo-Akku für Einsteiger und Freizeit-FPV-Drohnen.',
      },
      {
        name: 'LiPo Battery 12S',
        category: category_enum.enumValues[1],
        price: '129.99',
        imageUrl: 'https://example.com/lipo-battery-12s.jpg',
        description:
          'Hochspannungs-12S LiPo-Akku für extreme FPV-Leistung und Langstreckenflüge.',
      },
      {
        name: 'FPV Battery Strap',
        category: category_enum.enumValues[1],
        price: '9.99',
        imageUrl: 'https://example.com/fpv-battery-strap.jpg',
        description:
          'Robuster Batteriehalter zum sicheren Montieren von LiPo-Akkus an FPV-Drohnen.',
      },
      {
        name: 'FPV Spare Parts Kit',
        category: category_enum.enumValues[1],
        price: '59.99',
        imageUrl: 'https://example.com/fpv-spare-parts-kit.jpg',
        description:
          'Enthält diverse Ersatzteile wie Schrauben, Halterungen und Schutzkomponenten.',
      },
      {
        name: 'FPV Flight Controller X1',
        category: category_enum.enumValues[1],
        price: '89.99',
        imageUrl: 'https://example.com/fpv-flight-controller-x1.jpg',
        description:
          'Fortschrittlicher Flight Controller für präzise Flugsteuerung und Stabilität.',
      },
      {
        name: 'FPV Radio Transmitter',
        category: category_enum.enumValues[1],
        price: '119.99',
        imageUrl: 'https://example.com/fpv-radio-transmitter.jpg',
        description:
          'Ergonomischer und leistungsstarker Sender für reaktionsschnelle FPV-Steuerung.',
      },
      {
        name: 'FPV Control Board',
        category: category_enum.enumValues[1],
        price: '54.99',
        imageUrl: 'https://example.com/fpv-control-board.jpg',
        description:
          'Zuverlässige Steuerplatine für nahtlose Integration aller FPV-Komponenten.',
      },
      {
        name: 'FPV Prop Guard',
        category: category_enum.enumValues[1],
        price: '19.99',
        imageUrl: 'https://example.com/fpv-prop-guard.jpg',
        description:
          'Schutzvorrichtung, die die Propeller und Drohne bei Kollisionen bewahrt.',
      },
      {
        name: 'FPV Waterproof Frame',
        category: category_enum.enumValues[1],
        price: '99.99',
        imageUrl: 'https://example.com/fpv-waterproof-frame.jpg',
        description:
          'Wasserdichter Rahmen für den Einsatz unter widrigen Wetterbedingungen.',
      },
      {
        name: 'FPV LED Light Kit',
        category: category_enum.enumValues[1],
        price: '24.99',
        imageUrl: 'https://example.com/fpv-led-light-kit.jpg',
        description:
          'LED-Beleuchtung zur besseren Sichtbarkeit und zur optischen Aufwertung der Drohne.',
      },
      {
        name: 'FPV Landing Gear',
        category: category_enum.enumValues[1],
        price: '12.99',
        imageUrl: 'https://example.com/fpv-landing-gear.jpg',
        description:
          'Stabile Landegestell-Lösung für sanfte und sichere Landungen.',
      },
      {
        name: 'FPV Custom Frame Kit',
        category: category_enum.enumValues[1],
        price: '109.99',
        imageUrl: 'https://example.com/fpv-custom-frame-kit.jpg',
        description:
          'Anpassbares Rahmen-Kit zur individuellen Gestaltung deiner FPV-Drohne.',
      },
      {
        name: 'FPV Drone Tools Set',
        category: category_enum.enumValues[1],
        price: '34.99',
        imageUrl: 'https://example.com/fpv-drone-tools-set.jpg',
        description:
          'Werkzeugsatz speziell für Wartung und Reparatur von FPV-Drohnen.',
      },
      {
        name: 'FPV Racing Propellers',
        category: category_enum.enumValues[1],
        price: '16.99',
        imageUrl: 'https://example.com/fpv-racing-propellers.jpg',
        description:
          'Propeller, optimiert für höchste Drehzahlen und maximale Performance.',
      },
      {
        name: 'FPV HD Camera Upgrade',
        category: category_enum.enumValues[1],
        price: '139.99',
        imageUrl: 'https://example.com/fpv-hd-camera-upgrade.jpg',
        description:
          'Upgrade-Kit für bestehende FPV-Kameras zur Erhöhung der Bildqualität.',
      },
      {
        name: 'FPV VTX Mini',
        category: category_enum.enumValues[1],
        price: '49.99',
        imageUrl: 'https://example.com/fpv-vtx-mini.jpg',
        description:
          'Kompakter 5.8GHz VTX für minimale Größe und maximale Leistung.',
      },
      {
        name: 'FPV Long Range Module',
        category: category_enum.enumValues[1],
        price: '109.99',
        imageUrl: 'https://example.com/fpv-long-range-module.jpg',
        description:
          'Modul für extrem lange Reichweiten und stabile Verbindung auch über weite Distanzen.',
      },
      {
        name: 'FPV OSD Advanced',
        category: category_enum.enumValues[1],
        price: '49.99',
        imageUrl: 'https://example.com/fpv-osd-advanced.jpg',
        description:
          'Erweiterte On-Screen-Display-Lösung für zusätzliche Fluginformationen.',
      },
      {
        name: 'FPV Receiver Pro',
        category: category_enum.enumValues[1],
        price: '59.99',
        imageUrl: 'https://example.com/fpv-receiver-pro.jpg',
        description:
          'Verbesserter FPV-Empfänger für eine noch robustere Signalübertragung.',
      },
      {
        name: 'FPV Antenna Slim',
        category: category_enum.enumValues[1],
        price: '19.99',
        imageUrl: 'https://example.com/fpv-antenna-slim.jpg',
        description:
          'Schlanke Antenne für ein modernes Design und optimale Signalqualität.',
      },
      {
        name: 'FPV Battery Balance Charger',
        category: category_enum.enumValues[1],
        price: '79.99',
        imageUrl: 'https://example.com/fpv-battery-balance-charger.jpg',
        description:
          'Ladegerät mit Balancerfunktion für sicheren und effektiven LiPo-Ladevorgang.',
      },
      {
        name: 'LiPo Battery 3S',
        category: category_enum.enumValues[1],
        price: '29.99',
        imageUrl: 'https://example.com/lipo-battery-3s.jpg',
        description:
          'Kompakter 3S LiPo-Akku für kleine FPV-Drohnen und Trainingsmodelle.',
      },
      {
        name: 'FPV Flight Controller Nano',
        category: category_enum.enumValues[1],
        price: '69.99',
        imageUrl: 'https://example.com/fpv-flight-controller-nano.jpg',
        description:
          'Miniatur Flight Controller für extrem kompakte FPV-Setups.',
      },
      {
        name: 'FPV Radio Receiver Module',
        category: category_enum.enumValues[1],
        price: '39.99',
        imageUrl: 'https://example.com/fpv-radio-receiver-module.jpg',
        description:
          'Modul zur Erweiterung deines FPV-Systems mit zusätzlicher Reichweite.',
      },
      {
        name: 'FPV Dual Rate Switch',
        category: category_enum.enumValues[1],
        price: '14.99',
        imageUrl: 'https://example.com/fpv-dual-rate-switch.jpg',
        description:
          'Umschaltbare Steuerung für variable Flugmodi und Reaktionszeiten.',
      },
      {
        name: 'FPV Betaflight Tuning Kit',
        category: category_enum.enumValues[1],
        price: '24.99',
        imageUrl: 'https://example.com/fpv-betaflight-tuning-kit.jpg',
        description:
          'Tuning-Kit für präzise Einstellung und Optimierung deines Betaflight-Setups.',
      },
      {
        name: 'FPV HD Zero Camera',
        category: category_enum.enumValues[1],
        price: '159.99',
        imageUrl: 'https://example.com/fpv-hd-zero-camera.jpg',
        description:
          'Innovative HD Zero Kamera für eine extrem niedrige Latenz und brillante Bildqualität.',
      },
      {
        name: 'FPV 2.4GHz Control Module',
        category: category_enum.enumValues[1],
        price: '69.99',
        imageUrl: 'https://example.com/fpv-2-4ghz-control-module.jpg',
        description:
          '2.4GHz Steuerungsmodul für stabile und schnelle FPV-Drohnenkommunikation.',
      },
      {
        name: 'FPV Smart Battery Monitor',
        category: category_enum.enumValues[1],
        price: '34.99',
        imageUrl: 'https://example.com/fpv-smart-battery-monitor.jpg',
        description:
          'Intelligentes Monitoring-System zur Überwachung der Batterieleistung in Echtzeit.',
      },
      {
        name: 'FPV Flight Data Logger',
        category: category_enum.enumValues[1],
        price: '44.99',
        imageUrl: 'https://example.com/fpv-flight-data-logger.jpg',
        description:
          'Erfasst und speichert alle wichtigen Flugdaten für spätere Analysen.',
      },
      {
        name: 'FPV Video Receiver Base',
        category: category_enum.enumValues[1],
        price: '54.99',
        imageUrl: 'https://example.com/fpv-video-receiver-base.jpg',
        description:
          'Basisstation für den Empfang und die Verarbeitung von FPV-Videosignalen.',
      },
      {
        name: 'FPV HD Transmitter Pro',
        category: category_enum.enumValues[1],
        price: '129.99',
        imageUrl: 'https://example.com/fpv-hd-transmitter-pro.jpg',
        description:
          'Professioneller HD-Transmitter für gestochen scharfe FPV-Übertragungen.',
      },
      {
        name: 'FPV 4K Camera Module',
        category: category_enum.enumValues[1],
        price: '199.99',
        imageUrl: 'https://example.com/fpv-4k-camera-module.jpg',
        description:
          '4K Kamera Modul für ultimative Bildschärfe bei FPV-Aufnahmen.',
      },
      {
        name: 'FPV Analog VTX',
        category: category_enum.enumValues[1],
        price: '39.99',
        imageUrl: 'https://example.com/fpv-analog-vtx.jpg',
        description:
          'Zuverlässiger analoger Video Transmitter für klassische FPV-Systeme.',
      },
      {
        name: 'FPV Dual Camera Mount',
        category: category_enum.enumValues[1],
        price: '19.99',
        imageUrl: 'https://example.com/fpv-dual-camera-mount.jpg',
        description:
          'Halterung für den gleichzeitigen Einsatz von zwei FPV-Kameras.',
      },
      {
        name: 'FPV Race Simulator Controller',
        category: category_enum.enumValues[1],
        price: '79.99',
        imageUrl: 'https://example.com/fpv-race-simulator-controller.jpg',
        description:
          'Controller speziell für FPV-Rennsimulatoren zur Verbesserung deiner Skills.',
      },
      {
        name: 'FPV HD Goggle Upgrade',
        category: category_enum.enumValues[1],
        price: '99.99',
        imageUrl: 'https://example.com/fpv-hd-goggle-upgrade.jpg',
        description:
          'Upgrade-Kit für FPV-Brillen für ein noch intensiveres Flugerlebnis.',
      },
      {
        name: 'FPV Onboard Recorder',
        category: category_enum.enumValues[1],
        price: '44.99',
        imageUrl: 'https://example.com/fpv-onboard-recorder.jpg',
        description:
          'Aufzeichnungssystem zur gleichzeitigen Speicherung von FPV-Flugdaten und Video.',
      },
      {
        name: 'FPV Signal Booster',
        category: category_enum.enumValues[1],
        price: '39.99',
        imageUrl: 'https://example.com/fpv-signal-booster.jpg',
        description:
          'Erhöht die Reichweite und Stabilität deines FPV-Signals bei schwierigen Bedingungen.',
      },
      {
        name: 'FPV High-Performance ESC',
        category: category_enum.enumValues[1],
        price: '59.99',
        imageUrl: 'https://example.com/fpv-high-performance-esc.jpg',
        description:
          'Optimierte ESCs für maximale Reaktionsgeschwindigkeit und Effizienz im FPV-Flug.',
      },
      {
        name: 'FPV Propeller Balancer',
        category: category_enum.enumValues[1],
        price: '24.99',
        imageUrl: 'https://example.com/fpv-propeller-balancer.jpg',
        description:
          'Hilfsgerät zum präzisen Auswuchten der Propeller für vibrationsfreien Flug.',
      },
      {
        name: 'FPV Airframe Repair Kit',
        category: category_enum.enumValues[1],
        price: '29.99',
        imageUrl: 'https://example.com/fpv-airframe-repair-kit.jpg',
        description:
          'Reparaturset für schnelle Instandsetzungen an beschädigten FPV-Rahmen.',
      },
      {
        name: 'FPV Quick-Swap Battery Mount',
        category: category_enum.enumValues[1],
        price: '19.99',
        imageUrl: 'https://example.com/fpv-quick-swap-battery-mount.jpg',
        description:
          'Schnellwechselbarer Batteriehalter für unterbrechungsfreie FPV-Flüge.',
      },
      {
        name: 'FPV Advanced Tuning Software',
        category: category_enum.enumValues[1],
        price: '49.99',
        imageUrl: 'https://example.com/fpv-advanced-tuning-software.jpg',
        description:
          'Software zur detaillierten Feinabstimmung deiner FPV-Drohnenparameter.',
      },
      {
        name: 'FPV Power Distribution Board',
        category: category_enum.enumValues[1],
        price: '34.99',
        imageUrl: 'https://example.com/fpv-power-distribution-board.jpg',
        description:
          'Verteilerplatine für eine effiziente Stromversorgung aller FPV-Komponenten.',
      },
      {
        name: 'FPV Modular Wiring Harness',
        category: category_enum.enumValues[1],
        price: '14.99',
        imageUrl: 'https://example.com/fpv-modular-wiring-harness.jpg',
        description:
          'Modulares Kabelbaum-Set zur individuellen Verkabelung deiner FPV-Drohne.',
      },
      {
        name: 'FPV Quick Release Mount',
        category: category_enum.enumValues[1],
        price: '16.99',
        imageUrl: 'https://example.com/fpv-quick-release-mount.jpg',
        description:
          'Praktische Halterung für schnellen Wechsel von FPV-Kameras oder Sensoren.',
      },
      {
        name: 'FPV Onboard GPS Module',
        category: category_enum.enumValues[1],
        price: '39.99',
        imageUrl: 'https://example.com/fpv-onboard-gps-module.jpg',
        description:
          'GPS-Modul für präzise Navigation und Flugroutenaufzeichnung in FPV-Drohnen.',
      },
      {
        name: 'FPV Telemetry System',
        category: category_enum.enumValues[1],
        price: '59.99',
        imageUrl: 'https://example.com/fpv-telemetry-system.jpg',
        description:
          'Sende- und Empfangssystem für umfassende Telemetrie-Daten in Echtzeit.',
      },
      {
        name: 'FPV Battery Voltage Checker',
        category: category_enum.enumValues[1],
        price: '12.99',
        imageUrl: 'https://example.com/fpv-battery-voltage-checker.jpg',
        description:
          'Handliches Gerät zur Überwachung der Spannung deines FPV-Batteriepakets.',
      },
      {
        name: 'FPV Smart Flight Controller',
        category: category_enum.enumValues[1],
        price: '99.99',
        imageUrl: 'https://example.com/fpv-smart-flight-controller.jpg',
        description:
          'Integrierte Lösung mit intelligenten Funktionen zur Flugoptimierung.',
      },
      {
        name: 'FPV Low Latency Module',
        category: category_enum.enumValues[1],
        price: '44.99',
        imageUrl: 'https://example.com/fpv-low-latency-module.jpg',
        description:
          'Minimiert die Verzögerung zwischen Steuerung und Bildübertragung für reaktionsschnelles Fliegen.',
      },
      {
        name: 'FPV Compact VTX',
        category: category_enum.enumValues[1],
        price: '34.99',
        imageUrl: 'https://example.com/fpv-compact-vtx.jpg',
        description:
          'Kompakter Video Transmitter für leichtgewichtige FPV-Drohnen.',
      },
      {
        name: 'FPV Dual Band Receiver',
        category: category_enum.enumValues[1],
        price: '69.99',
        imageUrl: 'https://example.com/fpv-dual-band-receiver.jpg',
        description:
          'Empfänger, der zwischen 2.4GHz und 5.8GHz wechselt für optimale Empfangsqualität.',
      },
      {
        name: 'FPV Motor Mount Kit',
        category: category_enum.enumValues[1],
        price: '22.99',
        imageUrl: 'https://example.com/fpv-motor-mount-kit.jpg',
        description:
          'Montagesatz für FPV-Motoren, der Stabilität und einfache Installation garantiert.',
      },
      {
        name: 'FPV High-Voltage Battery',
        category: category_enum.enumValues[1],
        price: '89.99',
        imageUrl: 'https://example.com/fpv-high-voltage-battery.jpg',
        description:
          'Speziell entwickelte Hochspannungsbatterie für extreme FPV-Performance.',
      },
      {
        name: 'FPV Foldable Drone',
        category: category_enum.enumValues[1],
        price: '259.99',
        imageUrl: 'https://example.com/fpv-foldable-drone.jpg',
        description:
          'Kompakte, faltbare Drohne, ideal für unterwegs und spontane FPV-Flüge.',
      },
      {
        name: 'FPV All-in-One Kit',
        category: category_enum.enumValues[1],
        price: '299.99',
        imageUrl: 'https://example.com/fpv-all-in-one-kit.jpg',
        description:
          'Umfangreiches Paket mit allem, was du für den Aufbau einer FPV-Drohne brauchst.',
      },
      {
        name: 'FPV Long Range Receiver',
        category: category_enum.enumValues[1],
        price: '79.99',
        imageUrl: 'https://example.com/fpv-long-range-receiver.jpg',
        description:
          'Empfänger mit extra Reichweite für Langstrecken-FPV-Abenteuer.',
      },
      {
        name: 'FPV Digital VTX',
        category: category_enum.enumValues[1],
        price: '99.99',
        imageUrl: 'https://example.com/fpv-digital-vtx.jpg',
        description:
          'Digitaler Video Transmitter für gestochen scharfe und stabile Übertragungen.',
      },
      {
        name: 'FPV Battery Connector Kit',
        category: category_enum.enumValues[1],
        price: '9.99',
        imageUrl: 'https://example.com/fpv-battery-connector-kit.jpg',
        description:
          'Set von Verbindern und Kabeln zum sicheren Anschluss deiner FPV-Batterien.',
      },
      {
        name: 'FPV Quick Disconnect Harness',
        category: category_enum.enumValues[1],
        price: '12.99',
        imageUrl: 'https://example.com/fpv-quick-disconnect-harness.jpg',
        description:
          'Ermöglicht schnelles und sicheres Trennen der Batterieversorgung bei FPV-Drohnen.',
      },
      {
        name: 'FPV High-End Drone Kit',
        category: category_enum.enumValues[1],
        price: '399.99',
        imageUrl: 'https://example.com/fpv-high-end-drone-kit.jpg',
        description:
          'Premium-Kit für ambitionierte FPV-Piloten, inklusive aller High-End-Komponenten.',
      },
      {
        name: 'FPV Propeller Guard Pro',
        category: category_enum.enumValues[1],
        price: '21.99',
        imageUrl: 'https://example.com/fpv-propeller-guard-pro.jpg',
        description:
          'Verbessert den Schutz deiner Propeller mit einem professionellen Guard-System.',
      },
      {
        name: 'FPV VTX Power Booster',
        category: category_enum.enumValues[1],
        price: '29.99',
        imageUrl: 'https://example.com/fpv-vtx-power-booster.jpg',
        description:
          'Erhöht die Sendeleistung deines VTX für eine noch stabilere FPV-Übertragung.',
      },
      {
        name: 'FPV Drone Cooling Fan',
        category: category_enum.enumValues[1],
        price: '14.99',
        imageUrl: 'https://example.com/fpv-drone-cooling-fan.jpg',
        description:
          'Kompakter Lüfter zur optimalen Kühlung der FPV-Drohnenkomponenten.',
      },
      {
        name: 'FPV Integrated GPS Tracker',
        category: category_enum.enumValues[1],
        price: '49.99',
        imageUrl: 'https://example.com/fpv-integrated-gps-tracker.jpg',
        description:
          'Integriertes GPS-Tracking für präzise Standortbestimmung und Flugroutenaufzeichnung.',
      },
      {
        name: 'FPV Adjustable Camera Mount',
        category: category_enum.enumValues[1],
        price: '16.99',
        imageUrl: 'https://example.com/fpv-adjustable-camera-mount.jpg',
        description:
          'Flexible Kamerahalterung zur Anpassung des Blickwinkels deiner FPV-Aufnahmen.',
      },
      {
        name: 'FPV Full HD Goggle Set',
        category: category_enum.enumValues[1],
        price: '189.99',
        imageUrl: 'https://example.com/fpv-full-hd-goggle-set.jpg',
        description:
          'Modernes Brillenset mit Full HD-Display für ein immersives FPV-Erlebnis.',
      },
      {
        name: 'FPV Altitude Sensor',
        category: category_enum.enumValues[1],
        price: '22.99',
        imageUrl: 'https://example.com/fpv-altitude-sensor.jpg',
        description: 'Sensor zur präzisen Messung der Flughöhe in Echtzeit.',
      },
      {
        name: 'FPV 360° Camera Mount',
        category: category_enum.enumValues[1],
        price: '27.99',
        imageUrl: 'https://example.com/fpv-360-camera-mount.jpg',
        description:
          'Ermöglicht die Montage von 360°-Kameras an deiner FPV-Drohne.',
      },
      {
        name: 'FPV Silent Propellers',
        category: category_enum.enumValues[1],
        price: '17.99',
        imageUrl: 'https://example.com/fpv-silent-propellers.jpg',
        description:
          'Speziell designte Propeller für einen leiseren Flug ohne Leistungseinbußen.',
      },
      {
        name: 'FPV VTX Cooling System',
        category: category_enum.enumValues[1],
        price: '24.99',
        imageUrl: 'https://example.com/fpv-vtx-cooling-system.jpg',
        description:
          'Kühlkörper und Lüfter zur optimalen Temperaturregulierung deines VTX.',
      },
      {
        name: 'FPV Carbon Fiber Frame',
        category: category_enum.enumValues[1],
        price: '129.99',
        imageUrl: 'https://example.com/fpv-carbon-fiber-frame.jpg',
        description:
          'Hochfester Carbonfaserrahmen für maximale Stabilität und geringes Gewicht.',
      },
      {
        name: 'FPV Prop Grip Enhancer',
        category: category_enum.enumValues[1],
        price: '11.99',
        imageUrl: 'https://example.com/fpv-prop-grip-enhancer.jpg',
        description:
          'Verbessert den Halt und die Effizienz deiner FPV-Propeller beim Flug.',
      },
      {
        name: 'FPV Emergency Stop Module',
        category: category_enum.enumValues[1],
        price: '34.99',
        imageUrl: 'https://example.com/fpv-emergency-stop-module.jpg',
        description:
          'Notfallmodul, das in kritischen Situationen einen sofortigen Flugstopp ermöglicht.',
      },
      {
        name: 'FPV Quick Charge LiPo',
        category: category_enum.enumValues[1],
        price: '49.99',
        imageUrl: 'https://example.com/fpv-quick-charge-lipo.jpg',
        description:
          'LiPo-Akku mit Schnellladefunktion für minimalen Ausfall der Flugzeit.',
      },
      {
        name: 'FPV Propeller Sync System',
        category: category_enum.enumValues[1],
        price: '19.99',
        imageUrl: 'https://example.com/fpv-propeller-sync-system.jpg',
        description:
          'Sorgt für perfekten Abgleich und Synchronisation aller Propeller im Flug.',
      },
      {
        name: 'FPV Digital Receiver Pro',
        category: category_enum.enumValues[1],
        price: '79.99',
        imageUrl: 'https://example.com/fpv-digital-receiver-pro.jpg',
        description:
          'Digitaler Empfänger mit erweiterten Funktionen für moderne FPV-Systeme.',
      },
      {
        name: 'FPV Flight Mode Switch',
        category: category_enum.enumValues[1],
        price: '14.99',
        imageUrl: 'https://example.com/fpv-flight-mode-switch.jpg',
        description:
          'Schalter für schnellen Wechsel zwischen verschiedenen Flugmodi in FPV-Drohnen.',
      },
      {
        name: 'FPV Altitude Hold Module',
        category: category_enum.enumValues[1],
        price: '24.99',
        imageUrl: 'https://example.com/fpv-altitude-hold-module.jpg',
        description:
          'Modul zur automatischen Stabilisierung der Flughöhe für einen ruhigeren Flug.',
      },
      {
        name: 'FPV Signal Analyzer',
        category: category_enum.enumValues[1],
        price: '44.99',
        imageUrl: 'https://example.com/fpv-signal-analyzer.jpg',
        description:
          'Analysiert und optimiert das FPV-Signal für verbesserte Reichweite und Klarheit.',
      },
      {
        name: 'FPV Flight Stabilizer Kit',
        category: category_enum.enumValues[1],
        price: '54.99',
        imageUrl: 'https://example.com/fpv-flight-stabilizer-kit.jpg',
        description:
          'Kit zur zusätzlichen Stabilisierung während turbulenter FPV-Flüge.',
      },
      {
        name: 'FPV Dual Battery System',
        category: category_enum.enumValues[1],
        price: '89.99',
        imageUrl: 'https://example.com/fpv-dual-battery-system.jpg',
        description:
          'Ermöglicht den parallelen Einsatz von zwei Batterien für verlängerte Flugzeiten.',
      },
      {
        name: 'FPV Smart Propeller Saver',
        category: category_enum.enumValues[1],
        price: '16.99',
        imageUrl: 'https://example.com/fpv-smart-propeller-saver.jpg',
        description:
          'Schützt deine Propeller vor Beschädigungen bei harten Landungen und Kollisionen.',
      },
      {
        name: 'FPV Racing Controller Pro',
        category: category_enum.enumValues[1],
        price: '99.99',
        imageUrl: 'https://example.com/fpv-racing-controller-pro.jpg',
        description:
          'Hochpräziser Controller für den anspruchsvollen FPV-Rennsport.',
      },
      {
        name: 'FPV Immersive VR Goggles',
        category: category_enum.enumValues[1],
        price: '159.99',
        imageUrl: 'https://example.com/fpv-immersive-vr-goggles.jpg',
        description:
          'VR-Brillen, die dir ein noch intensiveres FPV-Erlebnis bieten, fast als wärst du im Cockpit.',
      },
      {
        name: 'FPV All-Weather Drone',
        category: category_enum.enumValues[1],
        price: '349.99',
        imageUrl: 'https://example.com/fpv-all-weather-drone.jpg',
        description:
          'Drohne, die auch bei widrigen Wetterbedingungen stabile Flugeigenschaften aufweist.',
      },
      {
        name: 'FPV Race Ready Kit',
        category: category_enum.enumValues[1],
        price: '279.99',
        imageUrl: 'https://example.com/fpv-race-ready-kit.jpg',
        description:
          'Komplettes Set für den Einstieg in den FPV-Rennsport, inklusive aller essenziellen Komponenten.',
      },
      {
        name: 'FPV Ultimate Parts Bundle',
        category: category_enum.enumValues[1],
        price: '499.99',
        imageUrl: 'https://example.com/fpv-ultimate-parts-bundle.jpg',
        description:
          'Ein exklusives Bundle mit hochwertigen Teilen für die ultimative FPV-Drohne.',
      },
    ])
    .returning();

  console.log('Inserted products:', insertedProducts);

  // Bestellung hinzufügen
  const insertedOrder = await db
    .insert(orders)
    .values({
      userId: 1,
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
