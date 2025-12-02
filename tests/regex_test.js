
const expected = ".*H E L L O.*JACK.*AMAZING.*";
const actual = "🌈🌈🌈 H E L L O JACK 🌈🌈🌈 YOU ARE AMAZING!!! 🎉";

console.log("Expected:", expected);
console.log("Actual:", actual);

// Logic from usePyodide.ts
let passed = false;
try {
  // Escape special regex characters except .* which we want to keep as wildcard
  const escapedPattern = expected
    .replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')  // Escape special chars
    .replace(/\\\.\\\*/g, '.*')              // Restore .* as wildcard
  
  console.log("Escaped Pattern:", escapedPattern);
  
  const regex = new RegExp(escapedPattern, 'is')  // i=case insensitive, s=dotall
  console.log("Regex:", regex);
  
  passed = regex.test(actual);
} catch (regexError) {
  console.log("Regex error:", regexError);
  // If regex fails, fall back to simple includes check
  passed = actual.includes(expected.replace(/\.\*/g, ''));
}

console.log("Passed:", passed);
