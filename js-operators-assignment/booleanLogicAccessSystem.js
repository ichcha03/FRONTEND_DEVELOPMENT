// Q5. Boolean Logic Access System

// Security condition variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Function to check security status
function checkSecurity() {
  // Access is granted only if all conditions are true
  let isSecure =
    isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

  if (isSecure) {
    console.log("Secure");
  } else {
    console.log("Unsafe");
  }
}

// Test multiple outcomes by changing values
checkSecurity();

isOwnerInside = false;
checkSecurity();

isAlarmOn = false;
isOwnerInside = true;
checkSecurity();
