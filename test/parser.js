const regex = /<h4 class="integration-item-heading"><a href="[^"]*"><strong class="bold-text-\d+">(.*?)<\/strong><\/a><\/h4>.*?<div>(парсер[\s\S]*?)<\/div><\/div>/gsi;
function extractAllInfo() {
  const htmlContent = document.body.innerHTML;
  const results = [];
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    results.push({
      title: match[1].replace(/<br>/gi, ' ').trim(),
      description: match[2].replace(/<[^>]*>/g, '').trim()
    });
  }
  return results;
}

// Call the function and log the result
var allResults = extractA
