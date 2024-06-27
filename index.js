// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const headquarters = 42; // Headquarters location
    return Math.abs(street - headquarters); // Absolute difference to get blocks
  }
  function distanceFromHqInFeet(street) {
    const blockInFeet = 264; // Assuming each block is 264 feet
    const blocksAway = Math.abs(street - 42); // Number of blocks away from headquarters
    return blocksAway * blockInFeet; // Calculate distance in feet
  }
  function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264; // Assuming each block is 264 feet
    const distanceInBlocks = Math.abs(destination - start); // Number of blocks travelled
    return distanceInBlocks * blockInFeet; // Calculate distance in feet
  }
  function calculatesFarePrice(start, destination) {
    const blockInFeet = 264; // Assuming each block is 264 feet
    const freeFeet = 400; // First 400 feet are free
    const totalFeet = Math.abs(destination - start) * blockInFeet; // Calculate total feet traveled
  
    if (totalFeet <= freeFeet) {
      return 0; // Free sample
    } else if (totalFeet > freeFeet && totalFeet <= 2000) {
      const feetBeyondFree = totalFeet - freeFeet;
      const farePrice = 0.02 * feetBeyondFree;
      return parseFloat(farePrice.toFixed(2)); // Charge 2 cents per foot, rounded to 2 decimal places
    } else if (totalFeet > 2000 && totalFeet <= 2500) {
      return 25; // Charge $25 for distances over 2000 feet but less than or equal to 2500 feet
    } else {
      return 'cannot travel that far'; // Don't allow rides over 2500 feet
    }
  }