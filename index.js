const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];

function result(sentences) {
  let maxWordCount = 0;

  for (const sentence of sentences) {
    const words = sentence.split(' ');
    const wordCount = words.length;
    if (wordCount > maxWordCount) {
      maxWordCount = wordCount;
    }
  }

  return maxWordCount;
}

console.log(result(sentences));