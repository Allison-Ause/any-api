
DROP table if exists crystals;

CREATE table crystals (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR,
  meaning VARCHAR,
  zodiac_sign VARCHAR,
  rare BOOLEAN
);

INSERT INTO crystals (name, meaning, zodiac_sign, rare) VALUES
('Tigers Eye', 'Confidence', 'Aries', false),
('Red Jasper', 'Grounding', 'Cancer', false),
('Lapis Lazuli', 'Decision Making', 'Libra', true),
('Celestite', 'Communicating Emotions', 'Gemini', false),
('Lepidolite', 'Change', 'Virgo', true);
