/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let prize = 0;
  
  if(size == 'small'){
    if(type == 'regular'){
      prize = 3;
    }
    else if( type == 'latte'){
      prize = 3 + 1;
    }
    else if(type == 'cappuccino'){
      prize = 3 + 1.5;
    }
    else if(type == 'mocha'){
      prize = 3 + 2;
    }
    else{
      return -1;
    }
  }
  else if(size == 'medium'){
    if(type == 'regular'){
      prize = 4;
    }
    else if( type == 'latte'){
      prize = 4 + 1;
    }
    else if(type == 'cappuccino'){
      prize = 4 + 1.5;
    }
    else if (type == 'mocha'){
      prize = 4 + 2;
    }
    else{
      return -1;
    }
  }
  else if(size == 'large'){
    if(type == 'regular'){
      prize = 5;
    }
    else if( type == 'latte'){
      prize = 5 + 1;
    }
    else if(type == 'cappuccino'){
      prize = 5 + 1.5;
    }
    else if(type == 'mocha'){
      prize = 5 + 2;
    }
    else{
      return -1;
    }
  }
  else{
    return -1;
  }

  prize += extras.extraShot ? 0.75 : 0;
  prize += extras.whippedCream ? 0.50 : 0;
  return prize;

}
